import { CREATE_DEPLOYMENT, DELETE_DEPLOYMENT,FETCH_DEPLOYMENTS, DeploymentActionTypes, Deployment } from '../types/deployment.types'

/* eslint-disable import/prefer-default-export */


export const createDeployment = (payload: Deployment): DeploymentActionTypes => {
  return {
    type: CREATE_DEPLOYMENT,
    payload: payload
  }
}

export const fetchDeployments = (payload: [Deployment] ):DeploymentActionTypes => {
  return {
    type: FETCH_DEPLOYMENTS,
    payload: payload
  }
}
export const deleteDeployment = (payload: Deployment):DeploymentActionTypes => {
  return {
    type: DELETE_DEPLOYMENT,
    payload: payload
  }
}
