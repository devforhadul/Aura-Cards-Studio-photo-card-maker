import React from "react";
import type { CardState } from "../types";


interface ControlPanelProps {
  cardState: CardState;
  setCardState: React.Dispatch<React.SetStateAction<CardState>>;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDownload: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  cardState,
  setCardState,
  onUpload,
  onDownload,
}) => {
  
  return (
    <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-xl shadow-xl shadow-gray-200/50 space-y-8 border border-gray-100">
      {/* zoom and out adjust */}
      {cardState.image && (
        <div className="space-y-4">
          <h3 className="text-xs font-black text-back uppercase ">
            Adjustments
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                Magnification
              </span>
              <span className="text-sm font-black text-green-600">
                {(cardState.scale * 20).toFixed(0)}%
              </span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.01"
              value={cardState.scale}
              onChange={(e) =>
                setCardState((prev) => ({
                  ...prev,
                  scale: parseFloat(e.target.value),
                }))
              }
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
          </div>
        </div>
      )}

      {/* Upload Image */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-gray-800 ">Upload Image</h3>
        <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-green-400 rounded-2xl cursor-pointer hover:border-green-400 hover:bg-green-50/30 transition-all group">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full text-green-600 group-hover:scale-110 transition-transform">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-600 font-bold">Select Photo</p>
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={onUpload}
          />
        </label>
      </div>

      {/* Input name ans title */}
      {/* <div className="space-y-">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
          Your Name
        </h3>
        <input
          type="text"
          placeholder="Enter your name"
          // value={cardState.nameText}
          // onChange={(e) =>
          //   setCardState((prev) => ({
          //     ...prev,
          //     nameText: e.target.value,
          //   }))
          // }
          className="w-full px-4 py-3 border rounded-xl"
        />
      </div> */}

      <button
        onClick={onDownload}
        disabled={!cardState.image}
        className="cursor-pointer w-full px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all shadow-xl shadow-indigo-200 items-center gap-3 disabled:grayscale text-center"
      >
        Download
      </button>

      {/* <button
        onClick={onDownload}
        disabled={!state.image}
        className="w-full py-4 bg-green-600 text-white rounded-2xl font-black text-sm tracking-widest hover:bg-green-700 hover:shadow-xl transition-all disabled:opacity-30 disabled:grayscale"
      >
        Download
      </button> */}
    </div>
  );
};

export default ControlPanel;
