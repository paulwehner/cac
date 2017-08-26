export default `
  input {
    padding-left: 10px;
  }


  .rangeslider-horizontal .rangeslider__fill {
    background-color: #FF0844 !important;
  }
  .rangeslider .rangeslider__handle {
    border: 1px solid #FF0844 !important;
    background: #FF0844 !important;
    box-shadow: 0 17px 50px rgba(0, 0, 0, 0.10),
              0 12px 15px rgba(0, 0, 0, 0.12) !important;
  }
  .rangeslider-horizontal .rangeslider__handle:after {
    content: none !important;
  }

  .rangeslider, .rangeslider .rangeslider__fill {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08),
              0 2px 5px rgba(0, 0, 0, 0.13) !important;
  }

  .rangeslider {
    background: #EFF4FC !important;
  }

  input::-webkit-input-placeholder { font-weight: 100; color: #CDCDCD; } /* Chrome/Opera/Safari */
  input::-moz-placeholder          { font-weight: 100; color: #CDCDCD; } /* Firefox 19+ */
  input:-ms-input-placeholder      { font-weight: 100; color: #CDCDCD; } /* IE 10+ */
  input:-moz-placeholder           { font-weight: 100; color: #CDCDCD; } /* Firefox 18- */
  select { @include x-appearance(none) }

  input {
    border: 1px solid #AFB4BB;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08),
              0 2px 5px rgba(0, 0, 0, 0.13) !important;
  }

`