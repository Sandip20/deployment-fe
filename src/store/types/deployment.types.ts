
export const CREATE_DEPLOYMENT = "CREATE_DEPLOYMENT"
export const FETCH_DEPLOYMENTS = "FETCH_DEPLOYMENTS"
export const DELETE_DEPLOYMENT = "DELETE_DEPLOYMENT"
export interface Deployment {

    _id?: string;
    url: string;
    name: string;
    version: string;
    deployedAt?: Date;
}

interface CreateDeploymentAction {
    type: typeof CREATE_DEPLOYMENT
    payload: Deployment
}
interface FetchDeploymentAction {
    type: typeof FETCH_DEPLOYMENTS,
    payload: [Deployment]
}

interface DeleteDeploymentAction {
    type: typeof DELETE_DEPLOYMENT
    payload: Deployment
}

export type DeploymentActionTypes = CreateDeploymentAction | DeleteDeploymentAction | FetchDeploymentAction