import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchUpdatedReply,
  fetchUpdatedInquiry,
  fetchNewTransaction
} from '../store'
import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
// const abi = JSON.parse('[{}] -- from the compiled json file')

class AcceptReply extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      tip: 100
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: +event.target.value * 100
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const replyUpdates = {
      tip: this.state.tip,
      status: 'Accepted'
    }
    const inquiryUpdates = {
      status: 'Closed'
    }
    const debitTransaction = {
        type: 'Debit',
        amount: this.state.tip,
        description: 'Tip for fulfilling request',
        replyId: this.props.reply.id,
        inquiryId: this.props.reply.inquiryId,
        userId: this.props.reply.userId
    }
    const creditTransaction = {
        type: 'Credit',
        amount: this.state.tip,
        description: 'Tip for fulfilling request',
        replyId: this.props.reply.id,
        inquiryId: this.props.reply.inquiryId,
        userId: this.props.reply.inquiry.userId
    }
    this.props.updateReply(this.props.reply.id, replyUpdates)
    this.props.updateInquiry(this.props.reply.inquiryId, inquiryUpdates)
    this.props.fetchNewTransaction(debitTransaction)
    this.props.fetchNewTransaction(creditTransaction)
  }

  render() {
    console.log('web3', this.context)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="tip">Tip Amount:</label>
          <input
            type="number"
            name="tip"
            min="0"
            value={this.state.tip / 100}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateReply: (replyId, updates) =>
      dispatch(fetchUpdatedReply(replyId, updates)),
    updateInquiry: (requestId, updates) =>
      dispatch(fetchUpdatedInquiry(requestId, updates)),
    fetchNewTransaction: transaction =>
      dispatch(fetchNewTransaction(transaction))
  }
}
export default connect(null, mapDispatchToProps)(AcceptReply)
