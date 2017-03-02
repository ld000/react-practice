import React from 'react'
import Header from '../components/Header'
import Nav from '../components/nav/Nav'
import Footer from '../components/Footer'
import Section from '../components/Section'
// import './CoreLayout.scss'
// import '../../styles/core.scss'
import '../styles/app.css'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)

// CoreLayout.propTypes = {
//   children : React.PropTypes.element.isRequired
// }

export default CoreLayout
