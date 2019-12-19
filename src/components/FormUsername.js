import React from 'react'

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
      <div>
        <h1>Enter your Reddit username</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
            required />

          <input type='submit' value='OK' />
        </form>
      </div>
    )
  }
}

export default FormUsername;
