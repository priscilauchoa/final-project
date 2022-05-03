import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function About() {
    return (
        <>
            <section className="about">
                <Box sx={{ width: "100%", maxWidth: 500 }}>
                    <Typography variant="h4" gutterBottom component="div">
                        GIVING IS MORE IMPACTFUL THAN EVER
                    </Typography>

                    <Typography
                        variant="subtitle1"
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
                        the funds they receive. As Gift Aid enables the charity
                        to recover the basic rate of tax on your donation, the
                        scheme adds 25p to each £1 you give at no extra cost to
                        you.
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
