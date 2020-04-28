import React from 'react'

export default function Menu() {
    return (
        <div className={'w-100 color-menu'.css()}>
            <div className={'container'.css()}>
                <div className={'menu d-flex justify-content-center'.css()}>
                    <div className={'d-flex'.css()}>
                        <ul className={'d-flex text-center'.css()}>
                            <li><a className={'link-menu'.css()}>Trang chủ</a></li>
                            <li><a className={'link-menu'.css()}>Sữa tăng cân</a></li>
                            <li><a className={'link-menu'.css()}>Whey Protein</a></li>
                            <li><a className={'link-menu'.css()}>BCAA</a></li>
                            <li><a className={'link-menu'.css()}>Tăng sức mạnh</a></li>
                            <li><a className={'link-menu'.css()}>Vitamin, khoáng</a></li>
                            <li><a className={'link-menu'.css()}>Giảm mỡ</a></li>
                            <li><a className={'link-menu'.css()}>Phụ kiện</a></li>
                            <li><a className={'link-menu'.css()}>COMBO X2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
