export type Occasion = "데이트" | "회식" | "친구와" | "가족과";

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  price_range: string;
  image: string;
  occasions: Record<Occasion, string[]>;
}

export interface RecommendationRequest {
  occasion: Occasion;
  location: string;
  time: string;
}