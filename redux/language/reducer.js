import { actionTypes } from "./actions";

export const initialLanguageState = {
  languageDetail: {},
  stringResources: {},
  stringResource: null,
  languages: [],
}

function reducer(state = initialLanguageState, action) {
  switch (action.type) {
    case actionTypes.SET_LANGUAGE_DETAIL:
      return {
        ...state,
        languageDetail: action.languageDetail
      }

    case actionTypes.SET_STRING_RESOURCE:
      return {
        ...state,
        stringResources: action.stringResources
      }
    case actionTypes.SET_LANGUAGES:
      return {
        ...state,
        languages: action.languages
      }
    case actionTypes.GET_STRING_RESOURCE_BY_ID:
      return {
        ...state,
        stringResource: action.stringResource
      }
    default:
      return state
  }
}

export default reducer

