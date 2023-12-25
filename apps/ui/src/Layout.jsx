import { Outlet, Link } from "react-router-dom";
import {
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import Footer from "./footer";
import Example from "./components/popover";

function Layout() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div className="min-h-screen flex flex-col justify-between bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[length:2rem_2rem]">
          <div className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-white/75">
            <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
              <div className="flex h-14 items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Link to="/">G Links</Link>
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
                          {/* <button
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
                          </button> */}
                          <Example />
                        </li>
                        <a
                          id="nav-pricing"
                          className="rounded-md px-3 py-2 text-sm font-medium transition-colors ease-out"
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
                      className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors ease-out hover:text-black"
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
                    {/* <SignOutButton
                      className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
                      afterSignOutUrl="/"
                    /> */}
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
            </div>
          </div>
          <Outlet />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Layout;
