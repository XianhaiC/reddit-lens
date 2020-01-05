import React from 'react'
import styled from 'styled-components'

import { WrapperFlex } from '../styles/styledComponents'
import { Check } from '../styles/icons'

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 0px none;
  border-radius: 3em;
  background-color: white;
  padding: 0em 1.3em;
  margin: 0 0 0.5em 0;
`

const StyledInput = styled.input`
  box-sizing: border-box;
  border: 0px none;
  background-color: white;
  height: 2.5em;
  color: inherit;
  font-weight: bold;
`

const StyledPrefix = styled.div`
  margin-right: 0.5em;
  font-weight: bold;
`


  /*
const StyledLabel = styled.label`
  color: white;
  font-size: 0.75em;
  
`
*/

export default ({onChange, value, placeholder}) => {
  return (
    <StyledWrapper>
      <StyledInput onChange={onChange} placeholder={placeholder}
        value={value}></StyledInput>
    </StyledWrapper>
      )
}

export const InputPrefixed = ({onChange, value, placeholder}) => {
  return (
    <StyledWrapper>
      <StyledPrefix>r/</StyledPrefix>
      <StyledInput onChange={onChange} placeholder={placeholder}
        value={value}></StyledInput>
    </StyledWrapper>
      )
}
