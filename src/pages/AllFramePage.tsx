import { useMemo, useState } from "react";
import FrameCard from "../components/FrameCard";
import { FRAMES } from "../data/Frames";

export const AllFramePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ✅ Extract unique categories (ONCE)
  const categories = useMemo(() => {
    const unique = new Set<string>();
    FRAMES.forEach((frame) => unique.add(frame.category.toLowerCase()));
    return ["all", ...Array.from(unique)];
  }, []);

  // ✅ Filter frames
  const filteredFrames = useMemo(() => {
    return FRAMES.filter((frame) => {
      const matchesSearch =
        frame.frameTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        frame.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        frame.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <section id="frames" className="py-5 md:py-10">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest mb-4">
            Top Rated Photo Framer
          </span>
          <h1 className="text-2xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Premium <span className="text-green-600">Photo Frames</span>
          </h1>
          {/* <p className="text-gray-600 text-lg leading-relaxed">
            Discover the perfect border for your memories. From artisan
            hand-crafted wood to minimalist modern steel.
          </p> */}
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-5xl mx-auto mb-10 space-y-8">
          {/*  <div className="relative group">
            <input
              type="text"
              placeholder="Search for a style, material or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-8 py-6 pl-16 rounded-3xl border-0 bg-white shadow-xl shadow-gray-200/50 
                           focus:outline-none focus:ring-2 focus:ring-green-500/20 text-lg transition-all"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-green-600 transition-colors" />
          </div> */}

          {/* ✅ Category Tags (FIXED) */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer uppercase ${
                  selectedCategory === cat
                    ? "bg-green-600 text-white border-green-600 shadow-lg shadow-green-200"
                    : "bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Frames Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredFrames.map((frame) => (
            <FrameCard key={frame.id} frame={frame} />
          ))}
        </div>

        {/* Empty State */}
        {filteredFrames.length === 0 && (
          <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-gray-200 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-camera-rotate text-3xl text-gray-300"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No frames found
            </h3>
            <p className="text-gray-500 max-w-xs mx-auto mb-8">
              We couldn't find any frames matching "{searchTerm}" in the{" "}
              {selectedCategory} category.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="text-green-600 font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
