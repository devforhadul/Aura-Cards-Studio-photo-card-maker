import  { useState } from "react";
import { FrameUploader } from "../components/FrameUploader";
import type { FrameData } from "../types";

export const UploadFramePage = () => {
  const [posts, setPosts] = useState<FrameData[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePostFrame = (data: FrameData) => {
    setPosts([data, ...posts]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            Frame Studio
          </h1>
          {/* <p className="text-lg text-gray-600 mt-4">
            Precision creation for square format enthusiasts.
          </p> */}
        </div>

        <FrameUploader  onPost={handlePostFrame} />

        {showSuccess && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-bounce z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Post published successfully!
          </div>
        )}

        {posts.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-4">
              Recent Submissions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <div
                  key={post.timestamp}
                  className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 group"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={post.image || ""}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 truncate">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {post.details}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 text-xs text-gray-400 font-medium uppercase tracking-wider">
                      <span>
                        {new Date(post.timestamp).toLocaleDateString()}
                      </span>
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        1080 x 1080
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
