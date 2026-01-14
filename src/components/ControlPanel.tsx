import React from "react";
import type { CardState, Frame } from "../types";

interface ControlPanelProps {
  state: CardState;
  setState: React.Dispatch<React.SetStateAction<CardState>>;
  selectedFrame: Frame;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDownload: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  state,
  setState,
  onUpload,
  onDownload,
}) => {
  return (
    <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl space-y-8 border border-gray-100">
      
      <div className="space-y-4">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
          Upload Image
        </h3>
        <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-100 rounded-2xl cursor-pointer hover:border-green-400 hover:bg-green-50/30 transition-all group">
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

      <div className="space-y-6">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
          Adjustments
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              Magnification
            </span>
            <span className="text-sm font-black text-green-600">
              {(state.scale * 100).toFixed(0)}%
            </span>
          </div>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.01"
            value={state.scale}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                scale: parseFloat(e.target.value),
              }))
            }
            className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
        </div>

        {/* <div className="space-y-3">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">Visual Tone</span>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.name}
                onClick={() => setState(prev => ({ ...prev, filter: f.value }))}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${state.filter === f.value ? 'bg-green-600 text-white shadow-md' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div> */}
      </div>

      <button
        onClick={onDownload}
        className="w-full py-4 bg-green-600 text-white rounded-2xl font-black text-sm tracking-widest hover:bg-green-700 hover:shadow-xl transition-all disabled:opacity-30 disabled:grayscale"
      >
        DOWNLOAD
      </button>
    </div>
  );
};

export default ControlPanel;
