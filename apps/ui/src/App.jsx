import { Outlet, Link } from "react-router-dom";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div>
          <div className="sticky inset-x-0 top-0 z-30 w-full transition-all">
            <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
              <div className="flex h-14 items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Link to="/">Teeny Tiny Links</Link>
                  <nav
                    aria-label="Main"
                    data-orientation="horizontal"
                    dir="ltr"
                    className="relative hidden lg:block"
                  >
                    <div style={{ position: "relative" }}>
                      <ul
                        data-orientation="horizontal"
                        className="flex flex-row space-x-2 p-4"
                        dir="ltr"
                      >
                        <li>
                          <button
                            id="radix-:r3:-trigger-radix-:r4:"
                            data-state="closed"
                            aria-expanded="false"
                            aria-controls="radix-:r3:-content-radix-:r4:"
                            className="group flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none"
                            data-radix-collection-item=""
                          >
                            <p className="text-sm font-medium text-gray-500 transition-colors ease-out group-hover:text-black">
                              Features
                            </p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 transition-all group-data-[state=open]:rotate-180"
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </li>
                        <a
                          id="nav-customers"
                          className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
                          href="/customers"
                        >
                          Customers
                        </a>
                        <a
                          id="nav-changelog"
                          className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
                          href="/changelog"
                        >
                          Changelog
                        </a>
                        <a
                          id="nav-help"
                          className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
                          href="/help"
                        >
                          Help
                        </a>
                        <a
                          id="nav-pricing"
                          className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
                          href="/pricing"
                        >
                          Pricing
                        </a>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="hidden lg:block">
                  <SignedOut>
                    <Link
                      className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
                      to="/login"
                    >
                      Log in
                    </Link>
                    <Link
                      className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
                      to="/sign-up"
                    >
                      Sign Up
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <SignOutButton
                      className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
                      afterSignOutUrl="/"
                    />
                  </SignedIn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </main>
    </>
  );
}

export default App;
