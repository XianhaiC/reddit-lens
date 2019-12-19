import React from 'react'
import { connect } from 'react-redux'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'

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
            placeholder='buildapcsales'
            value={this.state.subreddit}
            onChange={e => this.setState({subreddit: e.target.value})}>
          </input>
          <button onClick={this.handleSubmit}>OK</button>
        </form>

        <button onClick={e => this.props.switchPage(FormPage.FILTERS)}>Next</button>
      </div>
    )
  }
}

const mapStateToProps = state => { return {} }

export default connect(mapStateToProps, {
  switchPage,
})(FormSubreddit)
