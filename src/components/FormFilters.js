import React from 'react'

import TabByKeyword from './TabByKeyword'
import TabByUser from './TabByUser'

class FormFilters extends React.Component {
  render() {
    return (
      <div>
        <TabByKeyword />
        <TabByUser />
      </div>
    )
  }
}

export default FormFilters
