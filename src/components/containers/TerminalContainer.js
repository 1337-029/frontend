import React, {Component} from 'react';
import Cursor from "../elements/Cursor";
import Text from "../elements/Text";

class TerminalContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "next_id": 1,

            "history": [
                {
                    "id": 0,
                    "type": "command",
                    "text": "",
                    "active": true,
                },
            ]
        }
    }

    downHandler = ({key}) => {
        const newState = {...this.state};
        const index = this.state.history.length;

        if (key === "Enter") {
            newState.history[index - 1].active = false;
            newState.history.push({
                "id": newState.next_id++,
                "type": "command",
                "text": "",
                "active": true,
            })
            this.setState(newState);
        } else if (key === "Backspace") {
            const str = newState.history[index - 1].text;
            const char_index = str.length - 1;
            newState.history[index - 1].text = str.substring(0, char_index);
            this.setState(newState);
        } else if (key.length === 1) {
            newState.history[index - 1].text += key;
            this.setState(newState);
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.downHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.downHandler);
    }


    render() {
        return (
            <div>
                {this.state.history.map((element) => {
                    const cursor = element.active ? <Cursor/> : "";
                    return (
                        <p key={element.id}>
                            <Text username={this.props.username} type={element.type}
                                  text={element.text} active={element.active}/>
                            {cursor}
                        </p>
                    )
                })}
            </div>
        );
    }
}

export default TerminalContainer;