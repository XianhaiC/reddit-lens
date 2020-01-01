import React from 'react';

import { WrapperFlex, NavIndicator, StyledArrowButton, Filler } from '../styles/styledComponents'

// TODO highlight the current page
export const Nav = ({onClick, curPage}) => (
  <WrapperFlex direction='column' justify='flex-end' flex='1 1 0'
    width='100%' max_width='30em'
  >
    <WrapperFlex justify='space-between' align='center'
      margin='2em 0'
    >

      <Filler flex='1 1 0' />
      <NavIndicator curPage={curPage} />
      <WrapperFlex flex='1 1 0' justify='center'>
        <StyledArrowButton onClick={onClick}>
          <i class='fas fa-chevron-right'></i>
        </StyledArrowButton>
      </WrapperFlex>

    </WrapperFlex>
  </WrapperFlex>
)
