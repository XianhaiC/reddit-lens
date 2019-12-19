import React from 'react'
import { connect } from 'react-redux'

import FormSubreddit from './FormSubreddit'
import FormFilters from './FormFilters'
import FormContact from './FormContact'
import FormSMS from './FormSMS'
import FormEmail from './FormEmail'
import FormUsername from './FormUsername'

import { FormPage } from '../constants'

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
    }

    console.log("STATE " + this.props.page)

    return (
      <div className="App">
        {visiblePage}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    page: state.form.page,
  }
}

export default connect(mapStateToProps)(App)
