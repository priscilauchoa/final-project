import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function About() {
    return (
        <>
            <section className="about">
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        component="div"
                        style={{ color: "#ff6600" }}
                    >
                        GIVING IS MORE IMPACTFUL THAN EVER
                    </Typography>
                    <Typography
                        style={{ color: "#015865" }}
                        variant="h6"
                        gutterBottom
                        component="div"
                    >
                        Many people are concerned that their donations to
                        charity may be reduced by tax or administrative costs,
                        preventing the full amount from reaching the people or
                        causes they really want to help. Thankfully there are
                        ways to make the most of every donation to charity. If
                        you’re a UK taxpayer, you can boost the amount of every
                        donation you make by giving through Gift Aid, an Income
                        Tax relief created to help charities get the most out of
                        the funds they receive.
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        Make a change you as well.
                    </Typography>
                </Box>
                <img
                    className="img-about"
                    src="https://pbs.twimg.com/media/FO7QUGRWUAQcs6G?format=jpg&name=large"
                ></img>
            </section>
        </>
    );
}
