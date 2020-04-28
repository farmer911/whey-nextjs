function withControls(WrappedComponent) {
  class SlideControl extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return SlideControl;
}

export default withControls;