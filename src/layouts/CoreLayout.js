import React from 'react'
import Header from '../components/Header'
import Nav from '../components/nav/Nav'
import Footer from '../components/Footer'
import Section from '../components/Section'
// import './CoreLayout.scss'
// import '../../styles/core.scss'
import '../styles/main.css'

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <Nav />
    <div className="main">
      <Section />
      <Footer />
    </div>
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

// CoreLayout.propTypes = {
//   children : React.PropTypes.element.isRequired
// }

export default CoreLayout
