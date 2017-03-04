import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class MenuList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menu: []
    }
  }

  componentDidMount() {
    fetch('/api/menu').then(response => {
      if (!response.ok) {
        return false;
      }

      response.json().then(json => {
        this.setState({
          menu: json
        });
      });
    });
  }

  render () {
    return (
      <div className="top-menu">
        <ul className="list-inline">
          <li><Link to="/"><i className="iconfont icon-"></i><span>首页</span></Link></li>
          {
            this.state.menu.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} title={item.name}>
                    <i className="iconfont icon-"></i>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default MenuList;
