import React from 'react'
import LayoutAgent from '../../MainLayout/LayoutAgent'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Divider } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material'
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Avatar } from '@mui/material';
import { Fab } from '@mui/material';
import { InputAdornment } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

import SendIcon from '@mui/icons-material/Send';


const useStyles = makeStyles({

    chatSection: {

        height: '80vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '70vh',
        overflowY: 'auto'
    },
    Grid: {

        position: 'relative',
        top: '80px',
        width: '1200px',
        padding: '20px',

    },
});



function TicketDetails() {
    const classes = useStyles()
    return (

        <LayoutAgent>
            <Grid className={classes.Grid}>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography variant="h5" className="header-message">Chat</Typography><br></br>
                    </Grid>
                </Grid>
                <Grid container component={Paper} className={classes.chatSection}>
                    <Grid item xs={3} className={classes.borderRight500}>


                        <Grid item xs={12} style={{ padding: '10px' }}>
                            <TextField id="outlined-basic-email" InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" sx={{ position: 'relative', right: '125px', bottom: '30px' }}>
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }} label="Search" size='small' variant="outlined" placeholder='' value="     Name" contentEditable='false' />
                        </Grid>
                        <Divider />
                        <List>
                            <ListItem button key="RemySharp">
                                <ListItemIcon>
                                    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                                </ListItemIcon>
                                <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                                <ListItemText secondary="online" align="right"></ListItemText>
                            </ListItem>
                            <ListItem button key="Alice">
                                <ListItemIcon>
                                    <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
                                </ListItemIcon>
                                <ListItemText primary="Alice">Alice</ListItemText>
                            </ListItem>
                            <ListItem button key="CindyBaker">
                                <ListItemIcon>
                                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                                </ListItemIcon>
                                <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        <List className={classes.messageArea}>
                            <ListItem key="1">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText align="right" secondary="09:30"></ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem key="2">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText align="left" secondary="09:31"></ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem key="3">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText align="right" secondary="10:30"></ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </List>
                        <Divider />
                        <Grid container style={{ padding: '20px' }}>
                            <Grid item xs={11}>
                                <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                            </Grid>
                            <Grid xs={1} align="right">
                                <Fab color="primary" aria-label="add"><SendIcon color='black' /></Fab>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </LayoutAgent>
    );
}




export default TicketDetails