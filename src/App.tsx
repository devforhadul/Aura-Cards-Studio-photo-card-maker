import HeroSection from "./components/HeroSection";
import FrameSelection from "./components/FrameSelection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#fafafa] text-gray-900 pb-20 selection:bg-green-100">
        {/* Header */}
        <nav className="p-4 md:px-12 flex justify-between items-center bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-green-200">
              A
            </div>
            <h1 className="text-xl font-black tracking-tighter text-gray-900">
              AuraCards{" "}
              <span className="text-green-600 font-medium">STUDIO</span>
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-xs font-black uppercase tracking-widest text-green-600 border-b-2 border-green-600 py-1"
            >
              Editor
            </a>
            <a
              href="#"
              className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-green-500 transition-colors"
            >
              Campaigns
            </a>
          </div>
        </nav>
        {/* Hero */}
        <HeroSection />
        {/* framer section */}
        <FrameSelection />
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
