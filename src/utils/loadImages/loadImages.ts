import { responseType } from '@/app/types';
import { Dispatch, SetStateAction } from 'react';

type callbacktype = (
  setData: Dispatch<SetStateAction<responseType>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  url: string,
) => void;

export const loadImages: callbacktype = (setData, setLoading, url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    });
};

export const UpdateData: callbacktype = (setData, setLoading, url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData((prev: responseType) => {
        if (prev) {
          return {
            ...prev,
            photos: { ...prev.photos, photo: [...prev.photos.photo, ...data.photos.photo] },
          };
        } else {
          return data;
        }
      });

      setLoading(false);
    });
};
