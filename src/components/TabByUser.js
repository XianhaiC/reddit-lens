import React from 'react'

class TabByUser extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      includePosts: false,
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
        <h1>Enter username</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeHolder='usrname'
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}>
          </input>

          <input type='checkbox' id='include-posts' name='include-type'/>
          <label htmlFor='include-posts'>Include posts</label>
          <input type='checkbox' id='include-comments' name='include-type'/>
          <label htmlFor='include-comments'>Include comments</label>

          <input type='submit' value='OK' />
        </form>
      </div>
    );
  }
}

export default TabByUser
