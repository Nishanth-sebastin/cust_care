import { Drawer, Grid, Typography, List, ListItem, Toolbar, Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Inbox from '@mui/icons-material/Inbox'
const useStyles = makeStyles({
    drawer: {
        width: 240,
    },
    drawerPaper: {
        "&&": {
            width: 240,
            backgroundColor: "#222223"
        },
        marginTop: '20px',
        marginLeft: '20px',

    },

    list: {
        marginBottom: '20px',

    },
    icon: {
        color: 'white',

    },
    icons: {
        position: 'relative',
        right: '120px',
        bottom: '30px'
    },
    hover: {
        backgroundColor: '#222223',
        '&:hover': {
            backgroundColor: '#38383E'
        }
    }
})

function AppBar() {

    const style = useStyles()
    return (
        <Grid>
            <Drawer
                classes={{ paper: style.drawerPaper }}
                sx={{

                    width: 240,

                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        height: ' 740px',
                        borderRadius: '15px'
                    },
                }}
                variant="permanent"
                anchor="left"
            >


                <Toolbar />
                <Divider />
                <List>
                    <ListItem className={style.list}>

                        <ListItemIcon className={style.icons}> <DashboardOutlinedIcon className={style.icon} /></ListItemIcon>
                        <ListItemText sx={{ color: 'white' }}> Dashboard</ListItemText>


                    </ListItem>
                    <ListItem className={style.list}>
                        <ListItemIcon className={style.icons}> <DashboardOutlinedIcon className={style.icon} /></ListItemIcon>
                        <ListItemText sx={{ color: 'white' }}> Dashboard</ListItemText>
                    </ListItem>
                    <ListItem className={style.list}>
                        <ListItemIcon className={style.icons}> <DashboardOutlinedIcon className={style.icon} /></ListItemIcon>
                        <ListItemText sx={{ color: 'white' }}> Dashboard</ListItemText>
                    </ListItem>
                    <ListItem className={style.list}>
                        <ListItemIcon className={style.icons}> <DashboardOutlinedIcon className={style.icon} /></ListItemIcon>
                        <ListItemText sx={{ color: 'white' }}> Dashboard</ListItemText>
                    </ListItem>
                    <ListItem className={style.list}>
                        <ListItemIcon className={style.icons}> <DashboardOutlinedIcon className={style.icon} /></ListItemIcon>
                        <ListItemText sx={{ color: 'white' }}> Dashboard</ListItemText>
                    </ListItem>
                    <ListItem className={style.list}>
                        <ListItemIcon className={style.icons}> <DashboardOutlinedIcon className={style.icon} /></ListItemIcon>
                        <ListItemText sx={{ color: 'white' }}> Dashboard</ListItemText>
                    </ListItem>
                </List>


            </Drawer>
        </Grid>
    )

}

export default AppBar