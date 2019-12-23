import React from 'react'
import { connect } from 'react-redux'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import Section from '../styles/Section'
// TODO move Title to its own file
import { Title } from './FormSubreddit'

class FormSubmitted extends React.Component {
  render() {
    return (
      <Section>
        <Title>How should we notfiy you?</Title>
      </Section>
    )
  }
}

export default connect(null, {
  switchPage,
})(FormSubmitted)
