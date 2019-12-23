import React from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import Section from '../styles/Section'

// styled components -----

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0,.5em,0);
  }
`

export const Title = styled.h1`
  color: grey;
  font-size: 2em;
  animation: ${FadeIn} 1s ease backwards;
`

class FormSubreddit extends React.Component {
  constructor() {
    super()
    this.state = {
      subreddit: '',
    }
  }
  render() {
    return (
      <Section>
        <Title>Filter a Subreddit</Title>

        <form>
          <input
            placeholder='buildapcsales'
            value={this.state.subreddit}
            onChange={e => this.setState({subreddit: e.target.value})} />
          <button onClick={this.handleSubmit}>OK</button>
        </form>

        <button onClick={e => this.props.switchPage(FormPage.FILTERS)}>Next</button>
      </Section>
        )
  }
}

export default connect(null, {
  switchPage,
})(FormSubreddit)
