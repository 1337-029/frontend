import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.style = {
            textAlign: "center",
        }
    }


    render() {
        const {username, logged_in} = this.props;
        const welcome = logged_in ? `Welcome back, ${username}` : "Wake up, Neo";
        let login_hint = logged_in ? "" : (
            <div>
                <p>Type "login USERNAME PASSWORD" to log in</p>
                <p>Or "register USERNAME PASSWORD" to register a new account</p>
            </div>
        )

        return (
            <div style={this.style}>
                <h1>{welcome}</h1>
                {login_hint}
            </div>
        );
    }
}

export default Header;