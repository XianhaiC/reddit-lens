import React from 'react'

import { Header, SubHeader, WrapperFlex } from '../styles/styledComponents'
import Input, { CheckboxItem } from './Input'

class TabByKeyword extends React.Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
      isRegex: false,
      matchTypes: [],
      includeComments: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
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

  handleCheck(e) {
    //TODO
  }

  render() {
    return (
      <WrapperFlex direction='column' align='center'>
        <Header>Enter keywords</Header>
        <form onSubmit={this.handleSubmit}>
          <Input
            placeHolder='keyword'
            value={this.state.keyword}
            onChange={e => this.setState({keyword: e.target.value})}>
          </Input>

          <SubHeader>Match in</SubHeader>

          <CheckboxItem id='match-type-title' name='match-type' labelText='Title'
            checked={false} onChange={this.handleCheck}
          />
          <CheckboxItem id='match-type-body' name='match-type' labelText='Body'
            checked={false} onChange={this.handleCheck}
          />
          <CheckboxItem id='match-type-flair' name='match-type' labelText='Flair'
            checked={false} onChange={this.handleCheck}
          />

          <button onClick={this.handleAdd}>Add</button>
          <input type='submit' value='Next' />
        </form>
      </WrapperFlex>
    );
  }
}

export default TabByKeyword
