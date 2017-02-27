import React, { PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'

class AppContainer extends React.Component {
  render () {
    const { routes } = this.props;

    return (<Router history={browserHistory} children={routes} />)
  }
}

export default AppContainer;
