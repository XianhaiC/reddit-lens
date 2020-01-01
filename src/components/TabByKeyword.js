import React from 'react'
import styled from 'styled-components'

import { Header, SubHeader, WrapperFlex, StyledButton, StyledDivider } from '../styles/styledComponents'
import { Check, CheckBold } from '../styles/icons'
import Input from './Input'

const StyledCheckbox = styled.div`
  height: .60em;
  width: .60em;
  border-radius: .1em;
  border: 0.15em solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: relative;
    height: .9em;
    width: .9em;
    border-radius: .2em;
    background: white;
    transition: transform .25s ease;
    transform: ${props => props.checked ? 'scale(1)' : 'scale(0)'};
    flex-shrink: 0;
  }
`

const StyledSpan = styled.span`
  color: white;
  font-size: 0.75em;
  font-weight: bold;
`

const CheckboxItem = ({id, name, labelText, checked, onChange}) => {
  return (
    <WrapperFlex id={id} onClick={e => onChange(id)} 
      align='center'
      padding='0 0 0.5em 0'
      margin='0 0 0 1em'>
      <StyledCheckbox checked={checked}>
      </StyledCheckbox>
      <StyledSpan>{labelText}</StyledSpan>
    </WrapperFlex>
  )
}
  /*
const CheckboxItem = ({id, name, labelText, checked, onChange}) => {
  return (
    <WrapperFlex id={id} onClick={e => onChange(id)} 
      align='center'
      adding='0 0 0.5em 0'>
      <input type='checkbox' id={id} style='display: none;'/>
      <label for={id}>
        <span><svg><CheckBold /></svg></span>
        <span>{labelText}</span>
      </label>
    </WrapperFlex>
  )
}
*/

class TabByKeyword extends React.Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
      isRegex: false,
      matchTitle: false,
      matchBody: false,
      matchFlair: false,
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

  handleCheck(id) {
    //TODO

    console.log(id)
    switch (id) {
      case "match-type-title":
        this.setState({ matchTitle: !this.state.matchTitle })
        break
      case "match-type-body":
        this.setState({ matchBody: !this.state.matchBody })
        break
      case "match-type-flair":
        this.setState({ matchFlair: !this.state.matchFlair })
        break
      default:
        break
    }
  }

  render() {
    return (
      <WrapperFlex direction='column' align='center'>
        <Header>Enter keywords</Header>
        <WrapperFlex direction='column' align-items='flex-start' flex='1 1 0'
          width='100%' max_width='30em'
        >
          <Input
            placeHolder='keyword'
            value={this.state.keyword}
            onChange={e => this.setState({keyword: e.target.value})}>
          </Input>

          <SubHeader>Match in</SubHeader>

          <CheckboxItem id='match-type-title' name='match-type' labelText='Title'
            checked={this.state.matchTitle} onChange={this.handleCheck}
          />
          <CheckboxItem id='match-type-body' name='match-type' labelText='Body'
            checked={this.state.matchBody} onChange={this.handleCheck}
          />
          <CheckboxItem id='match-type-flair' name='match-type' labelText='Flair'
            checked={this.state.matchFlair} onChange={this.handleCheck}
          />

          <StyledDivider />

          <CheckboxItem id='include-comments' name='include-type' labelText='Include comments'
            checked={this.state.includeComments} onChange={this.handleCheck}
          />

          <StyledButton onClick={this.handleAdd}>
            Add
          </StyledButton>

        </WrapperFlex>
      </WrapperFlex>
    );
  }
}

export default TabByKeyword
