import * as React from "react";
import { Toolbar, AppBar, makeStyles, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    header: {
        backgroundColor: "#00A3BC",
        color: "#EF644A",
    },
});
export default function MenuApp() {
    const classes = useStyles();
    return (
        <Box sx={{ m: 0 }}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Link to="/" className="link">
                        Home
                    </Link>
                    <Link to="/" className="link">
                        Help
                    </Link>
                    <Link to="/register" className="link">
                        Register
                    </Link>
                    <Link to="/contact" className="link">
                        Contact
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
