import React, { Component } from 'react'

const data = [
    {
        name: 'WHEYSTORE PHỐ VỌNG',
        local: 'số 92 phố Vọng, Đống Đa, Hà Nội',
        time: 'Giờ mở cửa: 8h30 tới 23h đêm',
        phone: 'Hotline: 091.901.3030'
    },
    {
        name: 'WHEYSTORE CẦU GIẤY',
        local: 'số 92 phố Vọng, Đống Đa, Hà Nội',
        time: 'Giờ mở cửa: 8h30 tới 23h đêm',
        phone: 'Hotline: 091.901.3030'
    },
    {
        name: 'WHEYSTORE HÀ ĐÔNG',
        local: 'số 92 phố Vọng, Đống Đa, Hà Nội',
        time: 'Giờ mở cửa: 8h30 tới 23h đêm',
        phone: 'Hotline: 091.901.3030'
    },
    {
        name: 'WHEYSTORE ĐÀ NẴNG',
        local: 'số 92 phố Vọng, Đống Đa, Hà Nội',
        time: 'Giờ mở cửa: 8h30 tới 23h đêm',
        phone: 'Hotline: 091.901.3030'
    },
    {
        name: 'WHEYSTORE TÂN BÌNH',
        local: 'số 92 phố Vọng, Đống Đa, Hà Nội',
        time: 'Giờ mở cửa: 8h30 tới 23h đêm',
        phone: 'Hotline: 091.901.3030'
    },
    {
        name: 'WHEYSTORE QUẬN 10',
        local: 'số 92 phố Vọng, Đống Đa, Hà Nội',
        time: 'Giờ mở cửa: 8h30 tới 23h đêm',
        phone: 'Hotline: 091.901.3030'
    },
]

export default function LocalStoreShop(){
    return (
        <div className={'border-footer'.css()}>
            <div className={'d-flex flex-column'.css()}>
                <h3 className={'text-center title-footer-store'.css()}>HỆ THỐNG CỬA HÀNG BÁN LẺ CỦA WHEYSTORE</h3>
                <div className={'row'.css()}>
                        {
                            data.map((item,index) => (
                                <div className={'col-md-4 py-3'.css()} key={index}>
                                    <div className={'d-flex flex-column'.css()}>
                                        <span className={'topic my-3'.css()}>{item.name}</span>
                                        <span className={'label'.css()}>{item.local}</span>
                                        <span className={'label'.css()}>{item.time}</span>
                                        <span className={'label'.css()}>{item.phone}</span>
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}