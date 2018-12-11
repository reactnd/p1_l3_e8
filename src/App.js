import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './components/ChatWindow'


/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/


class App extends Component {

  state = {
    messages: [
    { username: 'Amy', text: 'Hi, Jon!' },
    { username: 'Amy', text: 'How are you?' },
    { username: 'John', text: 'Hi, Amy! Good, you?' }
  ],
    users: [{ username: 'Amy' }, { username: 'John' }]
  }

  onAddMessage = newMessage => {
    this.setState( { messages: [...this.state.messages, newMessage] })}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <div className="container">
        {this.state.users.map((user,index) => (
          <ChatWindow key={user.username} user={user} messages={this.state.messages} onAddMessage={this.onAddMessage} />
      ))}
          
          </div>
        </div>
    );
  }
}

export default App;
