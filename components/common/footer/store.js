import React, { Component } from 'react'
import appRoutes from '../../../routes/appRoutes'

const routerFooter = [
    {
        name: "Trang chủ",
        path: appRoutes.home.path,
        asPath: appRoutes.home.asPath
    },
    {
        name: "Kiến thức Gym",
        path: "#",
        asPath: "#"
    },
    {
        name: "Phản ánh, khiếu nại",
        path: "",
        asPath: ""
    }
];

export default function Store() {
    return (
        <div className={'d-flex justify-content-between py-3'.css()}>
            <div>Copy right ©2018 bởi WheyStore</div>
            <div className={'d-flex justify-content-between'.css()}>
                {
                    routerFooter.map((item,index) => {
                        return (
                        <div key={index} className={'d-flex justify-content-between'.css()}>
                            <div  className={'mr-4'.css()}>{item.name}</div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}