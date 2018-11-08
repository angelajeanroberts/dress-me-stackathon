import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchNewReply} from '../store'

class ReplyForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      productUrl: '',
      imageUrl: '',
      description: '',
      userId: '',
      inquiryId: ''
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.addNewReply(this.state)
    this.setState({
      title: '',
      productUrl: '',
      imageUrl: '',
      description: '',
      userId: this.props.userId,
      inquiryId: this.props.inquiryId
    })
  }

  componentDidMount() {
      this.setState({
          userId: this.props.userId,
          inquiryId: this.props.inquiryId
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Respone Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="productUrl">Link to Product:</label>
          <input
            type="text"
            name="productUrl"
            value={this.state.productUrl}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image Link:</label>
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
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
    addNewReply: newReply => dispatch(fetchNewReply(newReply))
  }
}
export default connect(null, mapDispatchToProps)(ReplyForm)
