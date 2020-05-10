import React, { useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Redirect, withRouter } from 'react-router-dom'
import { getTemplates, create } from '../../api/api'
import { useSelector, useDispatch } from 'react-redux';
import { TextField, MenuItem, Button } from '@material-ui/core';
import { Template } from '../../store/types/template.types';
import { setTemplate } from '../../store/actions/template.action';
import { setName, setUrl, setVersion, resetForm } from '../../store/actions/form.actions';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

const Deploy = (props: any) => {

    const classes = useStyles();

    const { templates, template, version, versions, name, url } = useSelector((state: any) => state.templateData)
    const { isCreated } = useSelector((state: any) => state.data)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTemplates())
    }, [dispatch])

    const handleTemplateChange = (event: any) => {
        const [template] = templates.filter((template: Template) => {

            return template.name === event.target.value
        })
        dispatch(setName(template.name))
        dispatch(setVersion(template.versions[0]))
        dispatch(setTemplate(template))
    }
    const handleVersionChange = (event: any) => {

        dispatch(setVersion(event.target.value))
    }
    const handleUrlChange = (event: any) => {
        dispatch(setUrl(event.target.value))
    }
    const onSubmit = (event: any) => {

        dispatch(create({ name, version: version, url }))
        dispatch(resetForm())
        event.preventDefault();
    }

    const cancelClick = (event: any) => {
        dispatch(resetForm())
        props.history.push('/')
    }
    return (
        <div>
            {!isCreated ? <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit} >
                {
                    templates.length > 0 ?
                        <Box m={1}>
                            <Grid container
                                direction="column"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-select-template"
                                        select
                                        label="Select"
                                        value={template.name}
                                        onChange={handleTemplateChange}
                                        helperText="Please select template"

                                    >
                                        {templates.map((option: any) => (
                                            <MenuItem key={option._id} value={option.name}>
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-select-version"
                                        select
                                        label="Select"
                                        value={version}
                                        onChange={handleVersionChange}
                                        helperText="Please select version"
                                    >
                                        {versions.map((option: string, index: number) => (
                                            <MenuItem key={index} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField id="url" label="Deployment Url" onChange={handleUrlChange} />
                                </Grid>
                                <Grid item xs={12} >
                                    <div>
                                        <Button type="submit" variant="contained" color="primary" >Submit</Button>
                                        <Button variant="contained" onClick={cancelClick} >Cancel</Button>
                                    </div>
                                </Grid>
                            </Grid>


                        </Box>

                        : null
                }
            </form > : <Redirect to='/'></Redirect>}


        </div>


    );
}
export default withRouter(Deploy)