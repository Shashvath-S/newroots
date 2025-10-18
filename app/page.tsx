export default function Home() {
  return (
    <>
      <div className="max-w-auto mx-auto bg-white shadow-xl border border-gray-200 mt-8 mb-12">
        <section className="bg-emerald-100" aria-label="Hero">
          <div className="container mx-auto px-6 lg:px-12 py-24 text-center">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
              NewRoots
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Grow your future. Build your roots.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/signin"
                className="px-5 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 bg-white shadow-sm hover:shadow"
              >
                Sign In
              </a>
              <a
                href="/register"
                className="px-5 py-2.5 rounded-md text-sm text-white bg-gray-800 shadow hover:bg-gray-900"
              >
                Register
              </a>
            </div>
          </div>
        </section>

        <div className="w-full overflow-hidden">
          <img
            src="/mnt/data/d1716715-c24e-4659-8c90-aca1ac13b8fe.png"
            alt="Forest trees"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <footer className="bg-white">
          <div className="container mx-auto px-6 lg:px-12 py-10">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              <div className="md:col-span-1 flex flex-col items-start gap-6">
                <div className="text-3xl font-bold text-gray-800">ꟷꟷ</div>

                <div className="flex gap-3">
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
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-4 .97-6.14 1.55A4.48 4.48 0 0 0 12 5.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5A4.5 4.5 0 0 0 23 3z" />
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
                </div>
              </div>

              <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="max-w-6xl mx-auto mt-6 text-gray-300 text-xs px-6 lg:px-12">
        <p className="text-right">© NewRoots</p>
      </div>
    </>
  );
}
