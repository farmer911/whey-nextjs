import React from 'react'

const data = [
    {
        img: 'https://cdn.wheystore.vn/upload/trademark/nutrex-research.jpg'
    },
    {
        img: 'https://cdn.wheystore.vn/upload/trademark/optimum-nutrition.jpg'
    },
    {
        img: 'https://cdn.wheystore.vn/upload/trademark/bpi-sports.jpg'
    },
    {
        img: 'https://cdn.wheystore.vn/upload/trademark/dymatize.jpg'
    },
    {
        img: 'https://cdn.wheystore.vn/upload/trademark/pro-supps.jpg'
    },
    {
        img: 'https://cdn.wheystore.vn/upload/trademark/now-sports.jpg'
    },
]

export default function NewProducts(props) {
    return (
        <div>
            <div className={'container'.css()}>
                <h2 className={'title_modules'.css()}>
                    <span className={'large'.css()}>Thương hiệu nổi bật</span>
                    <span className={'mini d-flex'.css()}>Các thương hiệu Whey nổi tiến trên thế giới</span>
                </h2>
                <div className={'row'.css()}>
                    <div className={'d-flex flex-wrap'.css()}>
                        {
                            data.map((item,index) => {
                                return (
                                    <div className={'branch'.css()} key={index}>
                                        <div className={'box-shadow'.css()}>
                                            <img src={item.img} width={165} height={49.75} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
