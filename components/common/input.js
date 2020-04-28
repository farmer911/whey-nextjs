export default function Input(props) {
  return (
    <input
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      className={props.className || "form-control".css()}
      type={props.type || 'text'} />
  )
}

Input.defaultProps = {
  onChange: value => { },
}