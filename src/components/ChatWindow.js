import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddMessage from './AddMessage';

class ChatWindow extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    const {user, messages} = this.props
    return (
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>

            <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === user.username
                      ? 'message sender'
                      : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>

            <AddMessage onAddMessage={this.props.onAddMessage} user={user.username}/>
          </div>
    )
  }
}

ChatWindow.propTypes = {
    onAddMessage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired
}

export default ChatWindow
