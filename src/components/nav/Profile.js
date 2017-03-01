import React, { PropTypes } from 'react'

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      address: '',
      imageAddress: ''
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
          imageAddress: json.imageAddress,
          address: json.address
        });
      });
    });
  }

  render () {
    return (
      <div className="profile">
        <a href="/"><img src={this.state.imageAddress} alt={this.state.user} /></a>
        <span>{this.state.user}</span>
      </div>
    );
  }
}

export default Profile;
