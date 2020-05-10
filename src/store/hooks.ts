import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { getDeployments } from '../api/api'
import { useCallback, useEffect } from 'react';
export const useFetchData = () => {
    const dispatch = useDispatch();
    const { data, loading, errors } = useSelector((state: any) => ({
        data: state.data,
        loading: state.loading,
        errors: state.errors
    }), shallowEqual);
    const boundAction = useCallback(() => {
        return dispatch(getDeployments())
    }, [dispatch]);
    useEffect(() => {
        if (!data) boundAction();
    }, [boundAction, data]);
    return {
        data,
        getDeployments: boundAction,
        loading: loading,
        errors: errors
    }
}