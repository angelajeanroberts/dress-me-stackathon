import React from 'react'
import {connect} from 'react-redux'
import ScrollList from './scroll-list'

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedButton: 'inquiries'
    }
  }

  handleClick = event => {
    this.setState({
      selectedButton: event.target.value
    })
  }

  render() {
    const user = this.props.user
    const viewList =
      this.state.selectedButton === 'inquiries'
        ? this.props.inquiries
        : this.props.replies
    return !user.id ? (
      <div>Fetching Data</div>
    ) : (
      <div>
        <div>
          <h3>Welcome, {user.firstName}</h3>
        </div>
        <ScrollList type={this.state.selectedButton} list={viewList} />
        <div>
          <button type="button" onClick={this.handleClick} value="inquiries">
            Inquiries
          </button>
          <button type="button" onClick={this.handleClick} value="replies">
            Replies
          </button>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    inquiries: state.user.inquiries,
    replies: state.user.replies
  }
}

export default connect(mapState)(UserHome)
