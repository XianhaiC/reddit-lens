import React from 'react'
import { connect } from 'react-redux'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import { Section, Header, FlexForm } from '../styles/styledComponents'
import { Nav } from './Nav'
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
        <Header>Enter your phone number</Header>
        <FlexForm onSubmit={this.handleSubmit}>
          <PhoneInput
            placeholder="Enter phone number"
            value={ this.state.number }
            onChange={value => this.setState({ value })}
          />
        </FlexForm>
        <Nav prevPage={FormPage.CONTACT} nextPage={FormPage.SUBMITTED} />
      </Section>
    )
  }
}

export default connect(null, {
  switchPage,
})(FormSMS)
