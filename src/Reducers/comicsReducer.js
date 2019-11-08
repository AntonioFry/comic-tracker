export const comicsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_WEEKLY_COMICS":
      return {
        ...state,
        weeklyComics: action.comics
      };

    default:
      return state;
  }
}