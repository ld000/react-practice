import React, { PropTypes } from 'react'
import MenuList from './MenuList'
import Profile from './Profile'

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      address: ''
    }
  }

  componentDidMount() {
    fetch('/api/info').then(response => {
      if (!response.ok) {
        return false;
      }

      response.json().then(json => {
        this.setState({
          user: json.user,
          address: json.address
        });
      });
    });
  }

  render () {
    return (
      <nav className="sidebar">
        <div className="wrap">
          <Profile />
          <MenuList />
          <ul></ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
