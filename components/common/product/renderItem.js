import React from 'react'
import { Rate } from 'antd';

export default function RenderItem(props) {
    const {data} = props;
    console.log(data)
    return (
        <div className={'row'.css()}>
            {
                data.map((item,index) => {
                    const price = new Intl.NumberFormat().format(item.price);
                    if(index === 0) {
                        return (
                            <div className={'d-inline item'.css()} key={index}>
                                <div className={'item_product_main box-shadow-hover'.css()}>
                                    <div className={'product-thumpnail'.css()}>
                                        <img src={'https://cdn.wheystore.vn/' + item.image} height={235}/>
                                        
                                    </div>
                                    <div className={'product-info d-flex flex-column'.css()}>
                                        <span className={'item-title'.css()}>{item.name}</span>
                                        <span>{item.intro_short}</span>
                                        <Rate disabled defaultValue={Number(item.rate)} />
                                        <span className={'item-price'.css()}>{price}đ</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div className={'d-inline item'.css()} key={index}>
                            <div className={'item_product_main'.css()}>
                                <div className={'product-thumpnail'.css()}>
                                    <img src={'https://cdn.wheystore.vn/' + item.image} height={235}/>
                                    <div className={'action'.css()}>
                                        <a title="Xem nhanh" href='#' className={'view btn'.css()} />
                                        <button>a2</button>
                                    </div>
                                </div>
                                <div className={'product-info d-flex flex-column'.css()}>
                                    <span className={'item-title'.css()}>{item.name}</span>
                                    <span>{item.intro_short}</span>
                                    <Rate disabled defaultValue={Number(item.rate)} />
                                    <span className={'item-price'.css()}>{price}đ</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
