export const TYPES = {};
//empty const, will be changed in future
export type Types = keyof typeof TYPES;

export type ArtistSearchResponse = {
  pagination: Pagination;
  results: Results[];
};

export type Results = {
  cover_image: string;
  id: number;
  master_id?: number;
  master_url?: string;
  resource_url: string;
  title: string;
  type: string;
  uri: string;
};

export type Pagination = {
  items: number;
  page: number;
  pages: number;
  per_page: number;
  urls: string;
};
