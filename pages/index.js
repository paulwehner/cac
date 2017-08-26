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
        <Title>Lannister</Title>
        <Title type="sub" style={{paddingBottom: '50px', textTransform: 'none !important'}}>Get a loan using your blockchain accounts as collateral.</Title>
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
        <div className="benefit">
          <Title type='sub' color='black'>Benefit</Title>
        </div>
        <div className="benefit">
          <Title type='sub' color='black'>Benefit</Title>
        </div>
        <div className="footer text-lig white blackBackground">
          Lannister
        </div>
        <style jsx>{`
          .nav {
            position: absolute;
            top: 15px;
            right: 40px;
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
            padding-top: 40px;
            padding-bottom: 200px;
          }
        `}</style>
      </Page>
    )
  }
}
