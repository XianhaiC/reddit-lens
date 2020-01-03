import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addToken } from '../actions/index'
import { Header, SubHeader, WrapperFlex, StyledButton, StyledToken,
  StyledDivider } from '../styles/styledComponents'
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

class TabByKeyword extends React.Component {
  constructor() {
    super()

    this.state = {
      keyword: '',
      useRegex: false,
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

    const input = this.state.keyword.trim()
    if (input == '' || input.length > 30) return

    const newToken = { ...this.state }
    this.props.addToken(newToken)
    this.setState({ keyword: '' })
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
      case "use-regex":
        this.setState({ useRegex: !this.state.useRegex })
        break
      case "include-comments":
        this.setState({ includeComments: !this.state.includeComments })
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
          <WrapperFlex align-items='flex-end'>
            <Input
              placeHolder='keyword'
              value={this.state.keyword}
              onChange={e => this.setState({keyword: e.target.value})}
            />
            <CheckboxItem id='use-regex' labelText='Use regex'
              checked={this.state.useRegex} onChange={this.handleCheck}
            />
          </WrapperFlex>

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

          <WrapperFlex wrap='wrap' justify='center' max_width='30em'
            margin='3em 0 0 0'
          >
            {
              this.props.keywordTokens.map(token => {
                return <StyledToken>{token.keyword}</StyledToken>
              })
            }
          </WrapperFlex>

        </WrapperFlex>
      </WrapperFlex>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keywordTokens: state.form.keywordTokens,
  }
}

export default connect(mapStateToProps, {
  addToken,
})(TabByKeyword)
