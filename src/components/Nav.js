import React, { PropTypes } from 'react'

class Profile extends React.Component {

}

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
          <div className="profile">
            <a></a>
            <span></span>
          </div>
          <ul></ul>
          <ul></ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
