// import resourceService from "../../services/configurations/resourceService";
// import languageService from "../../services/language/languageService";
export const actionTypes = {
  SET_LANGUAGE_DETAIL: 'LANGUAGE.SET_LANGUAGE_DETAIL',
  SET_STRING_RESOURCE: 'LANGUAGE.SET_STRING_RESOURCE',
  GET_STRING_RESOURCE: 'LANGUAGE.GET_STRING_RESOURCE',
  GET_STRING_RESOURCE_BY_ID: 'LANGUAGE.GET_STRING_RESOURCE_BY_ID',
  SET_LANGUAGES: 'SET_LANGUAGES'
}

// export const fetchLanguages = () => async dispatch => {
//   const languages = await languageService.fetchLanguages();
//   return dispatch({
//     type: actionTypes.SET_LANGUAGES,
//     languages
//   })
// }

// export const setLanguageDetail = languageDetail => dispatch => {
//   const action = { type: actionTypes.SET_LANGUAGE_DETAIL, languageDetail };
//   return dispatch(action);
// }

// export const fetchStringResource = (__cookies = {}) => async dispatch => {
//   const stringResources = await resourceService.getAllResourceValues(__cookies);;
//   return dispatch({
//     type: actionTypes.SET_STRING_RESOURCE,
//     stringResources
//   })
// }

// export const setStringResource = stringResources => dispatch => {
//   return dispatch({ type: actionTypes.SET_STRING_RESOURCE, stringResources })
// }

// export const reloadStringResources = () => async dispatch => {
//   const stringResources = await resourceService.getAllResourceValues();
//   return dispatch({ type: actionTypes.SET_STRING_RESOURCE, stringResources })
// }

// export const setLocalizeResource = model => dispatch => {
//   return dispatch({
//     type: actionTypes.GET_STRING_RESOURCE_BY_ID,
//     stringResource: model
//   })
// }

// export const getResourceById = id => async dispatch => {
//   const stringResource = await resourceService.getById(id);
//   return dispatch({
//     type: actionTypes.GET_STRING_RESOURCE_BY_ID,
//     stringResource
//   })
// }