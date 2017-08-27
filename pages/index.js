import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Page from '../components/Page'
import Button from '../components/Button'
import Title from '../components/Title'
import Slider from 'react-rangeslider'
import stylesheet from 'react-rangeslider/lib/index.css'

export default class extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      amount: 200
    }
  }

  handleOnChange = (value) => {
    this.setState({
      amount: value
    })
  }

  render() {
   let { amount } = this.state
    return (
      <Page background="gradient" type="split">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="nav">
          <span className="navItem white text-lig">About</span>
          <span className="navItem white text-lig">Sign In</span>
        </div>
        <div className="logo"><img className="logoImg" src="../static/assets/logo/white.png"></img></div>
        <Title type="sub" style={{paddingBottom: '50px', textTransform: 'none !important'}}>Gain credit and exclusive services by collateralizing your crypto-life.</Title>
        <div className="callout whiteBackground text-reg z-shadow1">
          <div className="calloutTitle black">How much do you want to borrow?</div>
          <div className="sliderContainer">
            <div className="sliderInnerContainer">
              <Slider
                value={amount}
                min={0}
                max={9999}
                step={50}
                tooltip={false}
                orientation="horizontal"
                onChange={this.handleOnChange}
              />
            </div>
            <input className="amount" value={'$'+amount}></input>
          </div>
          <div className="buttonContainer">
            <Link href="select">
              <Button>CALCULATE YOUR COLLATERAL</Button>
            </Link>
          </div>
        </div>
        <div className="benefit text-lig">
          <Title type='sub' color='black' id="how-it-works">How it Works</Title>
          <br/>
          <p>Your blockchain accounts are worth money. See how much lenders are willing to give to you based on the accounts you own:</p>
          <br/>
          <div className="blocks">
            <div className="row">
              <div className="blockContainer">
                <img className="serviceImage" src='../static/assets/icons/leeroy.png'></img>
                <div className="label text-reg white">Leeroy.io</div>
              </div>
              <div className="blockContainer">
                <img className="serviceImage" src='../static/assets/icons/centco.png'></img>
                <div className="label text-reg white">Cent.co</div>
              </div>
              <div className="blockContainer">
                <img className="serviceImage" src='../static/assets/icons/erc20.png'></img>
                <div className="label text-reg white">ERC20</div>
              </div>
            </div>
            <div className="row">
              <div className="blockContainer">
                <img className="serviceImage" src='../static/assets/icons/ens.png'></img>
                <div className="label text-reg white">Ethereum Name Service</div>
              </div>
              <div className="blockContainer">
                <img className="serviceImage" src='../static/assets/icons/ownable.png'></img>
                <div className="label text-reg white">Ownable</div>
              </div>
              <div className="blockContainer">
                <img className="serviceImage" src='../static/assets/icons/custom.png'></img>
                <div className="label text-reg white">Custom Wallet</div>
              </div>
            </div>
          </div>
        </div>
        <div className="benefit text-lig">
          <Title type='sub' color='black' id="benefits">Benefits</Title>
          <br/>
          <p className="paragraphOfBenefits">
            <strong>Equality</strong> - Equal access to capital, regardless to history background or location
            <br/>
            <strong>Trust</strong> - Agreed upon guarantees to support relationships
            <br/>
            <strong>Transparency</strong> -  Nothing is kept in secret; all transactions are open to the public
            <br/>
            <strong>Decentralized</strong> - Lasting protection
            <br/>
            <strong>Automatic</strong> - Everything is automated; no excess procedures
            <br/>
            <strong>Demonopolized</strong> - Market forces set the price – not a single entity
            <br/>
          </p>
        </div>
        <div className="benefit text-lig" style={{position:'relative',top:'-30px'}}>
          <Title type='sub' color='black' id="benefits">Assets</Title>
          <br/>
          <p className="paragraphOfBenefits">
            <strong><a href="http://pitch.lannister.tech/">Lannister Pitch Deck</a></strong>
            <br/>
            <strong><a href="https://github.com/paulwehner/cac">Lannister Website Github</a></strong>
            <br/>
            <strong><a href="https://github.com/paulwehner/lannister-alexa">Lannister Alexa Github</a></strong>
            <br/>
            <strong><a href="https://github.com/skilesare/lannister_contracts">Lannister Contracts Github</a></strong>
            <br/>
          </p>
        </div>
        <div className="footer text-lig white blackBackground">
          Lannister
        </div>
        <style jsx>{`
          .logo {
            text-align: center;
            padding-top: 80px;
            padding-bottom: 30px;
          }
          .logoImg {
            height: 40px;
          }
          .nav {
            position: absolute;
            top: 25px;
            right: 25px;
            font-size: 16px;
          }
          .navItem {
            margin-left: 15px;
            margin-right: 15px;
          }
          .footer {
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: 0px;
            height: 100px;
            line-height: 100px;
            font-size: 30px;
            text-align: center;
          }
          .callout {
            border-radius: 3px;
            width: 600px;
            margin: 0 auto;
            text-align: center;
            padding: 30px;
          }
          .calloutTitle {
            font-size: 24px;
          }
          .sliderContainer {
            margin: 0 auto;
            margin-top: 40px;
            margin-bottom: 40px;
            height: 60px;
            max-width: 530px;
          }
          .sliderInnerContainer {
            float: left;
            width: 400px;
          }
          .amount {
            float: right;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 30px;
            width: 100px;
            border-radius: 3px;
            margin-left: 10px;
          }
          .sliderImg {
            padding-top: 40px;
            padding-bottom: 30px;
            width: 90%;
          }
          .buttonContainer {
            width: 500px;
            margin: 0 auto;
          }
          .benefit {
            margin: 0 auto;
            max-width: 500px;
            padding-top: 40px;
            padding-bottom: 30px;
          }
          .blockContainer {
            display: inline-block;
            margin: 0 auto;
            text-align: center;
            vertical-align: middle;
            background: #FF0844
            padding: 20px;
            margin: 10px;
            width: 80px;
            height: 80px;
            border-radius: 100%;
          }
          .blocks {
            text-align: center
            margin: 0 auto;
          }
          .serviceImage {
            height: 30px; width: 30px;
          }
          .paragraphOfBenefits {
            padding-bottom: 60px;
          }
        `}</style>
      </Page>
    )
  }
}
