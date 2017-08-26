export default class extends React.Component {

  render() {
    const { color = 'white', type = '', style } = this.props

    return (
      <div className={"text-lig title "+color+' '+type} style={style}>
        {this.props.children}
        <style jsx>{`
          .title {
            font-size: 45px;
            margin: 0 auto;
            text-align: center;
            padding-top: 40px;
            padding-bottom: 20px;
          }
          .title.sub {
            font-size: 30px;
            padding-top: 24px;
            padding-bottom: 0px;
		        text-transform: uppercase;
          }
        `}</style>
      </div>
    )
  }
}
