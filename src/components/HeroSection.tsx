import reunion_2026_forhad from "/reunion_2026_forhad.png";

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

            <p className="mt-3 text-sm sm:text-xl text-gray-700 leading-relaxed ">
              Upload your photo in seconds, choose a beautiful frame, and
              generate high-quality campaign or promotional photo cards
              instantly.
            </p>

            <div className="mt-5 flex flex-wrap gap-4">
              <a href="#frames">
                <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-lg shadow-lg shadow-emerald-200/50 transition-colors transform hover:scale-105 active:scale-95">
                  Browse Frames
                </button>
              </a>

              {/* <button className="px-8 py-4 bg-white/70 backdrop-blur-md border border-white/40 hover:bg-white/90 font-medium rounded-xl text-lg transition-all transform hover:scale-105">
                Browse Frames
              </button> */}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40 shadow-sm">
                <span className="text-emerald-600">✓</span> High-Quality Output
              </div>

              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40 shadow-sm">
                <span className="text-emerald-600">✓</span> Instant Download • 100% Free
              </div>
{/* 
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40 shadow-sm">
                <span className="text-emerald-600">✓</span> 100% Free • No Login
                Required
              </div> */}
            </div>
          </div>

          {/* Right – Live Preview */}

          <div className=" relative mx-auto w-full max-w-sm lg:max-w-md">
            <div
              className="relative aspect-square rounded-xl overflow-hidden
      bg-linear-to-br from-gray-50 to-white border border-gray-200
      shadow-lg transition-all duration-300 hover:shadow-xl group"
            >
              <img
                src={reunion_2026_forhad}
                alt="Photo preview"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="text-white text-base font-medium px-6 py-2.5 
        "
                >
                  Your photo here...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
