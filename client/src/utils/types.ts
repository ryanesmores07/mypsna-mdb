export const TYPES = {};
//empty const, will be changed in future
export type Types = keyof typeof TYPES;

export type ArtistSearchResponse = {
  pagination: Pagination;
  results: Results[];
};

export type ArtistResponse = {
  data: Results | Artist;
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

export type Artist = {
  name: string;
  id: number;
  resource_url: string;
  uri: string;
  releases_url: string;
  profile?: string;
  urls?: string[];
  images?: {
    type: string;
    uri: string;
    resource_url: string;
    uri150: string;
    width: number;
    height: number;
  }[];
};
