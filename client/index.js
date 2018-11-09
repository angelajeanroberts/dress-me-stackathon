import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import { Web3Provider } from 'react-web3'

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <Web3Provider>
      <App />
      </Web3Provider>
    </Router>
  </Provider>,
  document.getElementById('app')
)
