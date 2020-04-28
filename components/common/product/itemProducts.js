import React, { Component } from 'react'
import Slide from '../slide/slide'
import RenderItem from './renderItem';

export default class ItemProducts extends Component {
    constructor(props) {
        super(props);
        this.slideInstance = React.createRef();
      }
    
    next = () => {
    this.slideInstance.current.next();
    }

    prev = () => {
    this.slideInstance.current.prev();
    }


    render() {
        const { data } = this.props;
        console.log(this.slideInstance)
        return (
            <div className={'mt-4'.css()}>
                {
                    data.data.map((item,index) => {
                        return (
                            <div className={'container'.css()} key={index}>
                                <h2 className={'title_modules mt-2'.css()}>
                                    <span className={'large'.css()}>{item.name}</span>
                                    {/* <span className={'mini d-flex'.css()}>Các thương hiệu Whey nổi tiến trên thế giới</span> */}
                                </h2>
                                <RenderItem data={item.products}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

ItemProducts.defaultProps = {
    title: "Sto-tube của bạn",
    stoTubeItems: []
  }