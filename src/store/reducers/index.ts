import { combineReducers } from 'redux';
import deploymentReducer from './deploymentReducer';
import templateReducer from './templateReducer'
// import formReducer from './formReducer'
export default combineReducers({
  data: deploymentReducer,
  templateData: templateReducer
});
