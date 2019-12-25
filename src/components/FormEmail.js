import React from 'react'
import { connect } from 'react-redux'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import { Section } from '../styles/styledComponents'

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
        <h1>Enter your email</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.email}
            onChange={e => this.setState({emailConfirm: e.target.value})}
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            required />

          <input type='text'
            value={this.state.emailConfirm}
            onChange={e => this.setState({email: e.target.value})}
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            required />

          <button onClick={e => this.props.switchPage(FormPage.SUBMITTED)}>Next</button>
        </form>
      </Section>
    )
  }
}

export default connect(null, {
  switchPage,
})(FormEmail)
