import React, {Component} from 'react';
import {color} from "../../styles/globals";
import Command from "./Command";

class Text extends Component {
    constructor(props) {
        super(props);

        this.style = {
            display: "inline",
            color: color.primary,
        }
    }


    render() {
        const {text, type, active, username} = this.props;
        if (type === "command") {
            return (
                <Command active={active} username={username}>
                    {text}
                </Command>
            )
        }
    }
}

export default Text;