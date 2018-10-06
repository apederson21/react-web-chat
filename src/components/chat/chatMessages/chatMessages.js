import React, { Component } from 'react';
import ChatInput from '../chatInput/chatInput';

import classes from './chatMessages.css';

class chatMessage extends Component {
    state = {
        chatId: null,
        messages: [],
        clearInput: false
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState && nextState.messages.length > this.state.messages.length) return true; 
        return !!nextProps.chatId && nextProps.chatId !== this.state.chatId;
    }

    componentDidUpdate() {
        // call server to get messages
        if (this.props.chatId !== this.state.chatId) {
            let messages = [];
            if (this.props.chatId === 1) {
                messages.push({
                    from: 'A',
                    timestamp: 1538541471544,
                    message: 'Hey there!'
                });
                messages.push({
                    from: '',
                    timestamp: 1538541471550,
                    message: 'Hey - what\'s up?'
                });
            } else {
                messages.push({
                    from: 'E',
                    timestamp: 1538541588113,
                    message: 'Dinner tonight? I was thinking maybe sushi.'
                })
            }
            this.setState({
                chatId: this.props.chatId,
                messages: messages
            });
            this.scrollToLatestHandler();
        }
    }

    scrollToLatestHandler = () => {
        let chats = document.querySelector(`.${classes.ChatMessage}`);
        chats.scrollTo(null, chats.scrollHeight);
    }

    sendMessageHandler = (msg) => {
        // save messages to server
        let updatedMessages = [...this.state.messages];
        let msgObj = {
            from: '',
            timestamp: new Date().getTime(),
            message: msg
        };
        updatedMessages.push(msgObj);
        this.setState({
            messages: updatedMessages,
            clearInput: true
        });
        this.scrollToLatestHandler();
    }

    render() {
        let formattedMessages = this.state.messages.map((message) => {
            return (
                <div key={message.timestamp} className={message.from ? classes.ChatLeft : classes.ChatRight}>
                    {
                        message.from ? <span className={classes.ChatAvatar}>{message.from}</span> : null
                    }
                    <span className={classes.ChatContent}>{message.message}</span>
                </div>
            )
        });

        return (
            <div className={classes.ChatMessages}>
                <div className={classes.ChatMessage}>
                    {formattedMessages}
                </div>
                <ChatInput
                    sendMessageHandler={this.sendMessageHandler}
                    clearInput={this.state.clearInput} />
            </div>
        )
    }
}

export default chatMessage;
