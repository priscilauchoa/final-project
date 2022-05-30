import React from "react";
import { TextField } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function Contact() {
    

    return (
        <>
            <section className="new-needy-container">
                <Typography
                    style={{ textAlign: "center", margin: "30px" }}
                    variant="h4"
                    component="div"
                >
                    Contact us
                </Typography>
                <TextField
                    style={{ width: "300px" }}
                    id="adreess-input"
                    label="First Name"
                    variant="standard"
                    // onChange={(event) => {
                    //     setName(event.target.value);
                    // }}
                />
                <TextField
                    style={{ width: "300px" }}
                    id="adreess-input"
                    label="Last Name"
                    variant="standard"
                    // onChange={(event) => {
                    //     setNeedy(event.target.value);
                    // }}
                />
                <TextField
                    style={{ width: "300px" }}
                    id="adreess-input"
                    label="Description"
                    variant="standard"
                    // onChange={(event) => {
                    //     setDescription(event.target.value);
                    // }}
                />
                <div className="btn-contact">
                    <Button
                        style={{ margin: "10px 0" }}
                        // onClick={handleClick}

                        variant="contained"
                        href="#contained-buttons"
                    >
                        Submit
                    </Button>
                </div>
            </section>
            {/* <h1 className="contact-img-h1">Contact</h1> */}
        </>
    );
}
