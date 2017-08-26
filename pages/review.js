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
        <div className="home white">Lannister</div>
        <div className="outerContainer">
          <Title>Review and Accept</Title>
          <div className="container whiteBackground">
            <div className="title black text-lig">Contract Terms and Conditions</div>

            <div className="inner">
              ADD YOUR CODE HERE
            </div>

            <div className="buttonContainer">
              <Link href='/review'>
                <Button>START THE LOAN</Button>
              </Link>
            </div>
            <div className="backContainer">
              <Link href='/select'>
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
          .inner {
            border: 1px solid red;
            padding-top: 40px;
            height: 300px;
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
