import { SET_NAME, SET_URL, SET_VERSION, FormActionTypes,RESET_FORM } from '../types/form.types'

export const setName = (payload: string): FormActionTypes => {
    return {
        type: SET_NAME,
        payload: payload
    }
}

export const setUrl = (payload: string): FormActionTypes => {
    return {
        type: SET_URL,
        payload: payload
    }
}
export const setVersion = (payload: string): FormActionTypes => {
    return {
        type: SET_VERSION,
        payload: payload
    }
}
export const resetForm = (): FormActionTypes => {
    return {
        type: RESET_FORM
        
    }
}
