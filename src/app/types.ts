export type Photo = {
  title: string;
  url_l: string;
  id: string;
};

export type responseType = {
  photos: {
    photo: Photo[];
  };
} | null;
