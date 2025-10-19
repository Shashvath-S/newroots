import { auth } from "@/auth";

export default async function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-2 flex flex-col items-start gap-6">
            <div className="text-3xl font-bold text-gray-800">ꟷꟷ</div>

            {/* Manual path construction of logos for X */}
            <div className="flex items-center w-full">
              <div className="flex gap-3 items-center">
                <a
                  href="#"
                  className="inline-flex items-center p-2 rounded hover:bg-gray-100"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gray-700"
                  >
                    <path d="M2 2L9.5 12.3L2 22h2.3l6.5-8.5L17.3 22H22l-7.7-10.6L22 2h-2.3l-6 7.8L8 2H2z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center p-2 rounded hover:bg-gray-100"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gray-700"
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center p-2 rounded hover:bg-gray-100"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gray-700"
                  >
                    <path d="M22 8s-.2-1.7-.8-2.4c-.7-.8-1.5-.8-1.9-.9C16.8 4.4 12 4.4 12 4.4s-4.8 0-7.3.3c-.4 0-1.2.1-1.9.9C2.2 6.3 2 8 2 8s-.2 1.6-.2 3.2V13c0 1.6.2 3.2.2 3.2s.2 1.7.8 2.4c.7.8 1.6.8 2 1 1.5.3 6.9.3 6.9.3s4.8 0 7.3-.3c.4-.1 1.2-.2 1.9-.9.6-.7.8-2.4.8-2.4s.2-1.6.2-3.2V11c0-1.6-.2-3.2-.2-3.2zM10 14.5V9.5l5 2.5-5 2.5z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center p-2 rounded hover:bg-gray-100"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-gray-700"
                  >
                    <path d="M4.98 3.5C4.98 5 3.86 6.06 2.5 6.06 1.14 6.06 0 5 0 3.5 0 2 1.12.94 2.48.94c1.36 0 2.5 1.06 2.5 2.56zM0 8.94h5v14.06H0V8.94zM9 8.94h4.8v1.92h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V23H19.2v-6.48c0-1.55-.03-3.55-2.16-3.55-2.17 0-2.5 1.7-2.5 3.45V23H9V8.94z" />
                  </svg>
                </a>

                <a href="#" className="inline-flex items-center p-2 rounded">
                  <section className="ml-2 whitespace-nowrap">
                    © 2025 NewRoots. All rights reserved.
                  </section>
                </a>
              </div>

              {/* right spacer to keep center text visually centered in the container */}
              <div className="w-24" />
            </div>
          </div>

          {/* Commented out area includes code for columns of links/info for potential future usage */}
          {/* <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-sm text-gray-800">
                Lorem Ipsum
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm text-gray-800">
                Lorem Ipsum
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm text-gray-800">
                Lorem Ipsum
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
                <li> Lorem Ipsum</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
