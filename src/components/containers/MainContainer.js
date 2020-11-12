import React, {Component} from 'react';
import {color} from "../../styles/globals";
import Header from "../elements/Header";
import TerminalContainer from "./TerminalContainer";

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.style = {
            width: "50%",
            color: color.primary,
        }

        this.state = {
            "username": "root",
            "logged_in": true,
        }
    }

    render() {
        return (
            <div style={this.style}>
                <Header logged_in={this.state.logged_in} username={this.state.username}/>
                <TerminalContainer logged_in={this.state.logged_in} username={this.state.username}/>
            </div>
        );
    }
}

export default MainContainer;