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
          amount: 10.12,
          type: 'GNO',
          label: 'Gnosis',
          conversion: 187.63
        },
        '0x113BZSX4242BDb5B9f7178eb1dB0ad109EC76ca0': {
          selected: false,
          amount: 4.23,
          type: 'REP',
          label: 'Augur',
          conversion: 30.34
        }
      }
    }
  }

  handleOnSelect = (event) => {
    let id = event.currentTarget.dataset.id
    let { accounts } = this.state
    accounts[id].selected = !accounts[id].selected
    this.setState({
      accounts: accounts
    })
  }

  render() {
    let {accounts} = this.state
    let total_length = Object.keys(accounts).length
    let total_value = 0
    let length = 0
    for(let a in accounts){
      let account = accounts[a]
      if(account.selected){
        length++
        total_value += account.amount * account.conversion
      }
    }
    let disabled = true
    if(length){
      disabled = false
    }

    return (
      <Page>
        <Link href="/">
          <div className="home pink">Lannister</div>
        </Link>
        <div className="outerContainer text-lig">
          <div className="container whiteBackground">
            <div className="title blackDark text-lig">Connect your ERC20 account(s)</div>
            <div className="sub blackDark text-lig">We automatically detected your {total_length} ERC20 account(s) via MetaMask.</div>
            <div className="blocks">
              {Object.keys(accounts).map((keyName, keyIndex) => {
                let a = accounts[keyName]
                let selected = a.selected ? ' greenDarkBackground' : ' pinkBackground'
                return (
                  <div key={keyIndex} className="row " onClick={this.handleOnSelect} data-id={keyName}>
                    <div className={"top main white text-lig" + selected}>
                      <span className="label white text-lig">Address</span>
                      {keyName}
                    </div>
                    <div className="bottom main">
                      <div className="left">
                        <span className="label blackDark text-lig">{a.type} Balance</span>
                        {a.amount} {a.label}
                      </div>
                      <div className="right ">
                        <span className="label blackDark text-lig">USD Balance </span>
                        ${Math.round(a.amount * a.conversion*100)/100} (@ ${a.conversion}/{a.type})
                      </div>
                    </div>
                  </div>
                )
              })}
            <div className="grey text-reg selectedContainer">You have selected {length} account(s) with a total USD balance of ${Math.round(total_value*100)/100}.</div>
            </div>
            <div className="buttonContainer">
              <Link href='/loans'>
                <Button disabled={disabled}>VIEW QUALIFIED LOANS</Button>
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
          .sub {
            padding-top: 20px;
          }
          .blocks {
            padding-top: 30px;
            padding-bottom: 30px;
          }
          .row {
            cursor: pointer;
            width: 680px;
            margin: 0 auto;
            border-radius: 5px;
            overflow: hidden;
            border: 1px solid lightgrey;
            margin-top: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08), 0 2px 5px rgba(0, 0, 0, 0.13);
          }
          .row:active {
            position: relative;
            top: 1px;
            left: 1px;
          }
          .main {
            height: 60px;
            line-height: 70px;
            font-size: 22px;
            text-align: left;
            padding-left: 20px;
            position: relative;
          }
          .bottom {

          }
          .left{
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 40%;
            padding-left: 20px;
          }
          .right {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 40%;
            width: 60%;
            padding-left: 20px;
            border-left: 1px solid grey;
          }
          .label {
            position: absolute;
            font-size: 12px;
            top: 6px;
            left: 20px;
            line-height: 14px;
          }
          .selectedContainer {
            padding-top: 40px;
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
        `}</style>
      </Page>
    )
  }
}
