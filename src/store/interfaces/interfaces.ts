export interface Anime {
  id: string;
  title?: {
    english?: string,
    native?: string
  };
  coverImage?: {
    large: string
  };
  duration: number;
  collectionOf?: {
    id: string;
    name: string;
  }[];
}

export interface Collection {
  id: string;
  title?: {
    english: string,
    native: string
  };
  coverImage?: {
    large: string
  };
  duration: number;
  collectionOf?: (CollectionNames)[];
}

export interface PageInfo {
  currentPage: number;
  total: number;
}

export interface CollectionNames {
  id: string;
  name: string;
}