import React, { useState, useRef } from "react";
import type { FrameData } from "../types";

interface FrameUploaderProps {
  onPost: (data: FrameData) => void;
}

export const FrameUploader: React.FC<FrameUploaderProps> = ({ onPost }) => {
  const [frameTitle, setFrameTitle] = useState("");
  const [nameDetails, setNameDetails] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateImage = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const isCorrectSize = img.width === 1080 && img.height === 1080;
        const isSquare = img.width === img.height;

        if (!isCorrectSize) {
          setError(
            `Image must be exactly 1080x1080 pixels. Current: ${img.width}x${img.height}`
          );
          resolve(false);
        } else if (!isSquare) {
          setError("Image must be 1:1 aspect ratio.");
          resolve(false);
        } else {
          setError(null);
          resolve(true);
        }
      };
      img.onerror = () => {
        setError("Invalid image file.");
        resolve(false);
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log(file);

    const isValid = await validateImage(file);
    if (isValid) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handlePost = async () => {
    if (!frameTitle || !nameDetails || !imagePreview) {
      setError("Please fill in all fields and upload a valid 1080x1080 image.");
      return;
    }

    setIsUploading(true);
    // Simulate API call
    setTimeout(() => {
      onPost({
        title: frameTitle,
        details: nameDetails,
        image: imagePreview,
        timestamp: Date.now(),
      });

      // Reset form
      setFrameTitle("");
      setNameDetails("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setIsUploading(false);
      setError(null);
    }, 1000);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl">
      <div className="p-8">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Post New Frame
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Upload a high-quality 1080x1080 square image
          </p>
        </header>

        <div className="space-y-6">
          {/* Image Upload Area */}
          <div
            onClick={triggerFileInput}
            className={`relative group cursor-pointer border-2 border-dashed rounded-2xl overflow-hidden transition-all duration-200 
              ${imagePreview ? "border-indigo-500" : "border-gray-300 hover:border-indigo-400 bg-gray-50"}`}
            style={{ aspectRatio: "1/1" }}
          >
            {imagePreview ? (
              <div className="relative w-full h-full">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                    Change Image
                  </span>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold">
                  Drop your image here
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  PNG or JPG • 1080x1080px
                </p>
              </div>
            )}
            <input
              type="file"
              className="hidden"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Form Fields */}
          <div className="space-y-4 md:flex gap-3">
            <div>
              <label
                htmlFor="frameTitle"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Frame Title
              </label>
              <input
                id="frameTitle"
                type="text"
                placeholder="Enter a descriptive title"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                value={frameTitle}
                onChange={(e) => setFrameTitle(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="nameDetails"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Name Details
              </label>
              <input
                id="nameDetails"
                type="text"
                placeholder="rovide author name or extra details"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                value={nameDetails}
                onChange={(e) => setNameDetails(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm flex items-start gap-2 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </div>
          )}

          <button
            onClick={handlePost}
            disabled={isUploading}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg shadow-indigo-200 
              ${isUploading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98]"}`}
          >
            {isUploading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Posting...
              </div>
            ) : (
              "Post Frame"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
