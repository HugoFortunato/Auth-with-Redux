import React, { Fragment } from 'react'
import Routes from './routes'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'

import store from './store'

import GlobalStyle from './styles/global'

const App = () => {
  return (
    <>
  <Provider store={store}>
      <Routes />
      <ReduxToastr />
      <GlobalStyle />
  </Provider>
    </>
  );
}

export default App;
