import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import { Link } from "react-router-dom";

export default function MenuApp() {
    return (
        <Box sx={{ m: 0 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" className="link">
                        Home
                    </Link>
                    <Link to="/needies" className="link">
                        Help
                    </Link>
                    <Link to="/newneedies" className="link">
                        Register
                    </Link>
                    <Link to="/newneedies" className="link">
                        Contact
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
