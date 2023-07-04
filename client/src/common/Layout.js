import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Nav from './header/Nav'

const Layout = ({children}) => {
  return (
   <>
      <main>
        <Header />
          <Nav />
          {children}
        <Footer />
      </main>
   </>
  )
}

export default Layout
