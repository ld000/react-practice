import React, { PropTypes } from 'react'
import MenuList from './nav/MenuList'

class Header extends React.Component {
  render () {
    return (
      <header {...this.props} className="header">
        <div className="header-wrap">
          <MenuList />
        </div>
      </header>
    );
  }
}

export default Header;
