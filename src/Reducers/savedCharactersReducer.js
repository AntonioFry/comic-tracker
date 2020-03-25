export const savedCharactersReducer = (state = [], action) => {
  switch (action.type) {
    case "SAVE_CHARACTER_ID":
      return [action.id, ...state];

    case "REMOVE_CHARACTER_ID":
      return state.filter(id => {
        return id !== action.id;
      });
  
    default:
      return state;
  }
}