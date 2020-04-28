import React, { Component } from 'react';
import CarouselContainer from './components/carouselContainer';
import { Carousel } from 'antd';
import SlideControl from './components/controls';

const CarouselCustom = React.forwardRef((props, ref) => (
  <Carousel ref={ref} draggable autoplay={true} dots={false}>
    {props.children}
  </Carousel>
));

class Slide extends React.Component {
  static Control = SlideControl;

  constructor(props) {
    super(props);
  }

  prev = () => {
    this.props.slideIntance.current.prev();
  }

  next = () => {
    this.props.slideIntance.current.next();
  }

  render() {
    return (
      <CarouselContainer>
        <CarouselCustom ref={this.props.slideIntance}>
          {this.props.children}
        </CarouselCustom>
      </CarouselContainer>
    )
  }
}
Slide.defaultProps = {
  slideIntance: {
    current: {
      prev: () => { },
      next: () => { },
    }
  }
}
export default Slide;