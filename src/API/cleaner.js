
export const getWeeklyComicsCleaner = (comics) => {
  const cleanedData = comics.map(comic => {
    return {
      id: comic.id,
      cover: comic.thumbnail,
      title: comic.title
    }
  });
  return cleanedData;
}