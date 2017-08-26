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
      <Title color="blackDark">Nice Work!</Title>
      <Title type="sub" color="blackDark">You have been approved for the following 3 loans:</Title>
      <div className="container">
        <Link href="/review">
          <Loan finance="$3.20" apr="8.00%" repayment="$42.30" icon="https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg" title='Cordelia F.' sub='$40 Loan'></Loan>
        </Link>
        <Link href="/review">
          <Loan finance="$50.00" apr="10.00%" repayment="$550.00" icon="https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg"  title='Ivan T.' sub='$500 Loan'></Loan>
        </Link>
        <Link href="/review">
          <Loan finance="$225.00" apr="11.25%" repayment="$2,225.00" icon="https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg"  title='Kathryn M.' sub='$2,000 Loan'></Loan>
        </Link>
        <div className="unqualified grey text-lig">Here are some more loans that you do not qualify for, but you can check back in the future to see if you become approved as your smart contract accounts change:</div>
        <Loan finance="$300" apr="8.00%" repayment="$5,230" icon="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"  title='Hannah B.' sub='$4,700' disabled={true}></Loan>
        <Loan finance="$43" apr="8.00%" repayment="$440"icon="https://s3.amazonaws.com/uifaces/faces/twitter/tonystubblebine/128.jpg"  title='John A.' sub='$410' disabled={true}></Loan>
        <Loan finance="$35" apr="8.00%" repayment="$340"icon="https://s3.amazonaws.com/uifaces/faces/twitter/vladzima/128.jpg"  title='Conor M.' sub='$355' disabled={true}></Loan>
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
        padding-top: 50px;
      }
      .container {
        text-align: center;
        width: 800px;
        margin: 0 auto;
        margin-top: 40px;
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
