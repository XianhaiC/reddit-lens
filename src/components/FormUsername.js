import React from 'react'
import { connect } from 'react-redux'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import { Section, Header, WrapperFlex, FlexForm } from '../styles/styledComponents'
import { Nav } from './Nav'
import Input from './Input'

class FormUsername extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    // TODO: validate username
  }

  render() {
    return (
      <Section>
        <Header>Enter your Reddit username</Header>

        <FlexForm onSubmit={this.handleSubmit}>
          <Input
            placeholder='Username'
            value={this.state.keyword}
            onChange={e => this.setState({email: e.target.value})}
            maxLength='50'
            required
          />
        </FlexForm>

        <Nav prevPage={FormPage.CONTACT} nextPage={FormPage.SUBMITTED} />
      </Section>
    )
  }
}

export default connect(null, {
  switchPage,
})(FormUsername)
