import React from 'react'
import { connect } from 'react-redux'
import { initialLanguageState } from '../redux/language/reducer'

export default function withLocalize(Component) {
  const mapStateToProps = ({ languageState }) => {
    const state = languageState || initialLanguageState;
    const { stringResources } = state;
    return { stringResources }
  }

  class Localize extends React.Component {
    constructor(props) {
      super(props)
    }

    injectParams(resource, args) {
      for (let index in args)
        resource = resource.replace(`{${index}}`, args[index]);
      return resource;
    }

    T = (resourceKey, ...args) => {
      const { stringResources } = this.props;
      if (Boolean(resourceKey) && stringResources[resourceKey.toLowerCase()]) {
        let stringLsr = ((stringResources[resourceKey.toLowerCase()] || {}).value || '')
        return this.injectParams(stringLsr, args);
      }

      return this.injectParams(resourceKey, args).toLowerCase();
    }

    render() {
      return <Component {...this.props} T={this.T} />
    }
  }

  return connect(mapStateToProps, null)(Localize)
}