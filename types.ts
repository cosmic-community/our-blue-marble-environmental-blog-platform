// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Author interface
export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: null;
}

// Post interface
export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    hero?: {
      url: string;
      imgix_url: string;
    };
    content?: string;
    teaser?: string;
    author?: Author;
    published_date?: string;
    categories?: Category[];
  };
}

// Globals interface
export interface Globals extends CosmicObject {
  type: 'globals';
  metadata: {
    site_title?: string;
    site_tag?: string;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

export interface CosmicSingleResponse<T> {
  object: T;
}