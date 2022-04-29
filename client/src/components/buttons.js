// import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { red } from "@mui/material/colors";

const CancelButton = styled(Button)(({ theme }) => ({
    color: red[20],
    backgroundColor: red[300],
    "&:hover": {
        backgroundColor: red[600],
    },
}));

const SubmitButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#4ac183",
    borderColor: "#0fa662",
    fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
        backgroundColor: "#0fa662",
        borderColor: "#0fa662",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#0fa662",
        borderColor: "#0fa662",
    },
    "&:focus": {
        boxShadow: "0 0 0 0.2rem rgb(150, 50%, 55%)",
    },
});

// const CancelButton = styled(Button)(({ theme }) => ({
//     color: red[20],
//     backgroundColor: red[300],
//     "&:hover": {
//         backgroundColor: red[600],
//     },
// }));

// export function CancelButtonModel() {
//     return (
//         <Stack spacing={2} direction="row">
//             <CancelButton variant="contained">Cancel</CancelButton>
//         </Stack>
//     );
// }

export function SubmitButtonModel() {
    return (
        <SubmitButton variant="contained" disableRipple>
            SUBMIT
        </SubmitButton>
    );
}
