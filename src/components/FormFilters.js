import React from 'react'
import { connect } from 'react-redux'

import TabByKeyword from './TabByKeyword'
import TabByUser from './TabByUser'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import { Section, Header, WrapperFlex } from '../styles/styledComponents'

import { Nav } from './Nav'

class FormFilters extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tabByKeyword: true }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // TODO: validate filters
    this.props.switchPage(FormPage.CONTACT)
  }

  render() {
    return (
      <Section>
        {this.state.tabByKeyword ? <TabByKeyword /> : <TabByUser />}
        <Nav onClick={this.handleSubmit} />
      </Section>
    )
  }
}

export default connect(null, {
  switchPage,
})(FormFilters)
