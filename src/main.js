import React from 'react'
import { render } from 'react-dom'
import '../node_modules/bulma/css/bulma.css'
import App from './App'

render(
  <App targetDay={5} targetHour={17} targetMinute={0} />,
  document.getElementById('app')
)
