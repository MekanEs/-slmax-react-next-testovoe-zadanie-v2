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
