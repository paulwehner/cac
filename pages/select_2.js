import React, { Component } from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Button from '../components/Button'
import Title from '../components/Title'

export default class extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      accounts: {
        '0x230CACd4242BDb5B9f7178eb1dB0ad109EC76ca0': {
          selected: false,
          eth: 0.45140176
        },
        '0x113CACd4242BDb5B9f7178eb1dB0ad109EC76ca0': {
          selected: false,
          eth: 0.45140176
        }
      },
      conversion: 330.44
    }
  }

  handleOnSelect = (event) => {
    let target = event.currentTarget.dataset.key
    let accounts = this.state
    let toSet = true
    if(accounts[target] !== 'undefined'){
      toSet = !accounts[target]
    }
    this.setState({
      target: toSet
    })
  }

  render() {
    let {accounts, conversion} = this.state
    let length = 0
    for(let a in accounts){
      let account = accounts[a]
      if(account.selected){
        length++
      }
    }

    return (
      <Page>
        <div className="home pink">Lannister</div>
        <div className="outerContainer">
          <div className="container whiteBackground">
            <div className="title blackDark text-lig">Connect your ERC20 account(s)</div>
            <div className="sub blackDark text-lig">We automatically detected your 2 ERC20 account(s) via MetaMask.</div>
            <div className="blocks">
              <div className="row">
              </div>
              <div className="row">
              </div>
              <div className="row">
                <div className="grey text-reg">You have selected {length} account(s) with a total ETH balance of 0.901827 Ether.</div>
              </div>
            </div>
            <div className="buttonContainer">
              <Link href='/review'>
                <Button>Next</Button>
              </Link>
            </div>
            <div className="backContainer">
              <Link href='/select'>
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
          .blocks {
            padding-top: 30px;
            padding-bottom: 30px;
          }
          .row {

          }
          .blockContainer {
            display: inline-block;
            margin: 10px;
          }
          .block {
            height: 150px;
            width: 180px;
            border-radius: 5px;
            background-repeat: no-repeat;
            background-position: center 35px;
            background-size: 80px 80px;
            cursor: pointer;
            position: relative;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08), 0 2px 5px rgba(0, 0, 0, 0.13);
          }
          .block:active {
            position: relative;
            top: 1px;
            left: 1px;
          }
          .block.selected {
            background-color: #7CB342;
          }
          .label {
            position: absolute;
            bottom: 10px;
            left: 0px;
            right: 0px;
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
  }
}
