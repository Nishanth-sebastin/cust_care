import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import AppBar from '../layouts/admin/Appbar'
import Axios from 'axios'
import NavBar from '../layouts/admin/Navbar'

function LayoutAdmin({ children }) {

    useEffect(() => {
        Axios.get("http://localhost:8080/layoutadmin").then((response) => {
            console.log(response)
        })
    }, [])


    return (
        <div>
            <Grid container>
                <Grid item xs={2} sx={{ height: "100vh" }}>
                    <AppBar />
                </Grid>
                <Grid
                    sx={{
                        height: '100vh'
                    }}
                    item
                    xs={10}
                >
                    <NavBar />
                    {children}
                </Grid>
            </Grid>

        </div>
    )
}

export default LayoutAdmin