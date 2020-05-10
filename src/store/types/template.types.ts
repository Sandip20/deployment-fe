
export const FETCH_TEMPLATES = "FETCH_TEMPLATES"
export const SET_TEMPLATE = "SET_TEMPLATE"
export const SET_VERSION = "SET_VERSION"
export interface Template {
    _id?: string;
    name: string;
    versions: [string];
}
interface FetchTemplateAction {
    type: typeof FETCH_TEMPLATES,
    payload: [Template]
}
interface SetTemplateAction {
    type: typeof SET_TEMPLATE,
    payload: Template
}
interface SetVersionAction {
    type: typeof SET_VERSION,
    payload: string
}

export type TemplateActionTypes = FetchTemplateAction | SetVersionAction | SetTemplateAction