import jsCookie from 'js-cookie';
import localizationSettings from '../../settings/localizationSettings.json'


export const actionTypes = {
  SET_APP_LANGUAGE: 'GLOBAL.SET_APP_LANGUAGE',
  TOGGLE_MENU: 'TOGGLE_MENU'
}

export const setAppLanguage = appLanguage => dispatch => {
  jsCookie.set(localizationSettings.accessKey, appLanguage.id);
  return dispatch({ type: actionTypes.SET_APP_LANGUAGE, appLanguage });
}

export const toggleMenu = isOpenMenu => dispatch => dispatch({
  type: actionTypes.TOGGLE_MENU,
  isOpenMenu
})