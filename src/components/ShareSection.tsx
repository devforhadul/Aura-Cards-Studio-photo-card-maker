import { Link, Facebook, Share2, MessageCircle } from "lucide-react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

interface ShareProps {
  paramsId: string;
}

export default function ShareSection({ paramsId }: ShareProps) {
  const shareUrl = `https://aura-card.creativeshop.store/frame/${paramsId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      Notify.success("Link Copied!", {
        position: "right-top",
        distance: "20px",
        timeout: 1500,
        showOnlyTheLastOne: true,
        pauseOnHover: false,
      });
    });
  };

  const shareButtons = [
    {
      icon: <Link size={20} />,
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
      onClick: handleCopyLink,
      label: "Copy",
    },
    {
      icon: <Facebook size={20} fill="currentColor" />,
      bgColor: "bg-[#1877F2]/10",
      iconColor: "text-[#1877F2]",
      onClick: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
          "_blank"
        ),
      label: "Facebook",
    },
    {
      icon: <MessageCircle size={20} fill="currentColor" />,
      bgColor: "bg-[#25D366]/10",
      iconColor: "text-[#25D366]",
      onClick: () =>
        window.open(
          `https://wa.me/?text=${encodeURIComponent(shareUrl)}`,
          "_blank"
        ),
      label: "WhatsApp",
    },
    {
      icon: <Share2 size={20} />,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
      onClick: () => {
        if (navigator.share) {
          navigator.share({ title: "Aura Card", url: shareUrl });
        } else {
          handleCopyLink();
        }
      },
      label: "Share",
    },
  ];

  return (
    <div className="flex justify-center items-center py-6 px-4">
      {/* স্লিম এবং মিনিমাল কন্টেইনার */}
      <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-xl shadow-gray-200/50 w-full max-w-[360px]">
        <h3 className="text-gray-400 text-sm font-medium mb-5 text-center tracking-wide uppercase">
          Share With Friends
        </h3>

        <div className="flex justify-between items-center px-2">
          {shareButtons.map((btn, index) => (
            <div key={index} className="flex flex-col items-center gap-1.5">
              <button
                onClick={btn.onClick}
                className={`${btn.bgColor} ${btn.iconColor} w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 active:scale-90 shadow-sm cursor-pointer`}
              >
                {btn.icon}
              </button>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-tighter">
                {btn.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
