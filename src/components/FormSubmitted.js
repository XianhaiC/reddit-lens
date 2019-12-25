import React from 'react'
import { connect } from 'react-redux'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import { Section, Header } from '../styles/styledComponents'

class FormSubmitted extends React.Component {
  render() {
    return (
      <Section>
        <Header>Notification created! Create another?</Header>
      </Section>
    )
  }
}

export default connect(null, {
  switchPage,
})(FormSubmitted)
