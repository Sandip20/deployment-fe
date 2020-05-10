import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Typography } from '@material-ui/core';
import Item from '../../components/Item/Item'
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getDeployments, deleteEntry } from '../../api/api'

import { Deployment } from '../../interfaces/deployment.interface';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: 752,
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

const Dashboard = (props: any) => {

    const classes = useStyles();
    const dispatch = useDispatch()
    let data: any = [];
    data = useSelector((state: any) => state.data.deployments, shallowEqual)
    const onDelete = (id: string) => {
        dispatch(deleteEntry(id))
    }
    useEffect(() => {
        dispatch(getDeployments())

    }, [dispatch])

    const listItems = data ? data.map((deployment: Deployment) => {
        return <Item {...deployment} key={deployment._id} onDelete={() => { onDelete(deployment._id) }}></Item>
    }) : null
    const onCreateClick = () => {

        props.history.push('/deploy')
    }
    const size = listItems.length === 0 ? 100 : 40
    return (
        <div >
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <div>
                    <Grid item xs={12} md={6}>
                        <AddCircleOutlineIcon onClick={onCreateClick} style={{ fontSize: size }} >


                        </AddCircleOutlineIcon>

                        {listItems.length === 0 ? <div ><Typography variant="h6" >Please create Deployment</Typography> </div> : null}


                    </Grid>
                </div>


                {listItems.length !== 0 ? <Grid item xs={12} md={6}>
                    <div className={classes.demo}>
                        <List dense={true}>
                            {listItems}
                        </List>
                    </div>
                </Grid> : null}
            </Grid>

        </div>
    );
}
export default withRouter(Dashboard)