import React from 'react';
import Styles from './css/CartChooseType.module.css';

function CartChooseType(props) {
    return (
        <div className={Styles.change_type_box} style={{display:"none"}}>
            <div>
                <div className={Styles.close_tab}>
                    <i className="fa fa-angle-down" aria-hidden="true" />
                </div>
                <div className={Styles.products_info}>
                    <div className={Styles.products_info_image}>
                        <img src="https://cf.shopee.vn/file/d79fcd5348aba86a15c07a1ddfae7e0f_tn" width="100%" />
                    </div>
                    <div className={Styles.products_info_text}>
                        <p className={Styles.title}>Máy ép chậm rau củ quả</p>
                        <p className={Styles.price}>1.000.000đ</p>
                        <p className={Styles.price_discount}>729.000đ</p>
                        <div className="clear__both" />
                        <p className={Styles.total}>Kho: 3200</p>
                    </div>
                </div>
            </div>
            <div>
                <p className={Styles.choose_color}>Màu sắc</p>
                <div>
                    <p className={`${Styles.products_color} ${Styles.color_active}`}>Hồng</p>
                    <p className={Styles.products_color}>Xanh</p>
                    <p className={Styles.products_color}>Đỏ</p>
                    <p className={Styles.products_color}>Tím</p>
                    <div className="clear__both" />
                </div>
            </div>
            <div className={Styles.quanlity_box}>
                <p>Số lượng</p>
                <div className={Styles.quanlity_up_down}>
                    <div className={Styles.quanlity_button}>
                        <i className="fa fa-minus" aria-hidden="true" />
                    </div>
                    <div className={Styles.quanlity_number}>
                        1
                    </div>
                    <div className={Styles.quanlity_button}>
                        <i className="fa fa-plus" aria-hidden="true" />
                    </div>
                </div>
                <div className="clear__both" />
            </div>
            <div className={Styles.submit_type}>
                Đồng ý
            </div>
        </div>
    );
}

export default CartChooseType;