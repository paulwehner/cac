import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Button from '../components/Button'
import Title from '../components/Title'

export default () => (
  <Page>
    <div className="home pink">Lannister</div>
    <div className="outerContainer">
      <div className="container whiteBackground">
        <div className="title blackDark text-lig">Select any/all smart contracts that you are willing to put up as collateral to secure a loan:</div>
        <div className="blocks">
          <div className="blockContainer">
            <div className="block pinkBackground" style={{backgroundImage:'url(../static/assets/icons/leeroy.png)'}}>
            </div>
            <div className="label text-reg black">Leeroy.io</div>
          </div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
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

      </div>
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
        border: 1px solid lightgrey;
        height: 500px;
        width: 800px;
        margin: 0 auto;
        border-radius: 3px;
      }
      .title {
        font-size: 24px;
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
        padding-top: 40px;
        padding-left: 20px;
        padding-right: 20px;
      }
      .blockContainer {
        float: left;
      }
      .block {
        height: 200px;
        width: 200px;
        border-radius: 5px;
        background-repeat: no-repeat;
        background-position: center center;
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
