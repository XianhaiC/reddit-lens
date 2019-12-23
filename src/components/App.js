import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import FormSubreddit from './FormSubreddit'
import FormFilters from './FormFilters'
import FormContact from './FormContact'
import FormSMS from './FormSMS'
import FormEmail from './FormEmail'
import FormUsername from './FormUsername'
import FormSubmitted from './FormSubmitted'

import { FormPage } from '../constants'

// TODO: understand this
const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  pointer-events: auto;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
`

class App extends React.Component {
  render() {
    var visiblePage = null;

    switch (this.props.page) {
      case FormPage.SUBREDDIT:
        visiblePage = <FormSubreddit />
        break;

      case FormPage.FILTERS:
        visiblePage = <FormFilters />
        break;

      case FormPage.CONTACT:
        visiblePage = <FormContact />
        break;

      case FormPage.EMAIL:
        visiblePage = <FormEmail />
        break;

      case FormPage.SMS:
        visiblePage = <FormSMS />
        break;

      case FormPage.USERNAME:
        visiblePage = <FormUsername />
        break;

      case FormPage.SUBMITTED:
        visiblePage = <FormSubmitted />
        break;
    }

    console.log("STATE " + this.props.page)

    return (
      <Container>
        {visiblePage}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    page: state.form.page,
  }
}

export default connect(mapStateToProps)(App)
