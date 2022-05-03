import { useRef, useEffect, useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router";

export function Needy() {
    const [contactInpu, showContactInput] = useState(true);
    const needy = useSelector((state) => state.Needy && state.Needy);
    // const needyContainer = useRef();
    let history = useHistory();

    console.log("needy in needy.js--->", needy);
    // useEffect(() => {}, []);
    // TO DO - QUANDO CLICKAR EM HELP NO CARD, RENDERIZAR A PAGINA COM DETALHES DA ONG ____

    const handleClick = () => {
        showContactInput(false);
    };
    return (
        <>
            {contactInpu == true && (
                <section id="needy">
                    <h1 id="needy"> Contact us to help </h1>
                    <div>
                        <img className="img-needy" src={needy.img}></img>

                        <Typography gutterBottom variant="h5" component="div">
                            {needy.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {needy.description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {needy.category}
                        </Typography>
                    </div>

                    <div className="needy-container">
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
                        <TextareaAutosize
                            className="text-area-needy"
                            aria-label="minimum height"
                            minRows={10}
                            placeholder="How can you help us?"
                            style={{ width: 400 }}
                        />
                        <Button onClick={handleClick} size="small">
                            Submit
                        </Button>
                    </div>
                </section>
            )}
            {contactInpu == false && (
                <div className="thanks">
                    <h1 id="needy"> Your email were sent successfuly </h1>
                    <p id="needy">
                        thanks for reaching out!We’re thrilled to hear from you.
                        Our inbox can’t wait to get your messages, so talk to us
                        any time you like. Cheers!{" "}
                    </p>
                    <img
                        className="img-needy"
                        src="https://ecommercegermany.com/wp-content/uploads/2019/01/thank-you.png"
                    ></img>
                </div>
            )}
        </>
    );
}
