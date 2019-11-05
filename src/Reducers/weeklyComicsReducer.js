export const weeklyComicsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_WEEKLY_COMICS":
      return action.comics;

    default:
      return state;
  }
}