import axios from 'axios';
import { fetchDeployments, deleteDeployment ,createDeployment} from '../store/actions/deployment.action';
import { fetchTemplates } from '../store/actions/template.action';
import { Deployment } from '../store/types/deployment.types';
const url = "http://ec2-3-92-214-96.compute-1.amazonaws.com:4000"
export const getDeployments = () => (dispatch: any) => {
    axios
        .get(`${url}/deployments`)
        .then(res => {
            dispatch(fetchDeployments(res.data));

        })
        .catch(err => {
            console.log(`error: ${err}`);
            alert(err)
        });
};
export const create = (deployment:Deployment) => (dispatch: any) => {
    axios
        .post(`${url}/deployments`,deployment)
        .then(res => {
            dispatch(createDeployment(res.data));

        })
        .catch(err => {
            console.log(`error: ${err}`);
            alert(err)
        });
};
export const deleteEntry = (id: string) => (dispatch: any) => {
    axios.delete(`${url}/deployments/${id}`)
        .then(res => {
            dispatch(deleteDeployment(res.data));

        })
        .catch(err => {
            console.log(`error: ${err}`);
            alert(err)
        });
};
export const getTemplates = () => (dispatch: any) => {
    axios
        .get(`${url}/templates`)
        .then(res => {
            const data = res.data;
            dispatch(fetchTemplates(data));
           

        })
        .catch(err => {
            console.log(`error: ${err}`);
            alert(err)
        });
};

