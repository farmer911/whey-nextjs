import React from 'react'

export default function Item(props) {
    const {data} = props;
    return (
        <div className={'col-md-4'.css()}>
            <div className={'row'.css()}>
                <div className={'d-flex flex-column my-3'.css()}>
                {
                    data.map((item,index) => {
                        if(index === 0) {
                            return (
                                <h4 className={'link-title'.css()} key={index}>{item}</h4>
                            )
                        }
                        return (
                            <div className={''.css()} key={index}>
                                <span className={'link'.css()}>{item}</span>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </div>
    )
}
