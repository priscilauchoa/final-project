import { Component } from "react";

export default class SavePicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: "",
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log("id-->***", this.props.userId);
        const id = this.props.userId;
        e.preventDefault();
        const file = this.state.file;
        let fd = new FormData();
        fd.append("file", file);
        console.log("file", file);
        fetch(`/upload/${id}`, {
            method: "POST",
            body: fd,
        })
            .then((res) => {
                console.log("img saved", res);
                location.reload();
            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    render() {
        return (
            <>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        this.setState({ file: e.target.files[0] });
                    }}
                ></input>
                <button
                    onClick={(e) => {
                        this.handleClick(e);
                    }}
                >
                    submit
                </button>
            </>
        );
    }
}
