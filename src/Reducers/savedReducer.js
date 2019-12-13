export const savedReducer = (state = [], action) => {
  switch (action.type) {
    case "SAVE_COMIC_ID":
      return [action.id, ...state]

    case "REMOVE_COMIC_ID":
      return state.filter(id => {
        return id !== action.id;
      })
  
    default:
      return state
  }
}