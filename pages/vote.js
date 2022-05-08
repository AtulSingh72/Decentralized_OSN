import React, { Component } from 'react'
import Head from 'next/head'
import Navbar from '../componenets/Navbar/Navbar'
import NominateYourself from '../componenets/NominateYourself/NominateYourself'
import VotingPage from '../componenets/VotingPage/VotingPage'

class VotePage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="row" style={{}}>
        <Head>
          <title>DOSN</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
          ></link>
          <script
            src="https://kit.fontawesome.com/2c322db396.js"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
            integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
            integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
            crossorigin="anonymous"
          ></script>
          <script src="https://cdn.jsdelivr.net/npm/jdenticon@2.2.0"></script>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Mono&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <div
          className="col-lg-3"
          style={{
            position: 'relative',
            textAlign: 'right',
          }}
        >
          <Navbar />
        </div>
        <div className="container col-lg-9" style={{ textAlign: 'center' }}>
          <NominateYourself />
          <VotingPage />
        </div>
      </div>
    )
  }
}

export default VotePage
