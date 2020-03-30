export const comicsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_WEEKLY_COMICS":
      return {
        ...state,
        weeklyComics: action.comics
      };

      case "SET_CHARACTER_COMICS":
        return {
          ...state,
          currentCharcaterComics: action.comics
        };

      case "ADD_CHARACTER_COMICS":
        return {
          ...state,
          ...action.nameAndComics
        }

      case "REMOVE_CHARACTER_COMICS":
        const { [action.key]: placeHolder, ...newState  } = state;
        return newState;

    default:
      return state;
  }
}