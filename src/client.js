import React from 'react'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import {createBrowserHistory as createHistory} from 'history'
import {loadInitial} from 'react-broker'
import App from './index'


const
  history = createHistory(),
  root = document.getElementById('⚛️'),
  hydrate = App => ReactDOM.hydrate(<Router history={history} children={<App/>}/>, root)

if (__DEV__)
  module.hot && module.hot.accept('./index', () => hydrate(require('./index').default))

loadInitial().then(() => hydrate(App))
