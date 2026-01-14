
import React from 'react';

interface FrameOverlayProps {
  color: string;
  variant?: string;
  imageUrl?: string;
}

const FrameOverlay: React.FC<FrameOverlayProps> = ({ color, imageUrl }) => {
  // If we have a specific image URL (like the one provided), we use it. 
  // Otherwise, we fall back to a generic stylish frame.
  console.log(imageUrl);
  if (imageUrl) {
    return (
      <div className="absolute inset-0 pointer-events-none z-20">
        <img 
          src={imageUrl} 
          alt="Frame Overlay" 
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      <div 
        className="w-full h-full border-[20px]" 
        style={{ borderColor: color, opacity: 0.8, borderRadius: 'inherit' }} 
      />
      <div className="absolute inset-0 border-[2px] border-white/30 m-2 rounded-[inherit]" />
    </div>
  );
};

export default FrameOverlay;
