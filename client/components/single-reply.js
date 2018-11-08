import React from 'react'
import {connect} from 'react-redux'
import {fetchSelectedReply, fetchDeletedReply, me} from '../store'
import {withRouter} from 'react-router'
import ReplyUpdate from './response-update'
import AcceptReply from './accept-response'

class SingleReply extends React.Component {
  constructor() {
    super()
    this.state = {
      updateForm: false,
      acceptForm: false
    }
  }

  handleClick = event => {
    event.target.value === 'accept'
      ? this.setState({
          acceptForm: this.state.acceptForm ? false : true
        })
      : event.target.value === 'update'
        ? this.setState({
            updateForm: this.state.updateForm ? false : true
          })
        : this.props.deleteReply(this.props.reply.id)
  }

  componentDidMount() {
    this.props.loadInitialData()
    this.props.fetchSelectedReply(this.props.match.params.replyId)
  }

  render() {
    console.log(this.props.reply)
    if (this.props.reply === null) {
      return (
        <div>
          <h1>This Response No Longer Exists</h1>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Response Details:</h1>
          {!this.props.reply.id ? (
            <div>Fetching data...</div>
          ) : (
            <div>
              <div>
                <h3>{this.props.reply.title}</h3>
                <h4>{this.props.reply.description}</h4>
                <a href={this.props.reply.productUrl}>Link</a>
              </div>
              {this.props.reply.inquiry.userId === this.props.userId &&
              this.props.reply.inquiry.status === 'Open' ? (
                <div>
                  <button
                    type="button"
                    value="accept"
                    onClick={this.handleClick}
                  >
                    Accept Response
                  </button>
                  {this.state.acceptForm ? (
                    <AcceptReply reply={this.props.reply} />
                  ) : null}
                </div>
              ) : null}
              {this.props.reply.userId === this.props.userId ? (
                <div>
                  <button
                    type="button"
                    value="update"
                    onClick={this.handleClick}
                  >
                    Update Response
                  </button>
                  <button
                    type="button"
                    value="delete"
                    onClick={this.handleClick}
                  >
                    Delete Response
                  </button>
                  {this.state.updateForm ? (
                    <ReplyUpdate reply={this.props.reply} />
                  ) : null}
                </div>
              ) : null}
            </div>
          )}
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    reply: state.reply.selectedReply,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSelectedReply: replyId => dispatch(fetchSelectedReply(replyId)),
    deleteReply: replyId => dispatch(fetchDeletedReply(replyId)),
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleReply))
