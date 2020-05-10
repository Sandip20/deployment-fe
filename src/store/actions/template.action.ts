import { FETCH_TEMPLATES, TemplateActionTypes, Template, SET_TEMPLATE, SET_VERSION } from '../types/template.types'

export const fetchTemplates = (payload: [Template]): TemplateActionTypes => {
  return {
    type: FETCH_TEMPLATES,
    payload: payload
  }
}

export const setTemplate = (payload: Template): TemplateActionTypes => {
  return {
    type: SET_TEMPLATE,
    payload: payload
  }
}

export const setVersion = (payload: string): TemplateActionTypes => {
  return {
    type: SET_VERSION,
    payload: payload
  }
}