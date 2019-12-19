export const switchPage = (page) => {
  return {
    type: 'SWITCH_PAGE',
    payload: { page },
  }
}
