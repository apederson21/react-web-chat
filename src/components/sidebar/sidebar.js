import React, { Component } from 'react';

import classes from './sidebar.css';

class sidebar extends Component {
    state = {
        chats: []
    }

    componentDidMount() {
        // call server to get chats (first time)
        let chats = [
            {
                chatId: 1,
                from: 'Andrew',
                preview: 'Hey there!',
                read: false
            },
            {
                chatId: 2,
                from: 'Elaine',
                preview: 'Dinner tonight? I was thinking maybe sushi.',
                read: false
            }
        ];
        chats[0].read = true;

        this.setState({
            chats: chats
        });

        if (chats) {
            this.props.selectChat(chats[0].chatId);
        }
    }

    chatSelectHandler = (index, chatId) => {
        if (chatId === this.props.chatId) return;
        this.setChatToRead(index);
        this.props.selectChat(chatId);
    }

    setChatToRead = (index) => {
        let updatedChats = [...this.state.chats];
        updatedChats[index].read = true;
        this.setState({
            chats: updatedChats
        });
    }

    render () {
        let chatRender = [];
        let currentChatId;
        if (this.state.chats[0]) {
            if (this.props.chatId) {
                currentChatId = this.props.chatId;
            } else {
                currentChatId = this.state.chats[0].chatId;
            }
        } else {
            currentChatId = null;
        }
        this.state.chats.forEach((chat, i) => {
            let chatClass = [classes.SidebarChat];
            if (chat.chatId === currentChatId) {
                chatClass.push(classes.SidebarChatActive);
            }
            chatRender.push(
                <div
                    className={chatClass.join(' ')}
                    key={chat.chatId}
                    onClick={() => this.chatSelectHandler(i, chat.chatId)}>
                        <div>{chat.from}</div>
                        <div read={chat.read ? 0 : 1}>{chat.preview}</div>
                </div>
            );
        });
        return (
            <div className={classes.Sidebar}>
                {chatRender}
            </div>
        )
    }
};

export default sidebar;
