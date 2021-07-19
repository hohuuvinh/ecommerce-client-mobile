import React from 'react';
import Styles from './css/CategoryIcon.module.css'

function CategoryIcon(props) {
    return (
        <div className={Styles.categoris_icon_box}>
            <div className={Styles.banner}>
                <img src="https://cdn.tgdd.vn/bachhoaxanh/banners/2505/cu-tre-cu-chat-cu-pepsi-0907202163751.png" height="100%" width="100%" />
            </div>
            <div className={Styles.categoris_item}>
                <div style={{}}>
                    <img src="images/icons/home_sale.svg" width="100%" height="100%" />
                </div>
                <p>Mã khuyến mãi</p>
            </div>
            <div className={Styles.categoris_item}>
                <div>
                    <img src="images/icons/home_freeship.svg" width="100%" height="100%" />
                </div>
                <p>Miễn phí ship</p>
            </div>
            <div className={Styles.categoris_item}>
                <div>
                    <img src="images/icons/home_flashsale.svg" width="100%" height="100%" />
                </div>
                <p>Flash sale</p>
            </div>
            <div className={Styles.categoris_item}>
                <div>
                    <img src="images/icons/home_food.svg" width="100%" height="100%" />
                </div>
                <p>Món ăn</p>
            </div>
            <div className={Styles.categoris_item}>
                <div>
                    <img src="images/icons/home_topsale.svg" width="100%" height="100%" />
                </div>
                <p>Top bán chạy</p>
            </div>
            <div className={Styles.categoris_item}>
                <div>
                    <img src="images/icons/home_cardmobile.svg" width="100%" height="100%" />
                </div>
                <p>Thẻ điện thoại</p>
            </div>
            <div className={Styles.categoris_item}>
                <div>
                    <img src="images/icons/home_cinematick.svg" width="100%" height="100%" />
                </div>
                <p>Vé xem phim</p>
            </div>
            <div className={Styles.categoris_item}>
                <div>
                    <img src="images/icons/home_payment.svg" width="100%" height="100%" />
                </div>
                <p>Quà thanh toán</p>
            </div>
        </div>
    );
}

export default CategoryIcon;