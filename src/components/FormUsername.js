import React from 'react'
import { connect } from 'react-redux'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import Section from '../styles/Section'

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
        <h1>Enter your Reddit username</h1>
        <form>
          <input type='text'
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
            required />

          <button onClick={e => this.props.switchPage(FormPage.SUBMITTED)}>Next</button>
        </form>
      </Section>
    )
  }
}

export default connect(null, {
  switchPage,
})(FormUsername)
