
export const SET_URL = "SET_URL"
export const SET_NAME = "SET_NAME"
export const SET_VERSION = "SET_VERSION"
export const RESET_FORM = "RESSET_FORM"


interface SetNameAction {
    type: typeof SET_NAME,
    payload: string
}
interface SetUrlAction {
    type: typeof SET_URL,
    payload: string
}
interface SetVersionAction {
    type: typeof SET_VERSION,
    payload: string
}
interface ResetFormAction {
    type: typeof RESET_FORM

}

export type FormActionTypes = SetVersionAction | SetUrlAction | SetNameAction | ResetFormAction