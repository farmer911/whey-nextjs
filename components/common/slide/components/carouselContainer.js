import React from 'react';

export default class CarouselContainer extends React.Component {
  render() {
    return (
      <center >
        {this.props.children}
      </center>
    )
  }
}