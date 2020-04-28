import React from 'react'
import {Icon} from 'antd'

export default function Title() {
    return (
        <div className={'row my-3'.css()}>
            <div className={'d-flex justify-content-between w-100'.css()}>
                <div className={'d-flex'.css()}>
                    <div className={'account'.css()}>
                        <div className={'d-flex'.css()}>
                            <div className={'style-icon'.css()}><Icon type="user"/></div>
                            <div>Tài khoản</div>
                        </div>
                    </div>
                    <div className={'account'.css()}>
                        <div></div>
                        CHAT or CALL 091.901.3030
                    </div>
                </div>
                <img src='./img/logo-wheystore.png'/>
                <div className={'d-flex'.css()}>
                    <div className={'account'.css()}>
                        <div className={'d-flex'.css()}>
                            <div className={'style-icon'.css()}><Icon type="search" /></div>
                            <div>Tìm kiếm</div>
                        </div>
                    </div>
                    <div className={'account'.css()}>
                        <div className={'d-flex'.css()}>
                            <div className={'style-icon'.css()}><Icon type="shopping-cart" /></div>
                            <div>Giỏ hàng (0)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
