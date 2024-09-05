import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      requestResult: 'Pending'
    }
    this.timer1 = null
    this.timer2 = null
  }

  componentDidMount() {
    this.timer1 = setTimeout(() => {
      this.setState({ requestResult: 'Finished' })
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.requestResult !== prevState.requestResult) {
      this.timer2 = setTimeout(() => {
        this.setState({ value: 'Ready!' })
      }, 1000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer1)
    clearTimeout(this.timer2)
  }

  handleSubmit = (event) => {
    // validation
    alert('Form submitted with value: ' + this.state.value)
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.requestResult}</h1>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form