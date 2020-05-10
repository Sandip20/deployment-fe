import { SET_NAME, SET_URL, SET_VERSION, RESET_FORM } from '../types/form.types'
export default function (state:{ name: '', version: '', url: '' }, action: any) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_URL:
      return { ...state, url: action.payload };
    case SET_VERSION:
      return { ...state, version: action.payload };
    case RESET_FORM:
      return { ...state, ...{ name: '', version: '', url: '' } }
    default:
      return state;
  }
}

