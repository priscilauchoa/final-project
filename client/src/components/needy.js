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

export function Needy() {
    const needy = useSelector((state) => state.Needy && state.Needy);
    // const needyContainer = useRef();

    console.log("needy in needy.js--->", needy);
    // useEffect(() => {}, []);
    // TO DO - QUANDO CLICKAR EM HELP NO CARD, RENDERIZAR A PAGINA COM DETALHES DA ONG ____

    return (
        <>
            {/* <section ref={needyContainer} className="needy-container"> */}
            <h1 id="needy"> Contact us to help </h1>
            <section id="needy">
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
                    <TextareaAutosize
                        className="text-area-needy"
                        aria-label="minimum height"
                        minRows={10}
                        placeholder="How can you help us?"
                        style={{ width: 400 }}
                    />
                    <Button size="small">Submit</Button>
                </div>
            </section>
        </>
    );
}
