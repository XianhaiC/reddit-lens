import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import { Section, Header, WrapperFlex, FlexForm } from '../styles/styledComponents'
import { Nav } from './Nav'
import Input from './Input'


class FormEmail extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      emailConfirm: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    // TODO validate emails are correct
  }

  render() {
    return (
      <Section>
        <Header>Enter your email</Header>

        <FlexForm onSubmit={this.handleSubmit}>
          <Input
            placeholder='Email'
            value={this.state.keyword}
            onChange={e => this.setState({email: e.target.value})}
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            maxLength='50'
            required
          />
          <Input
            placeholder='Confirm Email'
            value={this.state.keyword}
            onChange={e => this.setState({emailConfirm: e.target.value})}
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
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
})(FormEmail)
