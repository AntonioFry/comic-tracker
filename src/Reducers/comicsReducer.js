export const comicsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_WEEKLY_COMICS":
      return {
        ...state,
        'Weekly Comics': action.comics
      };

      case "SET_CHARACTER_COMICS":
        return {
          ...state,
          'Current Charcater Comics': action.comics
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