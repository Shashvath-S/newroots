"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";

// Key data for Message objects
type Message = {
  id: number;
  side: "left" | "right";
  text: string;
  meta?: string;
  time?: string;
};

// Key data for Conversation objects
type Conversation = {
  id: number;
  name: string;
  snippet: string;
  time: string;
};

// Base storage keys (Namespaced per user)
const BASE_STORAGE_KEY_MESSAGES = "messaging:messages_v1";
const BASE_STORAGE_KEY_CONVERSATIONS = "messaging:conversations_v1";
const userKeyFor = (base: string, userId: string) => `${base}:${userId}`;

export default function Messaging() {
  // Session namespaces stored data per account
  const { data: session } = useSession();
  const userKey =
    session?.user?.email ?? session?.user?.id ?? session?.user?.name ?? "anon";

  // Load initial conversations through array, by filling a Conversation with set messages
  const initialConversations: Conversation[] = new Array(10)
    .fill(0)
    .map((_, i) => ({
      id: i,
      name: `Name ${i + 1}`,
      snippet: "No Messages Yet",
      time: "00:00",
    }));

  // Load initial messages for the first conversation (per-user default)
  const initialMessages: Record<number, Message[]> = {
    0: [
      {
        id: 1,
        side: "left",
        text: "Hello! Any suggestions for activities to do?",
        time: "10:00",
      },
      {
        id: 2,
        side: "right",
        text: "Perhaps we could try this?",
        meta: "Homemade Dumplings\neverydumplingever.com",
        time: "10:04",
      },
      {
        id: 3,
        side: "right",
        text: "Let's do it!",
        time: "10:07",
      },
    ],
  };

  // Load initial states of messaging features
  const [conversationsState, setConversationsState] =
    useState<Conversation[]>(initialConversations);
  const [selectedId, setSelectedId] = useState<number>(
    initialConversations[0].id
  );
  const [messagesMap, setMessagesMap] =
    useState<Record<number, Message[]>>(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // UI state: three-dots menu open, editing mode, single add input
  const [menuOpen, setMenuOpen] = useState(false);
  const [editingState, setEditingState] = useState<{
    isEditing: boolean;
    conversationId: number | null;
    messageId: number | null;
  }>({ isEditing: false, conversationId: null, messageId: null });
  const [addName, setAddName] = useState<string>("");

  // Load persisted messages and conversations for the CURRENT user only
  useEffect(() => {
    try {
      const msgsKey = userKeyFor(BASE_STORAGE_KEY_MESSAGES, userKey);
      const convsKey = userKeyFor(BASE_STORAGE_KEY_CONVERSATIONS, userKey);

      const rawMsgs = localStorage.getItem(msgsKey);
      const rawConvs = localStorage.getItem(convsKey);

      if (rawMsgs) {
        // replace initial messages with the per-user stored messages
        const parsed = JSON.parse(rawMsgs) as Record<number, Message[]>;
        setMessagesMap(parsed);
      } else {
        // ensure each user starts with the same defaults (do not merge other users' data)
        setMessagesMap(initialMessages);
      }

      if (rawConvs) {
        const parsedConvs = JSON.parse(rawConvs) as Conversation[];
        if (Array.isArray(parsedConvs)) {
          setConversationsState(parsedConvs);
        }
      } else {
        setConversationsState(initialConversations);
      }
    } catch (err) {
      console.warn("Failed to load messaging state:", err);
      setMessagesMap(initialMessages);
      setConversationsState(initialConversations);
    }
    // Reloads upon new user key
  }, [userKey]);

  // Persist messages and conversations under the CURRENT user's keys
  useEffect(() => {
    try {
      const msgsKey = userKeyFor(BASE_STORAGE_KEY_MESSAGES, userKey);
      const convsKey = userKeyFor(BASE_STORAGE_KEY_CONVERSATIONS, userKey);
      localStorage.setItem(msgsKey, JSON.stringify(messagesMap));
      localStorage.setItem(convsKey, JSON.stringify(conversationsState));
    } catch (err) {
      console.warn("Failed to save messaging state:", err);
    }
  }, [messagesMap, conversationsState, userKey]);

  // Auto-scroll to the bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messagesMap, selectedId]);

  // Helpers for menu actions
  const blockUser = (convId: number) => {
    // Remove conversation and its messages
    setConversationsState((prev) => prev.filter((c) => c.id !== convId));
    setMessagesMap((prev) => {
      const copy = { ...prev };
      delete copy[convId];
      return copy;
    });

    // select another conversation if needed
    setTimeout(() => {
      setMenuOpen(false);
      setEditingState({
        isEditing: false,
        conversationId: null,
        messageId: null,
      });
      setConversationsState((prev) => {
        const remaining = prev.filter((c) => c.id !== convId);
        if (remaining.length) {
          setSelectedId(remaining[0].id);
          return remaining;
        } else {
          // create a default blank conversation if none left
          const newId = Date.now();
          const conv: Conversation = {
            id: newId,
            name: "New Contact",
            snippet: "No Messages Yet",
            time: "00:00",
          };
          setSelectedId(newId);
          setMessagesMap((prevMsgs) => ({ ...prevMsgs, [newId]: [] }));
          return [conv];
        }
      });
    }, 0);
  };

  const renameUser = (convId: number) => {
    const conv = conversationsState.find((c) => c.id === convId);
    if (!conv) return setMenuOpen(false);
    const newName = window.prompt("Enter a new display name:", conv.name);
    if (newName && newName.trim()) {
      setConversationsState((prev) =>
        prev.map((c) => (c.id === convId ? { ...c, name: newName.trim() } : c))
      );
    }
    setMenuOpen(false);
  };

  const startEditPreviousMessage = (convId: number) => {
    const msgs = messagesMap[convId] ?? [];
    // find last message sent by "right" (current user)
    const lastSent = [...msgs].reverse().find((m) => m.side === "right");
    if (!lastSent) {
      window.alert("No previous message from you to edit.");
      setMenuOpen(false);
      return;
    }
    setEditingState({
      isEditing: true,
      conversationId: convId,
      messageId: lastSent.id,
    });
    setMenuOpen(false);
    // pre-fill input with the message text for easier editing
    setInput(lastSent.text);
  };

  // Send message function (with current time and updating)
  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    // If editing mode active and matched to selected conversation -> update message
    if (
      editingState.isEditing &&
      editingState.conversationId === selectedId &&
      editingState.messageId != null
    ) {
      setMessagesMap((prev) => {
        const list = prev[selectedId] ?? [];
        const updated = list.map((m) =>
          m.id === editingState.messageId
            ? {
                ...m,
                text,
                time: new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
              }
            : m
        );
        return { ...prev, [selectedId]: updated };
      });
      // update snippet/time on conversation
      setConversationsState((prev) =>
        prev.map((c) =>
          c.id === selectedId
            ? {
                ...c,
                snippet: text,
                time: new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
              }
            : c
        )
      );
      // clear editing state & input
      setEditingState({
        isEditing: false,
        conversationId: null,
        messageId: null,
      });
      setInput("");
      return;
    }

    const newMsg: Message = {
      id: Date.now(),
      side: "right",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Updates message maps
    setMessagesMap((prev) => {
      const prevList = prev[selectedId] ?? [];
      return {
        ...prev,
        [selectedId]: [...prevList, newMsg],
      };
    });

    // Local update to conversations (not global)
    setConversationsState((prev) => {
      const exists = prev.find((p) => p.id === selectedId);
      if (exists) {
        return prev.map((c) =>
          c.id === selectedId
            ? { ...c, snippet: newMsg.text, time: newMsg.time ?? "" }
            : c
        );
      }
      // if conversation not found, create it
      const conv: Conversation = {
        id: selectedId,
        name: `Name ${selectedId + 1}`,
        snippet: newMsg.text,
        time: newMsg.time ?? "",
      };
      return [...prev, conv];
    });

    setInput("");
  };

  // Enter key handler for message sending
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  // Constant for map of selected messages
  const selectedMessages = messagesMap[selectedId] ?? [];

  // Add-user handler (single add box)
  const handleAddUser = () => {
    const name = addName.trim();
    if (!name) {
      window.alert("Please enter a username.");
      return;
    }
    // create new id
    const maxId =
      conversationsState.length > 0
        ? Math.max(...conversationsState.map((c) => c.id))
        : 0;
    const newId = maxId + 1 + Math.floor(Math.random() * 1000); // avoid collisions
    const newConv: Conversation = {
      id: newId,
      name,
      snippet: "No Messages Yet",
      time: "00:00",
    };
    setConversationsState((prev) => [...prev, newConv]);
    setMessagesMap((prev) => ({ ...prev, [newId]: [] }));

    // clear the add input but keep the input box available (do not create extra boxes)
    setAddName("");
  };

  const cancelEdit = () => {
    setEditingState({
      isEditing: false,
      conversationId: null,
      messageId: null,
    });
    setInput("");
  };

  return (
    <>
      {/* Use a height calculated from the viewport minus the site's header/navigation.
          The variable --site-header-height can be set globally in your layout or root CSS.
          Fallback is 96px if not defined. Prevent page-level scrolling and make the messaging
          container handle internal scrolling. */}
      <div
        className="h-[calc(100vh- var(--site-header-height, 96px))] overflow-hidden bg-white text-gray-800 font-sans"
        // keep layout stable if CSS calc needs no spaces: ensure valid calc expression
        style={{ height: `calc(100vh - var(--site-header-height, 96px))` }}
      >
        <main className="max-w-auto mx-auto px-4 py-8 h-full">
          <div className="bg-emerald-100 rounded-xl shadow-md border border-gray-100 overflow-hidden h-full flex flex-col">
            {/* Header (fixed height within the messaging panel) */}
            <div className="bg-white px-4 py-3 border-b border-gray-200 flex items-center gap-4 flex-none">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
                <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
                <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
              </div>
            </div>

            {/* Main content: conversations + messages. This area fills the remaining height and
                controls internal scrolling so the whole page doesn't scroll. */}
            <div className="flex-1 flex gap-6 p-6 overflow-hidden">
              {/* Increase base width and enforce min-width so longest contact fits without horizontal scroll.
                  Keep aside relative with higher z-index so Add button stays visible above messages. */}
              <aside className="relative z-10 flex-none w-72 min-w-[260px] bg-white rounded-lg p-4 flex flex-col gap-4 border border-gray-100 h-full">
                <h4 className="text-sm font-semibold text-gray-600">
                  Conversations
                </h4>

                {/* Make the list scroll internally */}
                <div className="flex-1 overflow-auto space-y-3 pr-1">
                  {conversationsState.map((c) => (
                    <div
                      key={c.id}
                      onClick={() => setSelectedId(c.id)}
                      className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer ${
                        c.id === selectedId ? "bg-gray-50" : ""
                      }`}
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                        👤
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-800 truncate">
                          {c.name}
                        </div>
                        <div className="text-xs text-gray-400 truncate">
                          {c.snippet}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">{c.time}</div>
                    </div>
                  ))}
                </div>

                {/* Single Add box area at bottom (keeps one input only) */}
                <div className="mt-2">
                  <div className="flex gap-2 items-center">
                    <input
                      value={addName}
                      onChange={(e) => setAddName(e.target.value)}
                      placeholder="Add username..."
                      className="flex-1 px-3 py-1 rounded border border-gray-200 text-sm"
                    />
                    <button
                      onClick={handleAddUser}
                      className="px-3 py-1 bg-emerald-600 text-white rounded text-sm cursor-pointer"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </aside>

              {/* Messages section sits next to the aside; ensure it doesn't cover the aside's bottom controls */}
              <section className="flex-1 bg-white rounded-lg p-6 flex flex-col border border-gray-100 h-full relative z-0">
                <div className="flex items-center gap-3 mb-4">
                  <button className="text-gray-600">←</button>

                  <h3 className="text-lg font-semibold text-gray-700 flex-1">
                    {conversationsState.find((c) => c.id === selectedId)
                      ?.name ?? "No Conversation"}
                  </h3>

                  {/* three-dots menu */}
                  <div className="relative">
                    <button
                      onClick={() => setMenuOpen((s) => !s)}
                      className="px-2 py-1 rounded hover:bg-gray-100"
                      title="Options"
                    >
                      ⋮
                    </button>
                    {menuOpen && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-sm z-10">
                        <button
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm"
                          onClick={() => blockUser(selectedId)}
                        >
                          Block user
                        </button>
                        <button
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm"
                          onClick={() => renameUser(selectedId)}
                        >
                          Rename user
                        </button>
                        <button
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm"
                          onClick={() => startEditPreviousMessage(selectedId)}
                        >
                          Edit last sent message
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* If editing mode is active, show a small banner */}
                {editingState.isEditing &&
                  editingState.conversationId === selectedId && (
                    <div className="mb-3 p-2 rounded bg-yellow-50 border border-yellow-100 text-sm flex items-center justify-between">
                      <div>
                        Editing previous message — your next send will update
                        it.
                      </div>
                      <button
                        onClick={cancelEdit}
                        className="ml-3 text-xs px-2 py-1 border rounded bg-white"
                      >
                        Cancel
                      </button>
                    </div>
                  )}

                {/* Message list area scrolls internally and fits between header and composer */}
                <div className="flex-1 overflow-auto p-2 space-y-4">
                  {selectedMessages.map((m) => (
                    <div
                      key={m.id}
                      className={
                        m.side === "left"
                          ? "flex items-start gap-3"
                          : "flex justify-end"
                      }
                    >
                      {m.side === "left" ? (
                        <>
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                            👤
                          </div>
                          <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl max-w-xs">
                            {m.text}
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-end gap-2">
                          <div className="bg-gray-800 text-white px-4 py-2 rounded-2xl max-w-xs text-sm">
                            {m.text}
                          </div>
                          {m.meta && (
                            <div className="bg-gray-100 rounded-lg p-3 text-xs text-gray-500 text-right max-w-xs whitespace-pre-wrap">
                              {m.meta}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-3">
                    {/* Attach file button [VISUAL] */}
                    <button
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
                      title="Attach"
                    >
                      ＋
                    </button>

                    {/* Message typing input (with enter key functionality) */}
                    <div className="flex-1 relative">
                      <input
                        placeholder="Type a message"
                        className="w-full border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-100"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />

                      {/* Send button can also send message (using enter key functionality) */}
                      <button
                        onClick={sendMessage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                        title="Send"
                      >
                        ➤
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
