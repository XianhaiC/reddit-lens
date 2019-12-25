import React from 'react'
import { connect } from 'react-redux'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import { Section } from '../styles/styledComponents'

class FormContact extends React.Component {
  render() {
    return (
      <Section>
        <h1>How should we notfiy you?</h1>
        <button onClick={e => this.props.switchPage(FormPage.EMAIL)}>Email</button>
        <button onClick={e => this.props.switchPage(FormPage.SMS)}>SMS</button>
        <button onClick={e => this.props.switchPage(FormPage.USERNAME)}>Reddit PM</button>
      </Section>
    )
  }
}

export default connect(null, {
  switchPage,
})(FormContact)
