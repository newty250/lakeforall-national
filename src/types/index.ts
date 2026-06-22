export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  url: string;
  category: 'legislation' | 'policy' | 'advocacy' | 'economic' | 'regulation';
}

export interface Chapter {
  id: string;
  name: string;
  lake: string;
  location: string;
  state: string;
  description: string;
  url: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  memberCount?: number;
  founded?: string;
  founding?: boolean;
  foundingNote?: string;
  shopUrl?: string;
}

export interface MaterialsRequest {
  name: string;
  email: string;
  chapterLake: string;
  materials: 'wave-cards' | 'signs' | 'both';
  message: string;
}

export interface ChapterApplication {
  lakeName: string;
  location: string;
  contactName: string;
  email: string;
  reason: string;
}

export interface DonationTier {
  amount: number;
  label: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  source?: string;
}
