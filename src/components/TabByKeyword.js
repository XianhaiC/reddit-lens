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

  handleAdd(e) {
    // validate entered keyword
    // if regex, make sure it's valid
    // if not regex, save it
    // make sure its not empty
    //
    // grab the checked boxes
    // store the dict in an array
    // we will render the dicts as chips below
    // place the chips in a container to create the "grouping"
    // effect
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
          <label htmlFor='match-type-body'>Body</label>
          <input type='checkbox' id='match-type-flair' name='match-type' value='Flair' />
          <label htmlFor='match-type-flair'>Flair</label>

          <input type='checkbox' id='match-type-flair' name='match-type' value='Flair' />
          <label htmlFor='match-type-flair'>Include matching comments</label>

          <button onClick={this.handleAdd}>Add</button>
          <input type='submit' value='Next' />
        </form>
      </div>
    );
  }
}

export default TabByKeyword
