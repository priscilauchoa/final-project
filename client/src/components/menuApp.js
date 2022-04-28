import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuApp() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        sx={{ m: 0.5 }}
                        variant="p"
                        color="inherit"
                        component="div"
                    >
                        Home
                    </Typography>
                    <Typography
                        sx={{ m: 0.5 }}
                        variant="p"
                        color="inherit"
                        component="div"
                    >
                        About
                    </Typography>
                    <Typography
                        sx={{ m: 0.5 }}
                        variant="p"
                        color="inherit"
                        component="div"
                    >
                        Help
                    </Typography>
                    <Typography
                        sx={{ m: 0.5 }}
                        variant="p"
                        color="inherit"
                        component="div"
                    >
                        Contact
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
