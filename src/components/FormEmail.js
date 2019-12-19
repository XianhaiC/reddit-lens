import React from 'react'

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
      <div>
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

          <input type='submit' value='OK' />
        </form>
      </div>
    )
  }
}

export default FormEmail;
