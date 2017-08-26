import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Button from '../components/Button'
import Title from '../components/Title'

export default () => (
  <Page background="gradient" type="split">
    <Title>Lannister</Title>
    <Title type="sub" style={{paddingBottom: '50px'}}>Get a loan using your blockchain accounts as collateral.</Title>
    <div className="callout whiteBackground text-reg">
      <div className="calloutTitle black">How much do you want to borrow?</div>
      <image className="sliderImg" src="../static/images/slider.png"></image>
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
        border: 1px solid grey;
        border-radius: 3px;
        width: 600px;
        margin: 0 auto;
        text-align: center;
        padding: 30px;
      }
      .calloutTitle {
        font-size: 24px;
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
