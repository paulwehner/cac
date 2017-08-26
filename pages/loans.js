import React from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Button from '../components/Button'
import Title from '../components/Title'
import Loan from '../components/Loan'

export default () => (
  <Page>
    <div className="home pink">Lannister</div>
    <div className="outerContainer">
      <Title color="blackDark">Congratulations!</Title>
      <Title type="sub" color="blackDark">You have been approved for the following 3 loans:</Title>
      <div className="container">
        <Loan title='Lender #1' sub='Up to $3,000'></Loan>
        <Loan title='Lender #1' sub='Up to $4,000'></Loan>
        <Loan title='Lender #1' sub='Up to $2,000'></Loan>
        <div className="unqualified grey text-lig">Here are some more loans that you do not qualify for, but you can check back in the future to see if you become approved as your smart contract accounts change:</div>
        <Loan title='Lender #2' sub='Up to $13,000' disabled={true}></Loan>
        <Loan title='Lender #3' sub='Up to $14,000' disabled={true}></Loan>
        <Loan title='Lender #4' sub='Up to $12,000' disabled={true}></Loan>
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
        width: 800px;
        margin: 0 auto;
        margin-top: 100px;
      }
      .unqualified {
        font-size: 12px;
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        margin-top: 40px;
        padding: 30px 80px;
      }
    `}</style>
  </Page>
)
