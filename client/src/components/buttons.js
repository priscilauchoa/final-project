import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    submit: {
        backgroundColor: "#00A3BC",
        color: "#FFFFFF",
    },
    cancel: {
        backgroundColor: "#red",
        color: "#FFFFFF",
    },
});

export function SubmitButton() {
    const classes = useStyles();
    return (
        <Button onClick={() => {}} className={classes.submit}>
            Submit
        </Button>
    );
}
export function CancelButton() {
    const classes = useStyles();
    return (
        <Button onClick={() => {}} className={classes.cancel}>
            Cancel
        </Button>
    );
}
