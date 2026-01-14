export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Photo<span className="text-emerald-500">Card</span> BD
            </h3>

            <p className="text-gray-400 mb-6 max-w-md">
              Create professional election photo cards, greeting cards, and
              campaign posters in just a few seconds — completely free and
              incredibly easy to use.
            </p>

            <div className="flex items-center gap-4">
              <div className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                ✓ 100% Free
              </div>
              <div className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                ✓ No Login Required
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  All Frames
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li className="text-gray-400">
                Email:{" "}
                <span className="text-emerald-400">
                  support@photocardbd.com
                </span>
              </li>
              <li className="text-gray-400">
                Phone:{" "}
                <span className="text-emerald-400">
                  +880 17XX-XXXXXX
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="text-gray-500">
              © {new Date().getFullYear()} PhotoCard BD • All Rights Reserved
            </p>

            <div className="flex gap-8">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Cookies
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm5.99 6.3c-.58.52-1.31.87-2.07 1.03.74-.44 1.31-1.14 1.58-1.97-.7.41-1.47.71-2.29.87-.66-.7-1.6-1.13-2.64-1.13-2 0-3.62 1.62-3.62 3.62 0 .28.03.55.09.81-3.01-.15-5.68-1.59-7.47-3.78-.31.53-.49 1.15-.49 1.8 0 1.25.64 2.36 1.6 3.01-.59-.02-1.15-.18-1.64-.45v.04c0 1.75 1.25 3.21 2.9 3.54-.3.08-.62.13-.95.13-.23 0-.46-.02-.68-.07.46 1.44 1.8 2.48 3.39 2.51-1.24.97-2.8 1.55-4.5 1.55-.29 0-.58-.02-.86-.05 1.6 1.03 3.5 1.63 5.54 1.63 6.65 0 10.29-5.51 10.29-10.29 0-.16 0-.31-.01-.47.71-.51 1.32-1.15 1.8-1.88z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
