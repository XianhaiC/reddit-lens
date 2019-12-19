import React from 'react'

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
// TODO validate using this
import { isPossiblePhoneNumber } from 'react-phone-number-input'

class FormSMS extends React.Component {
  constructor() {
    super()
    this.state = {
      number: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    // TODO validate number
  }

  render() {
    return (
      <div>
        <h1>Enter your phone number</h1>
        <form onSubmit={this.handleSubmit}>
          <PhoneInput
            placeholder="Enter phone number"
            value={ this.state.number }
            onChange={value => this.setState({ value })} />
          <input type='submit' value='OK' />
        </form>
      </div>
    )
  }
}

export default FormSMS;
