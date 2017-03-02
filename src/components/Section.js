import React, { PropTypes } from 'react'
import marked from 'marked'

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
    return (
      <div>
        <section className="top-picture" style={{backgroundImage: "url(./outage-status-update.png)"}}>
          <div className="top-container">
            <div className="top-name">
              <h2>Test placeholder</h2>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              {
                this.state.blogs.map((item, index) => {
                  return (
                    <section className="post-preview" key={index}>
                      <h3>{item.title}</h3>
                      <div>{item.createTime}</div>
                      <div dangerouslySetInnerHTML={{__html: marked(item.content)}}></div>
                      <div className="continue">
                        <a href="/">Continue Reading...</a>
                      </div>
                    </section>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
