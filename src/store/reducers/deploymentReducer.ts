import { CREATE_DEPLOYMENT, FETCH_DEPLOYMENTS, DELETE_DEPLOYMENT, Deployment } from '../types/deployment.types'
export default function (state = { isCreated: false, errors: null, deployments: [] }, action: any) {
  switch (action.type) {
    case CREATE_DEPLOYMENT:
      return { ...state, ...action.payload, ...{ isCreated: true } };
    case FETCH_DEPLOYMENTS:
      return { ...state, deployments: action.payload, ...{ isCreated: false } };
    case DELETE_DEPLOYMENT:

      return {
        ...state,
        deployments: restructureData(state.deployments, action.payload)
      };
    default:
      return state;
  }
}

function restructureData(deployments: any, record: Deployment) {
  return deployments.filter((item: Deployment) => item._id !== record._id)
}