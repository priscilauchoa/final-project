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
        const id = this.props.id;
        e.preventDefault();
        console.log("id in save-picture client side");

        this.setState({ file: e.target.files[0] });
        const file = this.state.file;
        let fd = new FormData();
        fd.append("file", file);
        fetch(`/upload/${id}`, {
            method: "POST",
            body: fd,
        })
            .then((res) => res.json())
            .then(({ url }) => {
                console.log("url", url);
            })
            .catch((err) => {
                console.log("err", err);
            });
    }

    render() {
        return (
            <>
                <input type="file" accept="image/*"></input>
                <button
                    onChange={(e) => {
                        this.setState({ file: e.target.files[0] });

                        this.handleClick(e);
                    }}
                >
                    submit
                </button>
            </>
        );
    }
}
