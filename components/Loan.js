export default class extends React.Component {

  render() {
    let {
      backgroundColor = 'white',
      finance='$3.20',
      repayment='$42.30',
      apr='8.00%',
      title='',
      sub='',
      icon='',
      disabled=false} = this.props
    let classes = backgroundColor+'Background text-reg blackDark';
    if(disabled){
      classes += ' disabled';
    }

    return (
      <div className={'whiteBackground button '+classes} onClick={this.props.onClick}>
        {icon ? <img src={icon} className='icon'></img>:''}
        <div className='title text-lig'>{title}</div>
        <div className='sub text-reg'>{sub}</div>
        <div className='finance'>
          <div className='topLabel greyDark'>Finance Charge</div>
          <div className='main'>{finance}</div>
          <div className='bottomLabel greyDark'>APR: {apr}</div>
        </div>
        <div className='repayment'>
          <div className='topLabel greyDark'>Repayment</div>
          <div className='main'>{repayment}</div>
          <div className='bottomLabel greyDark'>due in 1 month</div>
        </div>
        <div className='apply blueBackground white text-reg'>REVIEW AND ACCEPT</div>
        <style jsx>{`
          .finance {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 210px;
            border-left: 1px solid lightgrey;
            padding-left: 20px;
            padding-top: 8px;
            text-align: left;
          }
          .repayment {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 310px;
            padding-left: 20px;
            padding-top: 8px;
            text-align: left;
          }
          .topLabel {
            font-size: 11px;
          }
          .main {
            padding-top: 6px;
            padding-bottom: 6px;
            font-size: 24px;
          }
          .bottomLabel {
            font-size: 11px;
            font-style: italic;
          }
          .button {
            position: relative;
            height: 60px;
            border-radius: 3px;
            padding-top: 12px;
            padding-bottom: 12px;
            margin: 12px 0px;
            text-align: center;
            cursor:pointer;
            border: 1px solid #EFF4FC;
            box-shadow: 0px 2px rgba(0,0,0,.2);
          }
          .button:active {
            position: relative;
            top: 1px;
            left: 1px;
          }
          .disabled {
            opacity: .25;
            cursor: default;
          }
          .disabled.button:active {
            position: relative;
            top: 0px;
            left: 0px;
          }
          .title {
            position: absolute;
            top: 18px;
            left: 100px;
            font-size: 18px;
          }
          .sub {
            position: absolute;
            top: 42px;
            left: 100px;
            font-size: 16px;
          }
          .icon {
            position: absolute;
            left: 15px;
            top: 10px;
            width: 66px;
            border-radius: 50px;
            overflow:hidden;
          }
          .apply {
            border-radius: 30px;
            position: absolute;
            right: 30px;
            top: 14px;
            bottom: 12px;
            width: 280px;
            font-size: 26px;
            line-height: 57px;
            padding: 0 20px;
          }
        `}</style>
      </div>
    )
  }
}
