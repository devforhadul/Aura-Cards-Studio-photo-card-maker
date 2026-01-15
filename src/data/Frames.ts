import type { Frame } from "../types";
import event from "/image.png";
import img3 from "/image3.png";
import hadi from "/hadi_frame.webp";
import bnp from "/bnp_frame.webp";
import kamal_frm from "/kamal_frame.webp";

export const FRAMES: Frame[] = [
  {
    id: "1",
    name: "Masud",
    url: hadi,
    color: "#009444",
    category: "Politics",
  },
  {
    id: "2",
    name: "Justice Green",
    url: event,
    color: "#009444",
    category: "Event",
  },
  {
    id: "3",
    name: "Justice for Hadi",
    url: img3,
    color: "#d4af37",
    category: "a",
  },
  {
    id: "4",
    name: "Neon Blue",
    url: bnp,
    color: "#00f2ff",
    category: "a",
  },
  {
    id: "5",
    name: "Soft Rose",
    url: img3,
    color: "#fda4af",
    category: "a",
  },
  {
    id: "6",
    name: "Midnight",
    url: kamal_frm,
    color: "#18181b",
    category: "a",
  },
];

export const FILTERS = [
  { name: "Original", value: "none" },
  { name: "Warm", value: "sepia(0.2) saturate(1.2)" },
  { name: "Bright", value: "brightness(1.1) contrast(1.1)" },
  { name: "Dramatic", value: "contrast(1.4) brightness(0.9)" },
  { name: "B&W", value: "grayscale(1)" },
];
