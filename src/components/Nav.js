import React, { PropTypes } from 'react'
import '../styles/main.css'

class Nav extends React.Component {
  render () {
    return (<nav className="sidebar">
      <div className="wrap">
        <div className="profile">
          <a></a>
          <span></span>
        </div>
        <ul></ul>
        <ul></ul>
      </div>
    </nav>);
  }
}

export default Nav;
