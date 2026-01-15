import React, { useCallback, useRef, useState } from "react";
import { useParams } from "react-router";
import type { CardState } from "../types";
import { FRAMES } from "../data/Frames";
import ControlPanel from "../components/ControlPanel";
import ShareSection from "../components/ShareSection";
import { Loading } from "notiflix";

export default function FrameCreate() {
  const { id: paramsId } = useParams();
  /* ---------------- Route Param ---------------- */
  const { id } = useParams<{ id: string }>();
  const photoFrame = FRAMES.find((item) => item.id === id);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // প্রিভিউ বক্সের সাইজ রেফারেন্স (ড্র্যাগিং ক্যালকুলেশনের জন্য)
  // রেসপন্সিভনেসের জন্য এটি প্রয়োজন হতে পারে, তবে এখানে ডিফল্ট রাখা হলো
  // const PREVIEW_SIZE = 400;

  // const [downloading, setDownloading] = useState<boolean>(false);

  /* ---------------- Card State ---------------- */
  const [cardState, setCardState] = useState<CardState>({
    image: null,
    scale: 1,
    posX: 0,
    posY: 0,
    brightness: 1,
    contrast: 1,
    filter: "none",
    nameText: "",
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
        nameText: "",
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

  /* ---------------- Download Logic (Canvas Layering) ---------------- */
  const handleDownload = async () => {
    if (!cardState.image || !photoFrame) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    Loading.hourglass("Downloading...");

    const SIZE = 1080; // ফাইনাল ইমেজের সাইজ
    canvas.width = SIZE;
    canvas.height = SIZE;

    // ১. ইমেজ লোডিং
    const userImg = new Image();
    const frameImg = new Image();
    userImg.crossOrigin = "anonymous";
    frameImg.crossOrigin = "anonymous";
    userImg.src = cardState.image;
    frameImg.src = photoFrame.url;

    await Promise.all([
      new Promise((res) => (userImg.onload = res)),
      new Promise((res) => (frameImg.onload = res)),
    ]);

    // ২. ক্যানভাস ক্লিয়ার করা
    ctx.clearRect(0, 0, SIZE, SIZE);

    // ৩. ব্যাকগ্রাউন্ড (User Image) আঁকা
    // প্রিভিউ এবং ডাউনলোডের সাইজের অনুপাত বের করা (যাতে ড্র্যাগ পজিশন ঠিক থাকে)
    // মোবাইল বা ছোট স্ক্রিনে প্রিভিউ ছোট হতে পারে, তাই ১:১ অনুপাতের জন্য এটি জরুরি
    // এখানে সিম্পলিসিটির জন্য আমরা সরাসরি ভ্যালু ব্যবহার করছি, কিন্তু
    // পারফেক্ট পজিশনিং এর জন্য (SIZE / PreviewBoxWidth) গুণ করা উচিত।
    // এই মুহূর্তে ইউজার লজিক অনুযায়ী:

    ctx.save();

    // ক্যানভাসের সেন্টারে অরিজিন নিয়ে আসা
    ctx.translate(SIZE / 2, SIZE / 2);

    // পজিশন সেট করা (প্রয়োজন হলে এখানে ratio গুণ করতে হবে)
    // যেমন: ctx.translate(cardState.posX * (SIZE / 400), cardState.posY * (SIZE / 400));
    // আপাতত সরাসরি ব্যবহার করছি আপনার কোডের ফ্লো ঠিক রাখতে:
    const ratio = SIZE / 400; // Assuming desktop preview size roughly 400px
    ctx.translate(cardState.posX * ratio, cardState.posY * ratio);

    // জুম/স্কেল সেট করা
    ctx.scale(cardState.scale, cardState.scale);

    // এসপেক্ট রেশিও ঠিক রেখে ইমেজ সাইজ বের করা
    const imgAspect = userImg.naturalWidth / userImg.naturalHeight;
    let drawWidth = SIZE;
    let drawHeight = SIZE;

    if (imgAspect > 1) {
      drawHeight = SIZE / imgAspect;
    } else {
      drawWidth = SIZE * imgAspect;
    }

    // ইমেজটি সেন্টারে আঁকা
    ctx.drawImage(
      userImg,
      -drawWidth / 2,
      -drawHeight / 2,
      drawWidth,
      drawHeight
    );

    // --------

    ctx.restore();

    // ৪. ফ্রেম আঁকা (সবার উপরে)
    // এটি transparent PNG হতে হবে
    ctx.drawImage(frameImg, 0, 0, SIZE, SIZE);

    if (cardState.nameText) {
      const fontSize = 60;
      ctx.font = `bold ${fontSize}px Arial`; // ফন্ট ফ্যামিলি
      ctx.fillStyle = "white"; // টেক্সট কালার
      ctx.textAlign = "center";

      // টেক্সট যাতে ফ্রেমের ওপর ফুটে ওঠে তাই শ্যাডো যোগ করা
      ctx.shadowColor = "black";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;

      // পজিশন: SIZE / 2 (মাঝখানে), SIZE - 100 (নিচ থেকে ১০০ পিক্সেল উপরে)
      // আপনার ফ্রেমের ডিজাইন অনুযায়ী ১০০ কে কমিয়ে বাড়িয়ে অ্যাডজাস্ট করুন
      ctx.fillText(cardState.nameText, SIZE / 2, SIZE - 100);

      // শ্যাডো রিসেট
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
    }
    Loading.remove();
    // ৫. ডাউনলোড ট্রিগার
    const link = document.createElement("a");
    link.download = `${photoFrame.name} ${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
  };

  /* ---------------- Mouse Wheel Zoom ---------------- */
  const MIN_SCALE = 0.5;
  const MAX_SCALE = 3;
  const ZOOM_STEP = 0.1;

  const handleWheel = (e: React.WheelEvent) => {
    if (!cardState.image) return;
    e.preventDefault();
    setCardState((prev) => {
      let newScale =
        e.deltaY < 0 ? prev.scale + ZOOM_STEP : prev.scale - ZOOM_STEP;
      newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale));
      return { ...prev, scale: newScale };
    });
  };

  if (!photoFrame) {
    return <div className="text-center mt-20">Frame not found</div>;
  }

  return (
    <div>
      <div className=" max-w-7xl mx-auto px-4 py-5 md:py-10 flex flex-col lg:flex-row gap-12 justify-center items-center">
        {/* Hidden Canvas for Processing */}
        <canvas ref={canvasRef} className="hidden" />

        {/* ---------------- Visual Preview Area ---------------- */}
        <div
          className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]
                   overflow-hidden bg-white shadow-lg rounded-xl
                   cursor-move touch-none select-none border border-gray-200"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={handleEnd}
          onWheel={handleWheel}
        >
          {/* Layer 1: User Image (Background) */}
          {/* z-0 ensures it stays behind the frame */}
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-gray-50">
            {cardState.image ? (
              <img
                src={cardState.image}
                alt="User Upload"
                className="pointer-events-none transition-transform duration-75 origin-center"
                style={{
                  transform: `translate(${cardState.posX}px, ${cardState.posY}px) scale(${cardState.scale})`,
                  filter: cardState.filter,
                  // ইমেজ যাতে কন্টেইনারের বাইরে না গিয়ে সুন্দরভাবে ফিট করে
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <span className="text-gray-400 text-sm">Upload a photo</span>
            )}
          </div>

          {/* Layer 2: Frame Overlay (Foreground) */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* FrameOverlay কম্পোনেন্ট অথবা সরাসরি ইমেজ */}
            {photoFrame.url && (
              <div className="absolute inset-0 pointer-events-none z-20">
                <img
                  src={photoFrame.url}
                  alt="Frame Overlay"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="absolute  inset-0 z-20 pointer-events-none flex flex-col items-center justify-end pr-70">
              <p className="text-white text-xl font-bold drop-shadow-lg">
                {cardState.nameText}
              </p>
            </div>
            {/* <FrameOverlay
              color={photoFrame?.color}
              imageUrl={photoFrame?.url}
            /> */}
          </div>
        </div>

        {/* ---------------- Controls ---------------- */}
        <ControlPanel
          cardState={cardState}
          setCardState={setCardState}
          onUpload={handleImageUpload}
          onDownload={handleDownload}
        />
      </div>
      <ShareSection paramsId={paramsId as string} />
    </div>
  );
}
