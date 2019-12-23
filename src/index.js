import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

import theme from './styles/theme'
import GlobalStyles from './styles/globalStyles'

import reducers from './reducers'

export const store = createStore(reducers)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
