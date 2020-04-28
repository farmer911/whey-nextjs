import { combineReducers } from 'redux'
import globalState from './global/reducers';
import languageState from './language/reducer'

export default combineReducers({
  globalState,
  languageState
})
