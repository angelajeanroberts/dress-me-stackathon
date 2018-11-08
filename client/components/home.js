import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {me} from '../store'

class LandingPage extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props
    return isLoggedIn ? (
      <div>
        <Link to="/post">
          <button type="button">Post A Request</button>
        </Link>
        <Link to="/inquiries">
          <button type="button">Search Open Requests</button>
        </Link>
      </div>
    ) : (
      <div>
        <h2>Log in or sign up to enter.</h2>
        <Link to="/login">
          <button type="button">Log In</button>
        </Link>
        <Link to="/signup">
          <button type="button">Sign Up</button>
        </Link>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(LandingPage)
