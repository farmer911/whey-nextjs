import React, { useState } from 'react'
import classNames from 'classnames'


const iconPositionProps = {
  'center': 'justify-content-center',
  'between': 'justify-content-between'
}

export default function VmbButton(props) {
  const [pending, setPending] = useState(false)
  const { className, onClick, icon, iconPosition, style, reverse, manual } = props;
  const hasIcon = Boolean(icon);
  const loading = manual ? props.pending : pending;
  const classProps = classNames(className, {
    ['disabled'.css()]: loading,
    [`d-inline-flex flex-row ${iconPositionProps[iconPosition]} align-items-center`.css()]: hasIcon,
    ['flex-row-reverse'.css()]: reverse
  });


  return (
    <button style={style}
      className={classProps}
      onClick={() => {
        setPending(true);
        if (manual)
          return onClick();

        const func = new Promise(async (resolve, reject) => {
          await onClick();
          resolve()
        });
        func.finally(() => setPending(false))
      }}
      disabled={loading}>
      {
        loading && (
          <div className={"".css()}>
            <div className={"spinner-border spinner-border-sm text-light".css()} role="status">
              <span className={"sr-only".css()}>Loading...</span>
            </div>
          </div>
        )
      }
      {
        !loading && hasIcon && (
          <React.Fragment>
            <div className={classNames({
              ["pr-3".css()]: !reverse && props.children,
              ["pl-3".css()]: reverse && props.children
            })}>{icon}</div>
          </React.Fragment>

        )
      }
      <div hidden={loading}>{props.children}</div>
    </button>
  )
}

VmbButton.defaultProps = {
  pending: false,
  reverse: false,
  manual: false,
  icon: null,
  iconPosition: 'center',
  style: {

  },
  onClick: () => { }
}
