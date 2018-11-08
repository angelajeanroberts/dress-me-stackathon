import React from 'react'
import {connect} from 'react-redux'
import {fetchSelectedReply} from '../store'
import {withRouter} from 'react-router'

class SingleReply extends React.Component {
  componentDidMount() {
    this.props.fetchSelectedReply(this.props.match.params.replyId)
  }

  render() {
    return (
      <div>
        <h1>Reply Details:</h1>
        {!this.props.reply.id ? (
          <div>Fetching data...</div>
        ) : (
          <div>
            <h3>{this.props.reply.title}</h3>
            <h4>{this.props.reply.description}</h4>
            <a href={this.props.reply.productUrl}>Link</a>
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    reply: state.reply.selectedReply
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSelectedReply: replyId => dispatch(fetchSelectedReply(replyId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleReply))
