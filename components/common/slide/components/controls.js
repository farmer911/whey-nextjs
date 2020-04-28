import React from 'react';

const SlideControl = props => {
  return (
    <div className={'d-flex'.css()}>
      <div>
        <a className={'text-white control_button'.css()} onClick={props.prev}>
          <i className={"ti-angle-left".css()}></i>
        </a>
      </div>
      <div className={'mx-3'.css()}></div>
      <div>
        <a className={'text-white control_button'.css()} onClick={props.next}>
          <i className={"ti-angle-right".css()}></i>
        </a>
      </div>
      <style jsx>
        {
          `
            .control_button:hover{
              color: black !important;
            }
            `
        }
      </style>
    </div>
  )
}


SlideControl.defaultProps = {
  next: () => { },
  prev: () => { },
}

export default SlideControl;