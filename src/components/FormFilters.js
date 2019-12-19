import React from 'react'

import TabByKeyword from './TabByKeyword'
import TabByUser from './TabByUser'

import { FormPage } from '../constants'
import { switchPage } from '../actions/index'

class FormFilters extends React.Component {
  render() {
    return (
      <div>
        <TabByKeyword />
        <TabByUser />
        <button onClick={e => this.props.switchPage(FormPage.CONTACT)}>Next</button>
      </div>
    )
  }
}

const mapStateToProps = state => { return {} }

export default connect(mapStateToProps, {
  switchPage,
})(FormFilters)
