import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="body-container">
        <Head>
          <title>Wekals Web</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container">
          {children}
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout