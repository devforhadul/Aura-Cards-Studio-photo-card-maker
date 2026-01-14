export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -left-20 top-20 w-96 h-96 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full blur-3xl animate-blob-slow" />
        <div className="absolute right-10 bottom-10 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-300 to-emerald-200 rounded-full blur-3xl animate-blob-delay" />
        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-72 h-72 bg-teal-200/60 rounded-full blur-3xl animate-blob" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Text Content */}
          <div className="max-w-xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
              Create Professional Photo Cards
              <span className="block mt-2 text-emerald-600">
                With Your Preferred Frame
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
              Upload your photo in seconds, choose a beautiful frame, and
              generate high-quality campaign or promotional photo cards
              instantly.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-lg shadow-lg shadow-emerald-200/50 transition-colors transform hover:scale-105 active:scale-95">
                Create Now
              </button>

              <button className="px-8 py-4 bg-white/70 backdrop-blur-md border border-white/40 hover:bg-white/90 font-medium rounded-xl text-lg transition-all transform hover:scale-105">
                Browse Frames
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40 shadow-sm">
                <span className="text-emerald-600">✓</span> High-Quality PNG
                Output
              </div>

              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40 shadow-sm">
                <span className="text-emerald-600">✓</span> Instant Download
              </div>

              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40 shadow-sm">
                <span className="text-emerald-600">✓</span> 100% Free • No Login
                Required
              </div>
            </div>
          </div>

          {/* Right – Live Preview */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            {/* Card */}
            <div
              className="relative aspect-[3/4] rounded-3xl overflow-hidden
               backdrop-blur-xl bg-white/30 border border-white/40
               shadow-2xl shadow-black/10
               transition-all duration-500 hover:scale-[1.03]
               hover:shadow-emerald-500/20 group"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-transparent" />

              {/* User Photo (Inside Frame Area) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[72%] aspect-square rounded-full overflow-hidden
                   border-[10px] border-white/70
                   shadow-2xl bg-gray-100"
                >
                  <img
                    src="https://i.ibb.co.com/ycGHJ49r/blob.jpg"
                    alt="User photo preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Frame Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <svg
                  viewBox="0 0 400 533"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer Frame */}
                  <rect
                    x="18"
                    y="18"
                    width="364"
                    height="497"
                    rx="28"
                    stroke="white"
                    strokeWidth="14"
                    strokeOpacity="0.9"
                  />

                  {/* Photo Cut Area */}
                  <circle
                    cx="200"
                    cy="250"
                    r="135"
                    stroke="white"
                    strokeWidth="12"
                    strokeOpacity="0.95"
                    strokeDasharray="6 6"
                  />
                </svg>
              </div>

              {/* Instruction Overlay */}
              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2
                 bg-black/60 text-white text-sm
                 px-5 py-2 rounded-full backdrop-blur-md
                 opacity-0 group-hover:opacity-100
                 transition-opacity duration-300"
              >
                Your photo will appear here
              </div>

              {/* Shine Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30
                 bg-gradient-to-t from-transparent via-white/40 to-transparent
                 pointer-events-none transition-opacity duration-700"
              />
            </div>

            {/* Floating Label */}
            <div
              className="absolute -top-4 -right-4
               bg-emerald-600 text-white
               text-sm font-semibold px-4 py-2
               rounded-full shadow-lg"
            >
              Photo Frame Maker
            </div>

            {/* Subtitle */}
            <p className="mt-6 text-center text-gray-600 text-sm">
              Upload your photo, choose a frame, and download it instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
