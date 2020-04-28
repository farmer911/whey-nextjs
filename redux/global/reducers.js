import { actionTypes } from "./actions"

export const initialState = {
  appLanguage: {
    uniqueSeoCode: 'EN'
  },
  isOpenMenu: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_APP_LANGUAGE:
      return {
        ...state,
        appLanguage: action.appLanguage
      }
    case actionTypes.TOGGLE_MENU:
      return {
        ...state,
        isOpenMenu: action.isOpenMenu
      }
    default:
      return state
  }
}

export default reducer
