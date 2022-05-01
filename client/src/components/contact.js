import React from "react";
import { TextField, Button } from "@material-ui/core";

export default function Contact() {
    return (
        <>
            <section className="contact-container">
                <TextField
                    id="adreess-input"
                    label="First Name"
                    variant="standard"
                    // onChange={(event) => {
                    //     setName(event.target.value);
                    // }}
                />
                <TextField
                    id="adreess-input"
                    label="Last Name"
                    variant="standard"
                    // onChange={(event) => {
                    //     setNeedy(event.target.value);
                    // }}
                />
                <TextField
                    id="adreess-input"
                    label="Description"
                    variant="standard"
                    // onChange={(event) => {
                    //     setDescription(event.target.value);
                    // }}
                />
                <div className="btn-contact">
                    <Button
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
