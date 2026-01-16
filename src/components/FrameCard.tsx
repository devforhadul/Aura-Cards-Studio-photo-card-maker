import type { FrameType } from "../types";


interface frameProp {
  frame: FrameType;
}

export default function FrameCard({ frame }: frameProp) {

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden
                 hover:shadow-xl transition-all duration-300 group
                 border border-gray-100"
    >
      {/* Frame Preview */}
      <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-4">
        <img
          src={frame.frameURL}
          alt={frame.frameTitle}
          className="max-w-full max-h-full object-contain
                     transition-transform duration-500
                     group-hover:scale-105"
        />

        {/* Badge */}
        {/* <span
                  className="absolute top-4 left-4 bg-green-600 text-white
                     text-xs font-medium px-3 py-1.5 rounded-full shadow-sm"
                >
                  {frame.name}
                </span> */}
      </div>

      {/* Content */}
      <div className="p-3 md:p-4">
        {/* <h3 className="font-bold text-lg text-gray-900 mb-4 line-clamp-1">
                  {frame.name}
                </h3> */}

        <a href={`/frame/${frame.id}`}>
          <button
            className="w-full bg-green-600 hover:bg-green-700
                       text-white font-medium py-2 rounded-xl
                       transition-colors duration-200 shadow-sm
                       hover:shadow-md active:scale-[0.98] cursor-pointer"
          >
            Use Frame
          </button>
        </a>
      </div>
    </div>
  );
}
