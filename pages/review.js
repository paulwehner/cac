import React, { Component } from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Button from '../components/Button'
import Title from '../components/Title'

export default class extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {

    }
  }

  handleOnSelect = (event) => {
    let target = event.currentTarget.dataset.key

  }

  render() {
    return (
      <Page background="gradient" type="split">
        <Link href="/">
          <div className="home white">Lannister</div>
        </Link>
        <div className="outerContainer">
          <Title>Review and Accept</Title>
          <div className="container whiteBackground z-shadow1">
            <div className="title black text-lig">Contract Terms and Conditions</div>

            <div className="inner">

              <section className="contractTermsAndConditionsContainer text-lig">
                {/* Person and finance charge, repayment */}
                <div className="creditorAndDetailsContainer">
                  <div className="creditorProfileContainer">
                    <div className="creditorProfilePicture">
                      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" alt="Creditor!"></img>
                    </div>
                    <div className="creditorInfo">
                      <h4>Cordelia F.</h4>
                      <h5 className="loanAmount"><strong>$600 Loan</strong></h5>
                    </div>
                    <div className="clearBoth"></div>
                  </div>
                  <div className="loanDetails">
                    <div className="financeCharge">
                      <sub className="subTop">Finance Charge</sub>
                      <h3>$6.00</h3>
                      <sub className="greyText"><i>APR: 8.00%</i></sub>
                    </div>
                    <div className="financeRepayment">
                      <sub className="subTop">Repayment</sub>
                      <h3>$648.00</h3>
                      <sub className="greyText"><i>due in 1 month</i></sub>
                    </div>
                  </div>
                  <div className="clearBoth"></div>
                </div>
                {/* END: Person and finance charge, repayment */}

                {/* Dapp Contract Details */}
                <div className="dappContractDetailsContainer">
                  <div className="contractDetailsColumn">
                    <p className="contractDetailsColumnTitle"><strong>Restricted Content Type:</strong></p>
                    <div>
                      <img src="../static/assets/icons/ens.png" alt="restrictedContentTypeImage" className="restrictedContentTypeImage"></img>
                      <p className="contractAccounts">ERC20 Accounts (2)</p>
                    </div>
                  </div>
                  <div className="contractDetailsColumn">
                    <p className="contractDetailsColumnTitle"><strong>Restricted Functions:</strong></p>
                    <ul className="lanUl">
                      <li>Transfer</li>
                      <li>Approve</li>
                    </ul>
                  </div>
                  <div className="contractDetailsColumn">
                    <p className="contractDetailsColumnTitle"><strong>Trustee Restricted Functions:</strong></p>
                    <ul className="lanUl">
                      <li>Transfer</li>
                      <li>Approve</li>
                    </ul>
                  </div>
                  <div className="clearBoth"></div>
                </div>
                {/* END: Dapp Contract Details */}

              </section>



            </div>

            <div className="buttonContainer">
              <Link href='/review'>
                <Button>START THE LOAN</Button>
              </Link>
            </div>
            <div className="backContainer">
              <Link href='/loans'>
                <a className="text-lig back grey">NEVERMIND, GO BACK TO APPROVED LOANS</a>
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
            width: 800px;
            margin: 0 auto;
            border-radius: 3px;
            padding-bottom: 30px;
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
          .inner {
            padding-top: 45px;
            padding-bottom: 45px;
          }
          .buttonContainer {
            text-align: center;
            margin: 0 auto;
            width: 400px;
          }
          .backContainer {
            margin-top: 25px;
            text-align: center;
          }
          .back {
            cursor: pointer;
          }


          .contractTermsAndConditionsContainer {
            margin: 0 auto;
            max-width: 700px;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer {
            padding: 10px 0;
            padding-bottom: 20px;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .creditorProfileContainer {
            padding-top: 5px;
            float: left;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .creditorProfileContainer .creditorProfilePicture {
            float: left;
            display: inline;
            vertical-align: middle;
            position: relative;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .creditorProfileContainer .creditorProfilePicture img {
            height: 50px;
            width: 50px;
            border-radius: 100%;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .creditorProfileContainer .creditorInfo {
            margin-left: 10px;
            float: left;
            display: inline;
          }
          .loanAmount {
            text-align: left;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .creditorProfileContainer .creditorInfo h4 {
            margin: 0;
            margin-bottom: 5px;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .creditorProfileContainer .creditorInfo h5 {
            margin: 0;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .loanDetails {
            float: right;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .loanDetails .financeCharge {
            text-align: left;
            display: inline-block;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .loanDetails .financeCharge .subTop {
            margin-bottom: 5px;
            display: inline-block;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .loanDetails .financeCharge h3,
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .loanDetails .financeCharge sub {
            margin: 0;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .loanDetails .financeRepayment {
            text-align: left;
            display: inline-block;
            margin-left: 20px;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .loanDetails .financeRepayment .subTop {
            margin-bottom: 5px;
            display: inline-block;
          }
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .loanDetails .financeRepayment h3,
          .contractTermsAndConditionsContainer .creditorAndDetailsContainer .loanDetails .financeRepayment sub {
            margin: 0;
          }
          .contractTermsAndConditionsContainer .dappContractDetailsContainer {
            text-align: left;
            border-top: 0.5px solid #AFB4BB;
            padding: 20px 0;
            margin: 0 auto;
          }
          .contractTermsAndConditionsContainer .dappContractDetailsContainer .contractDetailsColumn {
            float: left;
            width: 33%;
          }
          .contractDetailsColumnTitle {
            margin-bottom: 5px;
            display: block;
          }
          .contractTermsAndConditionsContainer .dappContractDetailsContainer .contractDetailsColumn .restrictedContentTypeImage {
            height: 52px;
            width: 52px;
            display: inline-block;
            vertical-align: middle;
            position: relative;
          }
          .contractTermsAndConditionsContainer .dappContractDetailsContainer .contractDetailsColumn .contractAccounts {
            display: inline-block;
            padding-left: 10px;
          }

          .lanUl {
            list-style-type: square;
            padding-left: 17px;
          }


          h4 {
            font-size: 24px;
            letter-spacing: 0;
            line-height: 26px;
            font-weight: 100;
          }

          h5 {
            font-size: 20px;
            letter-spacing: 0;
            line-height: 22px;
          }

          p {
            font-size: 16px;
            letter-spacing: 0;
            line-height: 24px;
          }

          sub {
            font-size: 12px;
            color: #73777E;
            letter-spacing: 0;
          }

          .greyText {
            color: #73777E;
          }

          .clearBoth {
            clear: both;
          }



        `}</style>
      </Page>
    )
  }
}
