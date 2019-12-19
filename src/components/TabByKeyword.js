import React from 'react'

class TabByKeyword extends React.Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
      isRegex: false,
      matchTypes: [],
      includeComments: false,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO
  }

  render() {
    return (
      <div>
        <h1>Enter keywords</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeHolder='keyword'
            value={this.state.keyword}
            onChange={e => this.setState({keyword: e.target.value})}>
          </input>

          <h3>Match in</h3>
          <input type='checkbox' id='match-type-title' name='match-type' value='Title' />
          <label htmlFor='match-type-title'>Title</label>
          <input type='checkbox' id='match-type-body' name='match-type' value='Body' />
          <label htmlFor='match-type-body'>Title</label>
          <input type='checkbox' id='match-type-flair' name='match-type' value='Flair' />
          <label htmlFor='match-type-flair'>Title</label>

          <input type='checkbox' id='match-type-flair' name='match-type' value='Flair' />
          <label htmlFor='match-type-flair'>Include matching comments</label>

          <input type='submit' value='OK' />
        </form>
      </div>
    );
  }
}

export default TabByKeyword
