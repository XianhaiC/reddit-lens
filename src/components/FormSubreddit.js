import React from 'react'

class FormSubreddit extends React.Component {
  constructor() {
    super()
    this.state = {
      subreddit: '',
    }
  }
  render() {
    return (
      <div className="form-subreddit">
      <h1>Filter a Subreddit</h1>
        <form>
          <input
            placeHolder='buildapcsales'
            value={this.state.subreddit}
            onChange={e => this.setState({subreddit: e.target.value})}>
          </input>
          <button onClick={this.handleSubmit}>OK</button>
        </form>

      </div>

    )
  }
}

export default FormSubreddit
