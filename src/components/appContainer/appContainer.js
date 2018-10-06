import React, { Component } from 'react';

import ChatContainer from '../chat/chatContainer/chatContainer';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';

import classes from './appContainer.css';

class appContainer extends Component {
    state = {
        currentChatId: null
    };

    selectChat = (newChatId) => {
        if (this.state.currentChatId === newChatId) return;
        this.setState({
            currentChatId: newChatId
        });
    }

    render () {
        return (
            <div className={classes.App}>
                <Header />
                <Sidebar
                    selectChat={this.selectChat}
                    chatId={this.state.currentChatId} />
                <ChatContainer
                    chatId={this.state.currentChatId} />
            </div>
        )
    }
}

export default appContainer;
