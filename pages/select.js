import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Button from '../components/Button'
import Title from '../components/Title'

export default () => (
  <Page>
    <div className="home pink">Lannister</div>
    <div className="outerContainer">
      <div className="container">

      </div>
    </div>
    <div className="buttonContainer">
      <Link href='/loans'>
        <Button>Next</Button>
      </Link>
    </div>
    <div className="backContainer">
      <Link href='/'>
        <a className="text-lig back grey">BACK</a>
      </Link>
    </div>
    <style jsx>{`
      .home {
        position: absolute;
        top: 15px;
        left: 40px;
        font-size: 30px;
        cursor: pointer;
      }
      .outerContainer {
        padding-top: 100px;
      }
      .container {
        text-align: center;
        border: 1px solid grey;
        height: 500px;
        width: 800px;
        margin: 0 auto;
      }
      .buttonContainer {
        text-align: center;
        margin: 0 auto;
        width: 400px;
      }
      .backContainer {
        margin-top: 40px;
        text-align: center;
      }
      .back {
        cursor: pointer;
      }
    `}</style>
  </Page>
)
