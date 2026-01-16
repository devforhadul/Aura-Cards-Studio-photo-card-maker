export interface FrameType {
  id: string;
  frameTitle: string;
  nameDetails: string;
  category: string;
  frameURL: string;
  price?: string;
  authorName?: string;
  authorId?: string;
  status?: "PUBLISHED" | "UNPUBLISHED" | "DRAFT";
}

export interface CardState {
  image: string | null;
  scale: number;
  posX: number;
  posY: number;
  brightness: number;
  contrast: number;
  filter: string;

  nameText?: string;
  titleText?: string;
}

export interface FrameData {
  title: string;
  details: string;
  image: string | null;
  timestamp: number;
}
