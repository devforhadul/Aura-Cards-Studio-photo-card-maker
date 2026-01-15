import React, { useCallback, useRef, useState } from "react";
import { useParams } from "react-router";
import type { CardState } from "../types";
import { FRAMES } from "../data/Frames";
import FrameOverlay from "../components/FrameOverlay";
import ControlPanel from "../components/ControlPanel";

export default function FrameCreate() {
  /* ---------------- Route Param ---------------- */
  const { id } = useParams<{ id: string }>();
  const photoFrame = FRAMES.find((item) => item.id === id);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [downloading, setDownloading] = useState<boolean>(false);
  console.log(downloading);
  /* ---------------- Card State ---------------- */
  const [cardState, setCardState] = useState<CardState>({
    image: null,
    scale: 1,
    posX: 0,
    posY: 0,
    brightness: 1,
    contrast: 1,
    filter: "none",

    nameText: "Forhad",
  });

  /* ---------------- Drag State ---------------- */
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  /* ---------------- Image Upload ---------------- */
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setCardState((prev) => ({
        ...prev,
        image: event.target?.result as string,
        scale: 1,
        posX: 0,
        posY: 0,
      }));
    };
    reader.readAsDataURL(file);
  };

  /* ---------------- Drag Logic ---------------- */
  const handleStart = (clientX: number, clientY: number) => {
    if (!cardState.image) return;

    setIsDragging(true);
    dragStartRef.current = {
      x: clientX - cardState.posX,
      y: clientY - cardState.posY,
    };
  };

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!isDragging) return;

      setCardState((prev) => ({
        ...prev,
        posX: clientX - dragStartRef.current.x,
        posY: clientY - dragStartRef.current.y,
      }));
    },
    [isDragging]
  );

  const handleEnd = () => setIsDragging(false);

  /* ---------------- Mouse Events ---------------- */
  const onMouseDown = (e: React.MouseEvent) =>
    handleStart(e.clientX, e.clientY);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX, e.clientY);

  /* ---------------- Touch Events ---------------- */
  const onTouchStart = (e: React.TouchEvent) =>
    handleStart(e.touches[0].clientX, e.touches[0].clientY);
  const onTouchMove = (e: React.TouchEvent) =>
    handleMove(e.touches[0].clientX, e.touches[0].clientY);

  /* ---------------- Download ---------------- */
  const handleDownload = async () => {
    if (!cardState.image || !photoFrame) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setDownloading(true);

    // Final image size (recommended)
    const SIZE = 1600;
    canvas.width = SIZE;
    canvas.height = SIZE;

    // Load images
    const userImg = new Image();
    const frameImg = new Image();

    userImg.src = cardState.image;
    frameImg.src = photoFrame.url;

    await Promise.all([
      new Promise((res) => (userImg.onload = res)),
      new Promise((res) => (frameImg.onload = res)),
    ]);

    // Clear canvas
    ctx.clearRect(0, 0, SIZE, SIZE);

    /* ---------- Draw User Image ---------- */
    ctx.save();

    const scale = cardState.scale;
    const x = cardState.posX;
    const y = cardState.posY;

    ctx.translate(x + SIZE / 2, y + SIZE / 2);
    ctx.scale(scale, scale);

    ctx.drawImage(userImg, -SIZE / 2, -SIZE / 2, SIZE, SIZE);

    ctx.restore();

    /* ---------- Draw Frame ---------- */
    ctx.drawImage(frameImg, 0, 0, SIZE, SIZE);

    setDownloading(false);
    /* ---------- Download ---------- */
    const link = document.createElement("a");
    link.download = photoFrame.name;
    link.href = canvas.toDataURL("image/png", 1);
    link.click();
  };

  //* ----------------mouse while zoom and out --------------- */
  const MIN_SCALE = 0.5;
  const MAX_SCALE = 3;
  const ZOOM_STEP = 0.1;

  const handleWheel = (e: React.WheelEvent) => {
    if (!cardState.image) return;

    e.preventDefault();

    setCardState((prev) => {
      let newScale =
        e.deltaY < 0
          ? prev.scale + ZOOM_STEP // scroll up → zoom in
          : prev.scale - ZOOM_STEP; // scroll down → zoom out

      newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));

      return {
        ...prev,
        scale: newScale,
      };
    });
  };

  /* ---------------- Fallback ---------------- */
  if (!photoFrame) {
    return <div className="text-center mt-20">Frame not found</div>;
  }

  /* ---------------- Render ---------------- */
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4  flex flex-col lg:flex-row gap-12 justify-center items-center">
      <canvas ref={canvasRef} className="hidden" />
      {/* <div>
        <button
          className="w-full py-4 bg-green-600 text-white rounded-2xl font-black text-sm tracking-widest hover:bg-green-700 hover:shadow-xl transition-all disabled:opacity-30 disabled:grayscale"
        >
          DOWNLOAD
        </button>
      </div> */}
      {/* Canvas */}
      <div
        className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px]
                   overflow-hidden bg-white shadow-sm rounded-[1.5rem]
                   cursor-move touch-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={handleEnd}
        onWheel={handleWheel}
      >
        {/* User Image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-gray-50">
          {cardState.image && (
            <img
              src={cardState.image}
              alt="User"
              className="select-none pointer-events-none transition-transform duration-75"
              style={{
                transform: `translate(${cardState.posX}px, ${cardState.posY}px) scale(${cardState.scale})`,
                filter: cardState.filter,
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          )}
        </div>

        {/* Frame Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <FrameOverlay color={photoFrame?.color} imageUrl={photoFrame?.url} />
        </div>
      </div>

      {/* Controls */}
      <ControlPanel
        state={cardState}
        setState={setCardState}
        selectedFrame={photoFrame}
        onUpload={handleImageUpload}
        onDownload={handleDownload}
      />
    </main>
  );
}
