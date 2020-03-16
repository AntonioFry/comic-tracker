export const setWeeklyComics = (comics) => ({
  type: "SET_WEEKLY_COMICS",
  comics
});

export const saveComicId = (id) => ({
  type: "SAVE_COMIC_ID",
  id
});

export const removeComicId = (id) => ({
  type: "REMOVE_COMIC_ID",
  id
});

export const setCharacters = (charcaters) => ({
  type: "SET_CHARACTERS",
  charcaters
});