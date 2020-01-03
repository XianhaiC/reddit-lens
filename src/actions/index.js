export const switchPage = (page) => {
  return {
    type: 'SWITCH_PAGE',
    payload: { page },
  }
}

export const addToken = (token) => {
  return {
    type: 'ADD_TOKEN',
    payload: { token },
  }
}
