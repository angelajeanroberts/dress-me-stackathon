import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchNewInquiry} from '../store'

class InquiryForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      productType: '',
      occasion: '',
      minPrice: 1000,
      maxPrice: 100000,
      description: ''
    }
  }
  handleChange = event => {
    if (event.target.name === 'minPrice' || event.target.name === 'maxPrice') {
      this.setState({
        [event.target.name]: +event.target.value * 100
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.addNewInquiry(this.state)
    this.setState({
      title: '',
      productType: '',
      occasion: '',
      minPrice: 1000,
      maxPrice: 100000,
      description: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Request Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="productType">Item Type:</label>
          <input
            type="text"
            name="productType"
            value={this.state.productType}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="occasion">Occasion:</label>
          <input
            type="text"
            name="occasion"
            value={this.state.occasion}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            name="minPrice"
            min="1"
            value={this.state.minPrice/100}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            min="1"
            name="maxPrice"
            value={this.state.maxPrice/100}
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
    addNewInquiry: newInquiry => dispatch(fetchNewInquiry(newInquiry))
  }
}
export default connect(null, mapDispatchToProps)(InquiryForm)
