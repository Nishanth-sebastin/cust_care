import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Button,
    Grid,
    Typography,
    TablePagination,
    TableFooter
} from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core'
import LayoutCustomer from '../../../MainLayout/LayoutCustomer'
import { Search } from '@mui/icons-material';
import { Link} from 'react-router-dom'

export class Chat extends Component{
    componentDidMount() {

    (function(d, m){
        var kommunicateSettings = 
            {"appId":"28a8def59f2f77b42cb6a3f9a0f320b04","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    }
    render() {
        
        return(
            <LayoutCustomer>
                <Grid>
                <div style={{position:"relative",top:"200px"}}>
                <h2 style={{color:"gray"}}><span style={{ paddingLeft:"30px"}}></span>Let's Solve Your Queries </h2>
            </div>
                </Grid>
           
            </ LayoutCustomer>
        )
        
    } 
}

export default Chat
