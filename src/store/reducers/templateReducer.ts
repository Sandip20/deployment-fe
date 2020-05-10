import { FETCH_TEMPLATES, SET_TEMPLATE, SET_VERSION } from '../types/template.types'
import { SET_NAME, SET_URL, RESET_FORM } from '../types/form.types'

export default function (state = { name: '', url: '', loading: false, errors: null, templates: [], template: {}, versions: [], version: '' }, action: any) {
    switch (action.type) {
        case FETCH_TEMPLATES:
            return { ...state, templates: action.payload, template: action.payload[0], versions: action.payload[0].versions, version: action.payload[0].versions[0], name: action.payload[0].name };
        case SET_TEMPLATE:
            return { ...state, template: action.payload, versions: action.payload.versions, version: action.payload.versions[0], name: action.payload.name }
        case SET_VERSION:
            return { ...state, version: action.payload, form: {} }
        case RESET_FORM:
            return { ...state, ...{ name: '', version: '', url: '' } }
        case SET_NAME:
            return { ...state, name: action.payload };
        case SET_URL:
            return { ...state, url: action.payload };
        default:
            return state;
    }
}

