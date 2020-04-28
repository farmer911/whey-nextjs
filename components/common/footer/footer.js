import React, { Component } from 'react'
import Store from './store'
import LocalStoreShop from './localStoreShop'
import Introduce from './introduce'

export default function Footer (props){
    return (
        <div className={'footer'.css()}>
            <div className={'container'.css()}>
                <div className={'pt-5'.css()}>
                    <Introduce />
                </div>
                <div className={'d-flex flex-column'.css()}>
                    <LocalStoreShop />
                    <Store />
                </div>
            </div>
        </div>
    )
}