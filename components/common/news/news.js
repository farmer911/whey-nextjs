import React from 'react'

const link = {
    url: 'https://www.wheystore.vn/upload/news_optimize/main/1056_catalog_mac_3_sai_lam_nay____ung_hoi_tai_sao_tap_gym_khong_giam_can_main_1587725922.jpg'
}

const subNew = [
    {
        url: 'https://cdn.wheystore.vn/upload/news_optimize/main/1055_catalog___au_cang_co__can_lam_gi_khi_bi_cang_co__main_1587725922.jpg',
        title: 'Đau căng cơ: Cần làm gì khi bị căng cơ?',
        time: 'Thứ tư 08/04/2020'
    },
    {
        url: 'https://cdn.wheystore.vn/upload/news_optimize/main/1054_catalog___ung_de_chuot_rut_anh_huong_toi_buoi_tap_main_1587725921.jpg',
        title: 'Đừng để chuột rút ảnh hưởng tới buổi tập ',
        time: 'Thứ tư 08/04/2020'
    },
    {
        url: 'https://cdn.wheystore.vn/upload/news_optimize/main/1053_catalog_tranh____phinh_tren_teo_duoi____o_nam_gioi__nen_su_dung_bai_tap_chan_nao__main_1587725921.jpg',
        title: 'Tránh “phình trên teo dưới” ở nam giới, nên sử dụng bài tập chân nào?',
        time: 'Thứ tư 08/04/2020'
    },
    {
        url: 'https://cdn.wheystore.vn/upload/news_optimize/main/1052_catalog_goi_y_thuc_don_eat_clean_7_ngay_tang_co_dot_mo_main_1587725920.jpg',
        title: 'Gợi ý thực đơn eat clean 7 ngày tăng cơ đốt mỡ',
        time: 'Thứ tư 08/04/2020'
    },
    {
        url: 'https://cdn.wheystore.vn/upload/news_optimize/main/1051_catalog_cach_thuc_hien_deadlift_dung_ky_thuat_main_1587725918.jpg',
        title: 'Cách thực hiện Deadlift đúng kỹ thuật',
        time: 'Thứ tư 08/04/2020'
    },
]

export default function News(props) {
    return (
        <div className={'container'.css()}>
            <div className={'row'.css()}>
                <div className={'col-md-6'.css()}>
                    <div className={'pr-1 mb-3'.css()}>
                        <a href="#">
                            <div className={'card-new'.css()} style={{background: `url(${link.url})`, backgroundSize: 'cover', cursor: 'pointer'}}>
                                <div className={'about'.css()} style={{zIndex: 9}}>
                                    <h3 className={'news-title'.css()}>Mắc 3 sai lầm này: Đừng hỏi tại sao tập gym không giảm cân</h3>
                                    <div className={'news-date-time'.css()}>
                                        <span>Thứ bảy 11/04/2020 (0) Bình luận</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={'col-md-6'.css()}>
                    {
                        subNew.map((item,index) => {
                            return (
                                <div className={'d-flex mb-3'.css()} key={index}>
                                    <img width={134} src={item.url}/>
                                    <a className={'ml-2'.css()}>
                                        <span>{item.title}</span>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
