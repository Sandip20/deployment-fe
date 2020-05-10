import React, { FC } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CloudDoneIcon from '@material-ui/icons/CloudDone';

import DeleteIcon from '@material-ui/icons/Delete';
import { Deployment } from '../../interfaces/deployment.interface'
interface Item extends Deployment {
    onDelete: () => void
}
const Item: FC<Item> = (item) => {
    console.log(item)
    return (
        <ListItem key={item._id}>
            <ListItemAvatar>
                <Avatar>
                    <CloudDoneIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={item.name}

            />
             <ListItemText
                secondary={item.url}

            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={item.onDelete}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
export default Item