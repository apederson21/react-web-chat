import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import classes from './chatInput.css';
import sendSVG from '../../../assets/images/send.svg';

class chatInput extends Component {
    state = {
        newMessage: null
    };

    componentDidMount() {
        let input = document.querySelector(`.${classes.ChatInput}`);

        input.focus();
        input.addEventListener('keydown', (e) => {
            if (e.which === 13) this.getMessageHandler();
        });
    }

    getMessageHandler = () => {
        let input = document.querySelector(`.${classes.ChatInput}`);
        let msg = input.value;
        if (msg && msg.trim().length > 0) {
            this.props.sendMessageHandler(msg);
        }
    }

    shouldComponentUpdate(nextProps) {
        let input = document.querySelector(`.${classes.ChatInput}`);
        input.focus();
        return !!nextProps && !!nextProps.clearInput;
    }

    componentDidUpdate() {
        let input = document.querySelector(`.${classes.ChatInput}`);
        input.value = '';
    }

    render() {
        return (
            <div className={classes.ChatInputForm}>
                <input
                    type='text'
                    className={classes.ChatInput}
                    aria-label='Type your message' />
                <button
                    className={classes.ChatSend}
                    type='submit'
                    onClick={this.getMessageHandler}
                    aria-label='send message'>
                        <ReactSVG src={sendSVG} />
                </button>
            </div>
        );
    }
}

export default chatInput;
