import React from 'react'
import { connect } from 'react-redux'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import { Section } from '../styles/styledComponents'
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
      <Section>
        <h1>Enter your phone number</h1>
        <form onSubmit={this.handleSubmit}>
          <PhoneInput
            placeholder="Enter phone number"
            value={ this.state.number }
            onChange={value => this.setState({ value })} />
          <button onClick={e => this.props.switchPage(FormPage.SUBMITTED)}>Next</button>
        </form>
      </Section>
    )
  }
}

export default connect(null, {
  switchPage,
})(FormSMS)
