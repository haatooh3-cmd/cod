import { Restaurant } from './types';

export const RESTAURANTS: Restaurant[] = [
  { id: 1, name: "로맨틱 비스트로", cuisine: "이탈리안", rating: 4.8, price_range: "3-5만원", image: "https://picsum.photos/id/102/600/400", occasions: { "데이트": ["트러플 파스타", "안심 스테이크"], "회식": ["피자"], "친구와": ["라자냐"], "가족과": ["마르게리따"] } },
  { id: 2, name: "지글지글 한우마을", cuisine: "한식/고기", rating: 4.5, price_range: "5-10만원", image: "https://picsum.photos/id/163/600/400", occasions: { "데이트": ["한우 육회"], "회식": ["한우 모듬"], "친구와": ["갈비살"], "가족과": ["소불고기"] } },
  { id: 3, name: "심야 식당 '연'", cuisine: "일식/이자카야", rating: 4.9, price_range: "2-4만원", image: "https://picsum.photos/id/225/600/400", occasions: { "데이트": ["사시미"], "회식": ["짬뽕"], "친구와": ["연어덮밥"], "가족과": ["우동"] } }
];