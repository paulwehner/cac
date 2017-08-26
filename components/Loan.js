export default class extends React.Component {

  render() {
    let { backgroundColor = 'white', title='', sub='', icon='', disabled=false} = this.props
    let classes = backgroundColor+'Background text-reg blackDark';
    if(disabled){
      classes += ' disabled';
    }

    return (
      <div className={'button '+classes} onClick={this.props.onClick}>
        {icon ? <image src={icon} className='icon'></image>:''}
        <div className='title'>{title}</div>
        <div className='sub'>{sub}</div>
        <div className='apply blueBackground white text-reg'>Review and Apply</div>
        <style jsx>{`
          .button {
            position: relative;
            height: 50px;
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
            top: 40px;
            left: 100px;
            font-size: 14px;
          }
          .apply {
            border-radius: 30px;
            position: absolute;
            right: 30px;
            top: 8px;
            bottom: 8px;
            width: 100px;
            font-size: 30px;
            line-height: 54px;
            padding: 0 20px;
          }
        `}</style>
      </div>
    )
  }
}
