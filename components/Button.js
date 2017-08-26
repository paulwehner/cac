export default class extends React.Component {

  render() {
    let { backgroundColor = 'blue', emoji='', emojiDown='', disabled=false, loading=false } = this.props
    let classes = backgroundColor+'Background text-reg white';
    if(disabled){
      classes += ' disabled';
    }
    if(!emojiDown || emojiDown.length<1){
      emojiDown = emoji;
    }

    let spinnerClass=''
    if(loading){
      spinnerClass=' visible'
    }

    return (
      <div className={'button '+classes} onClick={this.props.onClick}>
        {emoji?<span className='container'><span className='emoji'>{emoji}</span><span className='emojiDown'>{emojiDown}</span></span>:''}{this.props.children}
        <div className={"spinner"+spinnerClass}></div>
        <style jsx>{`
          .spinner {
            position: absolute;
            right: 50px;
            top: 50%;
            margin-top: -5px;
            visibility: hidden;
          }
          .spinner.visible {
            visibility: visible;
          }
          .button {
            position: relative;
		        text-transform: uppercase;
            line-height: 50px;
            font-size: 30px;
            border-radius: 100px;
            padding-top: 12px;
            padding-bottom: 14px;
            margin: 12px 0px;
            text-align: center;
            cursor:pointer;
            box-shadow: 0px 2px rgba(0,0,0,.2);
          }
          .button:active {
            position: relative;
            top: 1px;
            left: 1px;
          }
          .container {
            padding-right: 10px;
            font-size: 45px;
            position:relative;
            top: 5px;
          }
          .emojiDown {
            display:none;
          }
          .button:active .emoji {
            display:none;
          }
          .button:active .emojiDown {
            display:inline;
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
        `}</style>
      </div>
    )
  }
}
