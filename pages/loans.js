import React, { Component } from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Button from '../components/Button'
import Title from '../components/Title'
import Loan from '../components/Loan'

export default class extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    let self = this;
    setTimeout(function(){
      self.setState({
        loading: false
      })
    }, 3000)
  }

  render() {
    const {loading} = this.state
    if(loading){

    }
    return (
      <Page>
        <Link href="/">
          <div className="home pink">Lannister</div>
        </Link>
        {loading ? <div className="outerContainer">
            <Title color="blackDark">Finding Lenders...</Title>
            <div className="padding"></div>
            <div className="loader"></div>
          </div>
          :
          <div className="outerContainer">
            <Title color="blackDark">Nice Work!</Title>
            <Title type="sub" color="blackDark">You have been approved for the following 3 loans:</Title>
            <div className="container">
              <Link href="/review">
                <Loan finance="$6.00" apr="8.00%" repayment="$648.00" icon="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" title='Cordelia F.' sub='$600 Loan'></Loan>
              </Link>
              <Link href="/review">
                <Loan finance="$5.00" apr="10.00%" repayment="$550.00" icon="https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg"  title='Ivan T.' sub='$500 Loan'></Loan>
              </Link>
              <Link href="/review">
                <Loan finance="$20.00" apr="11.25%" repayment="$2,225.00" icon="https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg"  title='Kathryn M.' sub='$2,000 Loan'></Loan>
              </Link>
              <div className="unqualified grey text-lig">Here are some more loans that you do not qualify for, but you can check back in the future to see if you become approved as your smart contract accounts change:</div>
              <Loan finance="$300" apr="8.00%" repayment="$5,230" icon="https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg"  title='Hannah B.' sub='$4,700' disabled={true}></Loan>
              <Loan finance="$43" apr="8.00%" repayment="$440"icon="https://s3.amazonaws.com/uifaces/faces/twitter/tonystubblebine/128.jpg"  title='John A.' sub='$410' disabled={true}></Loan>
              <Loan finance="$35" apr="8.00%" repayment="$340"icon="https://s3.amazonaws.com/uifaces/faces/twitter/vladzima/128.jpg"  title='Conor M.' sub='$355' disabled={true}></Loan>
            </div>
          </div>
        }
        <style jsx>{`
          .padding {
            padding-top: 200px;
          }
          .start {

          }
          .finish {
            display: none;
          }
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

          .loader,
          .loader:before,
          .loader:after {
            border-radius: 50%;
            width: 2.5em;
            height: 2.5em;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            -webkit-animation: load7 1.8s infinite ease-in-out;
            animation: load7 1.8s infinite ease-in-out;
          }
          .loader {
            color: grey;
            font-size: 10px;
            margin: 0 auto;
            position: relative;
            text-indent: -9999em;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
            margin-top: -2.5em;
          }
          .loader:before,
          .loader:after {
            content: '';
            position: absolute;
            top: 0;
          }
          .loader:before {
            left: -3.5em;
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
          }
          .loader:after {
            left: 3.5em;
          }
          @-webkit-keyframes load7 {
            0%,
            80%,
            100% {
              box-shadow: 0 2.5em 0 -1.3em;
            }
            40% {
              box-shadow: 0 2.5em 0 0;
            }
          }
          @keyframes load7 {
            0%,
            80%,
            100% {
              box-shadow: 0 2.5em 0 -1.3em;
            }
            40% {
              box-shadow: 0 2.5em 0 0;
            }
          }
        `}</style>
      </Page>
    )
  }
}
