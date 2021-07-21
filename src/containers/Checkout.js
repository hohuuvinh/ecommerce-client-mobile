import React from 'react';
import CheckoutStory from '../components/CheckoutStory';
import Styles from './css/Checkout.module.css';
import { NavLink } from "react-router-dom";
function Checkout(props) {
    return (
        <div>
            <div className={Styles.header_box_main}>
                <div className={Styles.header}>
                    <NavLink exact to="/gio-hang" onClick={props.onProgress}>
                        <div className="cursor back_box">
                            <svg fill="#078e49" viewBox="0 0 22 17" className="stardust-icon stardust-icon-back-arrow yGpYhu"><g stroke="none" strokeWidth={1} fillRule="evenodd" transform="translate(-3, -6)"><path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z" /></g></svg>
                        </div>
                    </NavLink>
                    <p className={`cl ${Styles.change_button}`} />
                    <p className={Styles.cart_title_text}>Thanh toán</p>
                    <div className="clear__both" />
                </div>
            </div>
            <div className={Styles.checkout_box_main}>
                <div className={Styles.checkout_fotter}>
                    <div className={Styles.checkout_button}>
                        <p>Đặt hàng</p>
                    </div>
                    <div className={Styles.total_box}>
                        <p className={Styles.total_money}>Tổng thanh toán</p>
                        <div className="clear__both" />
                        <p className={Styles.total_number}>200.000đ</p>
                    </div>
                    <div className="clear__both" />
                </div>
            </div>
            <div className={Styles.checkout_info_main}>
                <div>
                    <div className={Styles.checkout_info_address}>
                        <div className={Styles.icon}>
                            <img alt="" src="images/icons/ic_location.svg" height="100%" />
                        </div>
                        <div className={Styles.text}>
                            <p className="mb-1">Địa chỉ nhận hàng</p>
                            <p className="mb-0">Huu Huu | +84799438990<br />51 Bàu Mạc 18, Quận Liên Chiểu, Phường Hòa Khách Bắc, Đà Nẵng</p>
                        </div>
                        <div className={Styles.icon_right}>
                            <i className="fa fa-angle-right" aria-hidden="true" />
                        </div>
                    </div>
                    <div className={Styles.line_address}>
                        <img alt="" src="images/icons/line_payment.svg" width="100%" height="100%" />
                    </div>

                    <CheckoutStory />

                    <div className={Styles.ship_box_main}>
                        <div className={Styles.ship_title}>
                            <p>Phương thức vận chuyển (Nhấn để chọn)</p>
                        </div>
                        <p>Vận chuyển nhanh</p>
                        <div className={Styles.ship_company}>
                            <p className={Styles.company}>BEST Express</p>
                            <p className={Styles.time}>Nhận hàng vào ngày 24 Th07 - 29 Th07</p>
                        </div>
                        <div className={Styles.ship_fee}>
                            <p>65.000đ<i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
                        </div>
                        <div className="clear__both" />
                    </div>
                    <div>
                        <div className={Styles.tab}>
                            <p className={Styles.tab_left_text}>Ghi chú:</p>
                            <p className={Styles.tab_right_write}>Lưu ý cho người bán...</p>
                            <div className="clear__both" />
                        </div>
                        <div className={Styles.tab}>
                            <p className={Styles.tab_left_text}>Tổng số tiền (1 sản phẩm)</p>
                            <p className={`cl ${Styles.total}`}>700.000đ</p>
                            <div className="clear__both" />
                        </div>
                    </div>
                    <div>
                        <div className={Styles.tab}>
                            <p className={Styles.tab_left_text}><i className="fa fa-book mr-2 cl" aria-hidden="true" />Mã khuyến mãi</p>
                            <p className={Styles.tab_right_write}>Chọn mã khuyến mãi<i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
                            <div className="clear__both" />
                        </div>
                        <div className={Styles.tab}>
                            <div className={Styles.icon_money}>
                                <img alt="" src="images/icons/ic_money.svg" height="110%" />
                            </div>
                            <p className={`${Styles.tab_left_text} ml-1`}>Thanh toán</p>
                            <p className={`${Styles.tab_right_write} cl`}>Thanh toán khi nhận hàng<i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
                            <div className="clear__both" />
                        </div>
                        <div className={Styles.checkout_total_box}>
                            <p className={Styles.text_left}>Tổng tiền hàng</p>
                            <p className={Styles.text_right}>273.000đ</p>
                            <div className="clear__both" />
                            <p className={Styles.text_left}>Tổng tiền vận chuyển</p>
                            <p className={Styles.text_right}>73.000đ</p>
                            <div className="clear__both" />
                            <p className={Styles.text_left}>Khuyến mãi</p>
                            <p className={Styles.text_right}>-75.000đ</p>
                            <div className="clear__both" />
                            <p className={Styles.total_text}>Tổng thanh toán</p>
                            <p className={`cl ${Styles.total_number_ok}`}>73.000đ</p>
                            <div className="clear__both" />
                        </div>
                    </div>
                    <div className={Styles.regulation_box}>
                        <div className={Styles.icon}>
                            <img alt="" src="images/icons/ic_regulation.svg" width="100%" />
                        </div>
                        <div className={Styles.text}>
                            <p>
                                Nhấn "Đặt hàng" đồng nghia với việc bạn đồng ý tuân theo <a href>
                                    Điều khoản dịch vụ
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;