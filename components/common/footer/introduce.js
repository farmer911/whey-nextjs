import React from 'react'
import Item from './item'

const data = ["Giới thiệu chung","Chính sách đổi trả hàng","Quy định chung", "Liên hệ & khiếu nại"
];

const data2= ["Hướng dẫn đặt hàng","Hướng dẫn thanh toán","Chính sách vận chuyển","Chính sách bảo mật","Chính sách bảo hành"];

const data3= ["Kiểm tra tích điểm", "Săn hàng giá rẻ","Kiến thức tập Gym","Chế độ dinh dưỡng"];

export default function Introduce() {
    return (
        <div className={'border-footer container'.css()}>
            <div className={'row'.css()}>
                <div className={'col-md-6'.css()}>
                    <div className={'row'.css()}>
                        <Item data={data} />
                        <Item data={data2} />
                        <Item data={data3} />
                    </div>
                </div>
                <div className={'col-md-6'.css()}>
                    <div className={'row'.css()}>
                        <div className={'col-md-6 my-3'.css()}>
                            <div className={'row'.css()}>
                                <div className={'d-flex flex-column'.css()}>
                                    <h4 className={'link-title'.css()}>VỀ CHÚNG TÔI</h4>
                                    <div className={'d-flex mt-2'.css()}>
                                        <div className={'image mr-2'.css()}></div>
                                        <div className={'d-flex flex-column'.css()}>
                                            <div>Tư vấn & đặt hàng:</div>
                                            <div className={'phone-footer'.css()}>091.901.3030</div>
                                        </div>
                                    </div>
                                    <div className={'my-1'.css()}>Phục vụ tất cả các ngày trong tuần</div>
                                    <div className={'my-1'.css()}>Bắt đầu mở cửa bán hàng từ 8h30</div>
                                    <div className={'bank mb-2'.css()}>Danh sách tài khoản ngân hàng</div>
                                    <div className={'my-2'.css()}>Chấp nhận thanh toán</div>
                                    <img src='./img/payment.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
