import React, { Component } from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Button from '../components/Button'
import Title from '../components/Title'

export default class extends Component {
  static async getInitialProps ({req, query}) {
    let balance = '...';
    return { balance }
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      balance: this.props.balance
    }
  }

  componentDidMount() {
    let self = this;
    let { balance} = this.state
    setTimeout(function(){
      if(typeof web3 !== 'undefined'
        && typeof web3.eth !== 'undefined' && web3.eth
        && typeof web3.eth.accounts !== 'undefined' && web3.eth.accounts
        && typeof web3.eth.accounts[0] !== 'undefined' && web3.eth.accounts[0] ){
        let temp = web3.eth.getBalance(web3.eth.accounts[0]);
        if(typeof temp !== 'undefined'){
          self.setState({
            balance: temp
          })
        }
      }
      else if(typeof web3 !== 'undefined'
        && typeof web3.eth !== 'undefined' && web3.eth ){
        web3.eth.getBalance('0x8ddbF32826184f8a7216a8dFcA842e3134FfEaa0',function (error, result) {
          if (!error) {
            let temp = result.toNumber();
            console.log('balance: ', temp)
            if(typeof temp !== 'undefined'){
              self.setState({
                balance: (temp/(10**18)) * 600
              })
            }
          } else {
            console.error(error);
          }
        })
      }
    }, 1000)
  }

  handleOnSelect = (event) => {
    let target = event.currentTarget.dataset.key

  }

  render() {
    let {balance} = this.state
    return (
      <Page background="gradient" >
        <Link href="/">
          <div className="home white">Lannister</div>
        </Link>
        <div className="outerContainer">
          <Title>Congrats you have a new loan!</Title>
          <div className="subtitle text-lig white">Refresh your browser in 30 seconds to see your new balance.</div>
          <div className="container whiteBackground z-shadow1">
            <div className="title black text-lig">Balance: ${balance}</div>

            <div className="buttonContainer">
              <Link href='/'>
                <Button>GO HOME</Button>
              </Link>
            </div>
            <div className="grey text-lig bottom">Remember, a Lannister always pays his debts.</div>

          </div>
        </div>
        <style jsx>{`
          .subtitle {
            font-size: 24px;
            padding-top: 10px;
            padding-bottom: 50px;
            text-align: center;
            margin: 0 auto;
            font-style: italic;
          }
          .bottom {
            padding-top: 20px;
            font-style: italic;
          }
          .home {
            position: absolute;
            top: 15px;
            left: 40px;
            font-size: 30px;
            cursor: pointer;
          }
          .outerContainer {
            padding-top: 100px;
            padding-bottom: 800px;
          }
          .container {
            text-align: center;
            width: 800px;
            margin: 0 auto;
            border-radius: 3px;
            padding-bottom: 30px;
          }
          .title {
            font-size: 54px;
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
            padding-top: 100px;
            padding-bottom: 40px;
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
            margin-top: 40px;
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
