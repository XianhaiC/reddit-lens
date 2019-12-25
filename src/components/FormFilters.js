import React from 'react'
import { connect } from 'react-redux'

import TabByKeyword from './TabByKeyword'
import TabByUser from './TabByUser'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'
import { Section, Header, WrapperFlex } from '../styles/styledComponents'

class FormFilters extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tabByKeyword: true }
  }

  render() {
    return (
      <Section>
        {this.state.tabByKeyword ? <TabByKeyword /> : <TabByUser />}
        <button onClick={e => this.props.switchPage(FormPage.CONTACT)}>Next</button>
      </Section>
    )
  }
}

const mapStateToProps = state => { return {} }

export default connect(mapStateToProps, {
  switchPage,
})(FormFilters)
