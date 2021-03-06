import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import Root from 'views/Root'

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./views/Root', () => {
    const Root = require('./views/Root')
    render(
      <AppContainer>
        <Root />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
