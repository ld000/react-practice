import React, { PropTypes } from 'react'

class Section extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
    fetch('/api/blog').then(response => {
      if (!response.ok) {
        return false;
      }

      response.json().then(json => {


        this.setState({
          blogs: json
        });
      });
    });
  }

  render () {
    return <section>{this.state.blogs}</section>;
  }
}

export default Section;
