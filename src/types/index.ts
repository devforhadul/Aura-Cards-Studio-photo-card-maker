
export interface Frame {
  id: string;
  name: string;
  url: string;
  color: string;
}

export interface CardState {
  image: string | null;
  scale: number;
  posX: number;
  posY: number;
  brightness: number;
  contrast: number;
  filter: string;
}
