import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'

const MOUNT_NODE = document.getElementById('root');

let render = () => {
  const routes = require('./routes/index');

  ReactDOM.render(
    <AppContainer routes={routes} />,
    MOUNT_NODE
  );
}

if (__DEV__) {
  if (module.hot) {
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(
        <RedBox error={error} />,
        MOUNT_NODE
      );
    }

    try {
      renderApp();
    } catch (e) {
      console.log(e);
      renderError(e);
    }

    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    );
  }
}

render();
