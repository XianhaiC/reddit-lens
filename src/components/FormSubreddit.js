import React from 'react'
import { connect } from 'react-redux'
import styled, { keyframes, css } from 'styled-components'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import { Section, Header, WrapperFlex, NavIndicator, StyledButton, Filler } from '../styles/styledComponents'
import { InputPrefixed } from './Input'
import { Nav } from './Nav'

class FormSubreddit extends React.Component {
  constructor() {
    super()
    this.state = {
      subreddit: '',
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput = (e) => {
    if (e.target.value.indexOf(' ') > -1) return
    this.setState({subreddit: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // TODO: validate subreddit
    // no spaces
    // to lower
    // verify existence
    // store result
    // switch page if valid
    this.props.switchPage(FormPage.FILTERS)
  }

  render() {
    return (
      <Section>
        <WrapperFlex direction='column' align='center' flex='1 1 0'
        >
          <Header>Filter a Subreddit</Header>
          <form onSubmit={this.handleSubmit}>
            <InputPrefixed
              onChange={this.handleInput}
              value={this.state.subreddit}
              placeholder='buildapcsales'></InputPrefixed>
          </form>
        </WrapperFlex>
        <Nav prevPage={FormPage.SUBREDDIT} nextPage={FormPage.FILTERS} />
      </Section>
        )
  }
}

export default connect(null, {
  switchPage,
})(FormSubreddit)
