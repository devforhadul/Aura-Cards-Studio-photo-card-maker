import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <Link to={"/"}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-green-200">
                  P
                </div>
                <h1 className="text-xl font-black tracking-tighter text-white-900">
                  Photo Frame{" "}
                  {/* <span className="text-green-600 font-medium">STUDIO</span> */}
                </h1>
              </div>
            </Link>

            <p className="text-gray-400 mb-6 max-w-md mt-5">
              Create professional  photo cards, greeting cards, and
              campaign posters in just a few seconds — completely free and
              incredibly easy to use.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5">
              <Link
                to={"https://www.facebook.com/forhadul75/"}
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#039be5"
                    d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                  ></path>
                </svg>
              </Link>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm5.99 6.3c-.58.52-1.31.87-2.07 1.03.74-.44 1.31-1.14 1.58-1.97-.7.41-1.47.71-2.29.87-.66-.7-1.6-1.13-2.64-1.13-2 0-3.62 1.62-3.62 3.62 0 .28.03.55.09.81-3.01-.15-5.68-1.59-7.47-3.78-.31.53-.49 1.15-.49 1.8 0 1.25.64 2.36 1.6 3.01-.59-.02-1.15-.18-1.64-.45v.04c0 1.75 1.25 3.21 2.9 3.54-.3.08-.62.13-.95.13-.23 0-.46-.02-.68-.07.46 1.44 1.8 2.48 3.39 2.51-1.24.97-2.8 1.55-4.5 1.55-.29 0-.58-.02-.86-.05 1.6 1.03 3.5 1.63 5.54 1.63 6.65 0 10.29-5.51 10.29-10.29 0-.16 0-.31-.01-.47.71-.51 1.32-1.15 1.8-1.88z" />
                </svg>
              </a>
            </div>

            {/* <div className="flex items-center gap-4">
              <div className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                ✓ 100% Free
              </div>
              <div className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                ✓ No Login Required
              </div>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  All Frames
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li className="text-gray-400">
                Email:{" "}
                <span className="text-emerald-400">fiforhad2003@gmail.com</span>
              </li>
              <li className="text-gray-400">
                Phone: <span className="text-emerald-400">+880 1984839526</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="text-gray-500">
              © {new Date().getFullYear()} Photo Frame • All Rights
              Reserved
            </p>

            {/* <div className="flex gap-8">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Cookies
              </a>
            </div> */}

            {/* ---- */}
            <div className="flex ">
              <p className="text-gray-500 flex justify-center items-center gap-1">
                Made with{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-red-500 animate-pulse"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                </svg>{" "}
                by{" "}
                <Link
                  className="text-green-400"
                  to={"https://www.facebook.com/forhadul75/"}
                >
                  Forhadul Islam
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
