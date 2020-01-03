import React from 'react'
import styled from 'styled-components'

export const WrapperFlex = styled.div`
  display: flex;
  flex-flow: ${props => props.flow || 'row nowrap'};
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex: ${props => props.flex || '0 1 auto'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.max_width || 'none'};
  max-height: ${props => props.max_height || 'none'};
  padding: ${props => props.padding || 'none'};
  margin: ${props => props.margin || 'none'};
  box-sizing: border-box;
`

export const Filler = styled.div`
  flex: ${props => props.flex || '0 1 auto'};
  width: 100%;
  height: 100%;
`

export const StyledArrowButton = styled.button`
  border: none;
  background-color: Transparent;
  color: white;
  font-size: 1em;
`
export const NavDot = styled.div`
  height: 0.3em;
  width: 0.3em;
  border-radius: 0.2em;
  background-color: white;
  margin: 0 0.25em;
`

export const Section = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  max-width: 50em;
  margin: auto;
  padding: 3em 0 0 0;
`

export const Header = styled.h1`
  color: white;
  font-size: 1.5em;
  margin: 1em 0;
`

export const SubHeader = styled(Header)`
  font-size: 0.75em;
`

export const NavIndicator = (props) => {
  return (
    <WrapperFlex>
      <NavDot />
      <NavDot />
      <NavDot />
      <NavDot />
    </WrapperFlex>
      )
}

// TODO move the self alignment elsewhere, extend this component for more specific
// customization
export const StyledButton = styled.button`
  align-self: center;
  border: 0px none;
  border-radius: 3em;
  background-color: white;
  padding: 0.75em 1em;
  font-weight: bold;
  min-width: 10em;
`

export const StyledToken = styled(StyledButton.withComponent('p'))`
  font-size: 0.75em;
  margin: 0 0.5em 0.3em 0;
  min-width: 5em;
  text-align: center;
`

export const StyledDivider = styled.div`
  align-self: center;
  height: 0.1em;
  background: white;
  width: calc(100% - 2.5em);
  border-radius: 1em;
  margin: 0.5em 0
`
