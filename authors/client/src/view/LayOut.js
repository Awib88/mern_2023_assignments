import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, Container, CssBaseline, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom'; // Import Outlet from react-router-dom



const LayOut = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <Typography variant='h4'>
                        My fav Authors
                    </Typography>
                </Toolbar>
            </AppBar>
            <main style={{ display: "flex" }}>
                <div style={{ borderRight: "solid 1px", width: "20%" }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            <ListItem disablePadding component={"a"} href='/authors/all'>
                                <ListItemButton >
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="All my fav authors" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding component={"a"} href='/authors/new'>
                                <ListItemButton>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText primary="Add author" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </div>
                <div style={{ margin: "20px", padding: "10px" }} >
                    <Outlet/>
                </div>
            </main>
        </>
    );
};




export default LayOut;
