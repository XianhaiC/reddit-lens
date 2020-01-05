import React from 'react';
import { connect } from 'react-redux'

import { switchPage } from '../actions/index'
import { WrapperFlex, NavIndicator, StyledArrowButton, Filler } from '../styles/styledComponents'

// TODO highlight the current page
const _Nav = ({switchPage, prevPage, nextPage, curPage}) => (
  <WrapperFlex direction='column' justify='flex-end' flex='1 1 0'
    width='100%' max_width='30em'
  >
    <WrapperFlex justify='space-between' align='center'
      margin='2em 0'
    >

      <WrapperFlex flex='1 1 0' justify='center'>
        <StyledArrowButton onClick={e => switchPage(prevPage)}>
          <i class='fas fa-chevron-left'></i>
        </StyledArrowButton>
      </WrapperFlex>
      <NavIndicator curPage={curPage} />
      <WrapperFlex flex='1 1 0' justify='center'>
        <StyledArrowButton onClick={e => switchPage(nextPage)}>
          <i class='fas fa-chevron-right'></i>
        </StyledArrowButton>
      </WrapperFlex>

    </WrapperFlex>
  </WrapperFlex>
)

export const Nav = connect(null, {
  switchPage,
})(_Nav)
