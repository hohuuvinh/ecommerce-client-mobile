import React from 'react';
import Styles from './css/CartBottom.module.css';
import { NavLink } from "react-router-dom";

function CartBottom(props) {
    return (
        <div className={Styles.buy_box_main}>
            <div className={Styles.buy_box}>
                <div className={Styles.icon_tick}>
                    <i className="fa fa-book" aria-hidden="true" />
                </div>
                <p className={Styles.text_tick}>Thẻ giảm giá</p>
                <p className={Styles.choose_tick}>Chọn hoặc nhập mã
                    <i className="fa fa-chevron-right" aria-hidden="true" />
                </p>
                <div className="clear__both" />
            </div>
            <div className={Styles.buy_box_bar}>
                <div className={Styles.choose_all_box}>
                    <div>
                        <label className={`${Styles.control} ${Styles.control__checkbox}`}>
                            <input type="checkbox" />
                            <div className={Styles.control__indicator} />
                        </label>
                    </div>
                    <p>Tất cả</p>
                </div>
                <NavLink exact to="/thanh-toan" onClick={props.onProgress}>
                    <div className={Styles.buy_button}>
                        <p>Mua hàng (0)</p>
                    </div>
                </NavLink>
                <div className={Styles.total_box}>
                    <p className={Styles.total_money}>Tổng tiền</p>
                    <div className="clear__both" />
                    <p className={Styles.total_number}>200.000đ</p>
                </div>
                <div className="clear__both" />
            </div>
        </div>
    );
}

export default CartBottom;