import React from 'react'
import Slider from "react-slick";

const dataImg = [
    {
        imgage: 'https://cdn.wheystore.vn/upload/banner/banner_1587132349_image_1587132349.jpg'
    },
    {
        imgage: 'https://cdn.wheystore.vn/upload/banner/banner_1587132349_image_1587132349.jpg'
    },
    {
        imgage: 'https://cdn.wheystore.vn/upload/banner/banner_1587132349_image_1587132349.jpg'
    },
    {
        imgage: 'https://cdn.wheystore.vn/upload/banner/banner_1587132349_image_1587132349.jpg'
    }
]

export default function Banner(props) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const {data} = props;

    return (
        <div className={'w-100 mb-4'.css()}>
            <Slider {...settings}>
                {
                    dataImg.map((item,index) => {
                        return (
                        <img src={item.imgage} key={index}/>
                    )})
                }
            </Slider>
        </div>
    )
}
