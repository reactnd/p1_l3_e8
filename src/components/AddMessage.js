import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddMessage extends Component {

  state = {
      message: ''
  }
    /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
 isDisabled = () => {
    if (this.state.message === '') {
        return true
    } else return false
  };

  handleOnChange = event => {
      const value = event.target.value
      const name = event.target.name
      this.setState({ [name]: value })
    }


   handleSubmit = event => {
    event.preventDefault()
       const  { user } = this.props
       const newMessage = { 
        username: user,
        text: this.state.message
       }
       this.props.onAddMessage(newMessage)
    }


  render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit} className="input-group">
          <input
          name="message"
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            onChange={this.handleOnChange}
            />
          <div className="input-group-append">
            <button
                className="btn submit-button"
                disabled={this.isDisabled()}
                
                >
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

AddMessage.propTypes = {
    onAddMessage: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired,
}

export default AddMessage
