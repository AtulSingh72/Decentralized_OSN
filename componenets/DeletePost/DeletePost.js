import React, { Component } from 'react'
import Backdrop from '../Overlay/Backdrop/Backdrop'
import Modal from '../Overlay/Modal/Modal'

class DeletePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
        
    }
  }
  render() {
    return (
      <Backdrop takeback={this.props.takeback}>
        <Modal>
          <h2>Delete a Post</h2>
          <input
            type="number"
            className="form-control"
            style={{
              width: '70%',
              margin: '40px auto',
              textAlign: 'center',
              fontSize: '20px',
            }}
            placeholder="Enter the URL of the Post"
            onChange={this.inputValue}
          ></input>
        </Modal>
      </Backdrop>
    )
  }
}

export default DeletePost
