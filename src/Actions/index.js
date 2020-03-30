export const setWeeklyComics = (comics) => ({
  type: "SET_WEEKLY_COMICS",
  comics
});

export const setCurrentCharacterComics = (comics) => ({
  type: "SET_CHARACTER_COMICS",
  comics
})

export const saveComicId = (id) => ({
  type: "SAVE_COMIC_ID",
  id
});

export const removeComicId = (id) => ({
  type: "REMOVE_COMIC_ID",
  id
});

export const setCharacters = (characters) => ({
  type: "SET_CHARACTERS",
  characters
});

export const saveCharacterId = (id) => ({
  type: "SAVE_CHARACTER_ID",
  id
});

export const removeCharacterId = (id) => ({
  type: "REMOVE_CHARACTER_ID",
  id
});