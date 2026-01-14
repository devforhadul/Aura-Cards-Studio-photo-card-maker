import type { Frame } from "../types";
import event from '/image.png'
import img3 from '/image3.png'

export const FRAMES: Frame[] = [
  {
    id: '1',
    name: 'Campaign V2',
    url: 'https://i.ibb.co.com/mxpd3v7/1768327983-Potuakhali-2.webp',
    color: '#009444'
  },
  {
    id: '2',
    name: 'Justice Green',
    url: event,
    color: '#009444'
  },
  {
    id: '3',
    name: 'Elegant Gold',
    url: img3,
    color: '#d4af37'
  },
  {
    id: '4',
    name: 'Neon Blue',
    url: '',
    color: '#00f2ff'
  },
  {
    id: '5',
    name: 'Soft Rose',
    url: '',
    color: '#fda4af'
  },
  {
    id: '6',
    name: 'Midnight',
    url: '',
    color: '#18181b'
  }
];

export const FILTERS = [
  { name: 'Original', value: 'none' },
  { name: 'Warm', value: 'sepia(0.2) saturate(1.2)' },
  { name: 'Bright', value: 'brightness(1.1) contrast(1.1)' },
  { name: 'Dramatic', value: 'contrast(1.4) brightness(0.9)' },
  { name: 'B&W', value: 'grayscale(1)' }
];
