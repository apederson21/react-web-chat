import React, { Component } from 'react';
import ChatMessages from '../chatMessages/chatMessages';

import classes from './chatContainer.css';

class chatContainer extends Component {
    render () {
        return (
            <div className={classes.ChatContainer}>
                <ChatMessages
                    chatId={this.props.chatId} />
            </div>
        )
    }
};

export default chatContainer;
