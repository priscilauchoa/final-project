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
        e.preventDefault();
        console.log("Hey from button");
        this.setState({ file: e.target.files[0] });

        const file = this.state.file;
        let fd = new FormData();
        fd.append("file", file);
        // this.props.imageSet(fd);
        fetch("/upload", {
            method: "POST",
            body: fd,
        })
            .then((res) => res.json())
            .then(({ url }) => {
                console.log("url", url);
                // this.props.onProfilePictureChange(url);
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

// import React from "react";
// import {  useState } from "react";

// export function SavePicture(props) {
//     const [file, setFile] = useState();

//     const  handleClick=(e)=> {
//         console.log("this prpos", this.props);
//         e.preventDefault();
//         const file = this.state.file;
//         console.log("******", this.state.file);
//         let fd = new FormData();
//         fd.append("file", file);
//     };

//     render() {
//         return (
//             <>
//                 <section className="modal">
//                     <section className="modal-content">
//                         <div className="close-button"></div>
//                         <section className="form modal-form">
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={(e) => {handleClick(e)}}
//                             ></input>
//                         </section>
//                     </section>
//                 </section>
//             </>
//         );
//     }
// }

{
    /* <input
                                type="file"
                                name="file"
                                id="file"
                                className="inputfile"
                                accept="image/*"
                            ></input>
                            <label>Choose a File</label>
                            <input
                                type="file"
                                name="file"
                                id="file"
                                className="inputfile"
                            ></input> */
}
{
    /* <button clickHandler={this.clickHandler()}>Save</button> */
}
