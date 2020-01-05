import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import { Section, Header, StyledButton, WrapperFlex } from '../styles/styledComponents'
import { Nav } from './Nav'

const StyledRadioButton = styled(StyledButton)`
  background: ${props => props.checked ? 'none' : 'white' };
  border: ${props => props.checked ? '0.25em solid white' : 'none'}
  color: ${props => props.checked ? 'white' : 'inherit'}
`

class FormContact extends React.Component {
  constructor() {
    super()
    this.state = { contactType: null }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.switchPage(this.state.contactType)
  }

  handleCheck(type) {
    this.setState({ contactType: type })
  }

  render() {
    return (
      <Section>
        <WrapperFlex direction='column' align='center' flex='1 1 0'
        >
          <Header>How do you want to be notified?</Header>
          <StyledRadioButton checked={this.state.contactType == FormPage.EMAIL}
            onClick={e => this.handleCheck(FormPage.EMAIL)}
          >
            Email
          </StyledRadioButton>
          <StyledRadioButton checked={this.state.contactType == FormPage.SMS}
            onClick={e => this.handleCheck(FormPage.SMS)}
          >
            SMS
          </StyledRadioButton>
          <StyledRadioButton checked={this.state.contactType == FormPage.USERNAME}
            onClick={e => this.handleCheck(FormPage.USERNAME)}
          >
            Reddit
          </StyledRadioButton>
        </WrapperFlex>
        <Nav prevPage={FormPage.FILTERS} nextPage={this.state.contactType} />
      </Section>
    )
  }
}

export default connect(null, {
  switchPage,
})(FormContact)
