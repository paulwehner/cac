import React, { Component } from 'react'
import Link from 'next/link'
import Page from '../components/Page'
import Button from '../components/Button'
import Title from '../components/Title'

export default class extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      leeroy: false,
      cent: false,
      erc20: false,
      ens: false,
      ownable: false,
      custom: false
    }
  }

  handleOnSelect = (event) => {
    let target = event.currentTarget.dataset.id
    if(target == 'leeroy'){
      let leeroyState = this.state.leeroy
      this.setState({
        leeroy: !leeroyState
      })
    }
    if(target == 'cent'){
      let cent = this.state.cent
      this.setState({
        cent: !cent
      })
    }
    if(target == 'erc20'){
      let erc20 = this.state.erc20
      this.setState({
        erc20: !erc20
      })
    }
    if(target == 'ens'){
      let ens = this.state.ens
      this.setState({
        ens: !ens
      })
    }
    if(target == 'ownable'){
      let ownable = this.state.ownable
      this.setState({
        ownable: !ownable
      })
    }
    if(target == 'custom'){
      let custom = this.state.custom
      this.setState({
        custom: !custom
      })
    }
  }

  render() {
    let { leeroy, cent, erc20, ens, ownable, custom } = this.state
    console.log(this.state)

    let leeroyClass = leeroy ? 'selected':''
    let centClass = cent ? 'selected':''
    let erc20Class = erc20 ? 'selected':''
    let ensClass = ens ? 'selected':''
    let ownableClass = ownable ? 'selected':''
    let customClass = custom ? 'selected':''

    console.log(leeroyClass);

    return (
      <Page>
        <div className="home pink">Lannister</div>
        <div className="outerContainer">
          <div className="container whiteBackground z-shadow1">
            <div className="title blackDark text-lig">Select any/all smart contracts that you are willing to put up as collateral to secure a loan:</div>
            <p className="descriptiveParagraph text-lig">Make sure to only select accounts that you agree to forfeit to your creditor if you default on a loan.</p>
            <div className="blocks">
              <div className="row">
                <div className="blockContainer">
                  <div data-id="leeroy" onClick={this.handleOnSelect}  className={"block pinkBackground "+leeroyClass} style={{backgroundImage:'url(../static/assets/icons/leeroy.png)'}}>
                    <div className="label text-reg white">Leeroy.io</div>
                  </div>
                </div>
                <div className="blockContainer">
                  <div data-id="cent" onClick={this.handleOnSelect} className={"block pinkBackground "+centClass} style={{backgroundImage:'url(../static/assets/icons/centco.png)'}}>
                    <div className="label text-reg white">Cent.co</div>
                  </div>
                </div>
                <div className="blockContainer">
                  <div data-id="erc20" onClick={this.handleOnSelect}  className="block pinkBackground" className={"block pinkBackground "+erc20Class}  style={{backgroundImage:'url(../static/assets/icons/erc20.png)'}}>
                    <div className="label text-reg white">ERC20</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="blockContainer">
                  <div data-id="ens" onClick={this.handleOnSelect}  className="block pinkBackground" className={"block pinkBackground "+ensClass}  style={{backgroundImage:'url(../static/assets/icons/ens.png)'}}>
                    <div className="label text-reg white">Ethereum Name Service</div>
                  </div>
                </div>
                <div className="blockContainer">
                  <div data-id="ownable" onClick={this.handleOnSelect}  className="block pinkBackground" className={"block pinkBackground "+ownableClass}  style={{backgroundImage:'url(../static/assets/icons/ownable.png)'}}>
                    <div className="label text-reg white">Ownable</div>
                  </div>
                </div>
                <div className="blockContainer">
                  <div data-id="custom" onClick={this.handleOnSelect}  className="block pinkBackground" className={"block pinkBackground "+customClass}  style={{backgroundImage:'url(../static/assets/icons/custom.png)'}}>
                    <div className="label text-reg white">Custom Wallet</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <Link href='/select_2'>
                <Button>Next</Button>
              </Link>
            </div>
            <div className="backContainer">
              <Link href='/'>
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
            border-radius: 3px;
            background-repeat: no-repeat;
            background-position: center 35px;
            background-size: 80px 80px;
            cursor: pointer;
            position: relative;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.10),
              0 8px 17px rgba(0, 0, 0, 0.10);
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
            margin-top: 25px;
            text-align: center;
          }
          .back {
            cursor: pointer;
          }

          .descriptiveParagraph {
            margin-top: 15px;
            position: relative;
          }
          .text-reg {
            padding: 10px;
            padding-top: 5px;
          }
        `}</style>
      </Page>
    )
  }
}
