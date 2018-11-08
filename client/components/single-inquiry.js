import React from 'react'
import {connect} from 'react-redux'
import {fetchSelectedInquiry} from '../store'
import {withRouter} from 'react-router'

class SingleInquiry extends React.Component {
  componentDidMount() {
    this.props.fetchSelectedInquiry(this.props.match.params.inquiryId)
  }

  render() {
    return (
      <div>
        <h1>Inquiry Details:</h1>
        {!this.props.inquiry.id ? (
          <div>Fetching data...</div>
        ) : (
          <div>
            <h3>{this.props.inquiry.title}</h3>
            <h4>{this.props.inquiry.description}</h4>
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    inquiry: state.inquiry.selectedInquiry
  }
}

const mapDispatch = dispatch => {
  return {
    fetchSelectedInquiry: inquiryId => dispatch(fetchSelectedInquiry(inquiryId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleInquiry))
