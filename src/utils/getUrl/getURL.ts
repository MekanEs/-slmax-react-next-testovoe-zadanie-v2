export const getcurrentURL = (
  sort: string = 'relevance',
  tag: string = 'cat',
  page: number = 1,
): string => {
  return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=586c0f94c1488f98af2ee818df093d50&tags=${tag}&sort=${sort}&extras=url_l&min_upload_date=1444752183&in_gallery=true&per_page=18&page=${page}&format=json&nojsoncallback=1`;
};
