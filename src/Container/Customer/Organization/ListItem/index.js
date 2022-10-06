// import { Button } from 'bootstrap';
import React from 'react';
import { Box, Icon, Button, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import { makeStyles, Paper,CardActionArea, CardContent, CardHeader, CardMedia, Divider ,Card } from '@material-ui/core';
import LayoutCustomer from '../../../MainLayout/LayoutCustomer'
import { styled } from '@mui/material/styles';



const styles = makeStyles({
  query:{

    padding: '18px',
},
})

      
  const ListItem=( {item: {content}})=>{
    var style = styles();
    return(
      <Grid>
        <Paper>
          <Card className={style.query}>
            <p>{content}</p>
          </Card>
        </Paper>
      </Grid>
    )
  }

      
     
    

  
  export default ListItem;