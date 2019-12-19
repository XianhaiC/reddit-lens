import { combineReducers } from 'redux'

import { FormPage } from '../constants'

const INIT_STATE_FORM = {
  page: FormPage.SUBREDDIT,
}

const formReducer = (state = INIT_STATE_FORM, action) => {
  switch (action.type) {
    case 'SWITCH_PAGE':
      return {...state,
        page: action.payload.page,
      }
    default:
      return state
  }
}

export default combineReducers({
  form: formReducer,
})
