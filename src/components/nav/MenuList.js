import React, { PropTypes } from 'react'

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
      <ul className="buttons">
        <li><a href="/" title="首页"><i className="iconfont icon-"></i><span>首页</span></a></li>
        {
          this.state.menu.map(item => {
            return (
              <li>
                <a href={item.url} title={item.name}>
                  <i className="iconfont icon-"></i>
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default MenuList;
