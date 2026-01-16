import { useState } from "react";
import { Search } from "lucide-react";
import { FRAMES } from "../data/Frames";
import FrameCard from "./FrameCard";

export default function FrameSelection() {
  const [searchTerm, setSearchTerm] = useState("");

  // Optional search logic (enable if needed)
  // const filteredFrames = FRAMES.filter(frame =>
  //   frame.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <section id="frames" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-green-700 text-xl font-medium tracking-wide">
            Our Collection
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3">
            All Photo Frames
          </h1>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by frame name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-full border border-gray-300 
                         focus:outline-none focus:border-green-500 focus:ring-2 
                         focus:ring-green-200 bg-green-50/40 transition-all duration-300"
            />
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-green-600"
              size={24}
            />
          </div>
        </div>

        {/* Frames Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-8">
          {FRAMES.map((frame) => (
            <FrameCard key={frame.id} frame={frame}/>
          ))}
        </div>

        {/* No Results */}
        {FRAMES.length === 0 && searchTerm && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">No frames found</p>
            <p className="mt-2">Try searching with a different name</p>
          </div>
        )}
      </div>
    </section>
  );
}
