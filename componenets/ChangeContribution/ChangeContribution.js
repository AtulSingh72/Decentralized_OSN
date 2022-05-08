import React, { Component } from 'react'
import Backdrop from '../Overlay/Backdrop/Backdrop'
import Modal from '../Overlay/Modal/Modal'
import PostFactory from '../../ethereum/factory'
import { web3, metamask_provider } from '../../ethereum/web3'
import MetamaskCard from '../MetamaskCard/MetamaskCard'

let accounts = []

class ChangeContribution extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min_contribution: web3.utils.fromWei(props.min_contribution, 'ether'),
      change_contrib: props.min_contribution,
      metamask: true,
    }
  }
  changeContrib = async (event) => {
    event.preventDefault()
    let new_value = this.state.change_contrib
    accounts = await web3.eth.getAccounts()
    if (metamask_provider == false || accounts.length == 0) {
      this.setState({ metamask: false })
    } else {
      await PostFactory.methods
        .setMinContribution(web3.utils.toWei(new_value))
        .send({
          from: accounts[0],
        })
      this.setState({ min_contribution: new_value })
    }
  }
  inputValue = (event) => {
    event.preventDefault()
    this.setState({ change_contrib: event.target.value })
  }
  render() {
    return (
      <div>
        {this.state.metamask == false && (
          <MetamaskCard takeback={this.props.takeback} />
        )}
        {this.state.metamask == true && (
          <Backdrop takeback={this.props.takeback}>
            <Modal>
              <h2>Change Minimum Contribution Amount</h2>
              <span style={{ fontFamily: 'Roboto Mono', fontSize: '80px' }}>
                {this.state.min_contribution}
              </span>
              <span style={{ fontFamily: 'Roboto Mono' }}> ETH</span>
              <br />
              <input
                type="number"
                className="form-control"
                style={{
                  width: '70%',
                  margin: '40px auto',
                  textAlign: 'center',
                  fontSize: '20px',
                }}
                placeholder="Enter the new Amount"
                onChange={this.inputValue}
              ></input>
              <button
                className="btn btn-primary btn-lg"
                style={{ width: '30%', padding: '10px' }}
                onClick={this.changeContrib}
              >
                <i className="fa fa-check" style={{ padding: '0px 20px' }}></i>{' '}
                Update
              </button>
            </Modal>
          </Backdrop>
        )}
      </div>
    )
  }
}

export default ChangeContribution
