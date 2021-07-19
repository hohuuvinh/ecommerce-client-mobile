import React from 'react';
import Styles from "./css/CartItem.module.css";

function CartItem(props) {
    return (
        <div>
            <div className={Styles.story_box}>
                <div className={Styles.check_story}>
                    <label className={`${Styles.control} ${Styles.control__checkbox}`}>
                        <input type="checkbox" />
                        <div className={Styles.control__indicator} />
                    </label>
                </div>
                <p className={Styles.story_name}>Tổng Kho Gia Dụng Humy</p>
                <p className={Styles.change_buttton_story}>Sửa</p>
                <div className="clear__both" />
            </div>
            <div>
                <div className={Styles.item_product}>
                    <div className={Styles.item_product_check}>
                        <label className={`${Styles.control} ${Styles.control__checkbox}`}>
                            <input type="checkbox" />
                            <div className={Styles.control__indicator}>
                            </div>
                        </label>
                    </div>
                    <div className={Styles.item_product_image}>
                        <img src="https://cf.shopee.vn/file/d79fcd5348aba86a15c07a1ddfae7e0f_tn" width="100%" height="100%" />
                    </div>
                    <div className={Styles.item_product_info_box}>
                        <p>Máy ép chậm rau củ quả</p>
                        <div className={Styles.type}>
                            <p>Phân loại: xanh</p>
                            <i className="fa fa-caret-down" aria-hidden="true" />
                            <i className="fa fa-caret-up" aria-hidden="true" style={{ display: 'none' }} />
                            <div className="clear__both" />
                        </div>
                        <div className={Styles.price}>
                            <p className={Styles.price_item}>1.000.000đ</p>
                            <p className={Styles.discount_item}>729.000đ</p>
                            <div className="clear__both" />
                            <div className={Styles.quanlity_box_item}>
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
                            <div className={Styles.rest_box}>
                                <p>Còn 2 sản phẩm</p>
                            </div>
                            <div className="clear__both" />
                        </div>
                    </div>
                    <div className="clear__both" />
                </div>
            </div>


            <div>
                <div className={Styles.item_product}>
                    <div className={Styles.item_product_check}>
                        <label className={`${Styles.control} ${Styles.control__checkbox}`}>
                            <input type="checkbox" />
                            <div className={Styles.control__indicator}>
                            </div>
                        </label>
                    </div>
                    <div className={Styles.item_product_image}>
                        <img src="https://cf.shopee.vn/file/d79fcd5348aba86a15c07a1ddfae7e0f_tn" width="100%" height="100%" />
                    </div>
                    <div className={Styles.item_product_info_box}>
                        <p>Máy ép chậm rau củ quả</p>
                        <div className={Styles.type}>
                            <p>Phân loại: xanh</p>
                            <i className="fa fa-caret-down" aria-hidden="true" />
                            <i className="fa fa-caret-up" aria-hidden="true" style={{ display: 'none' }} />
                            <div className="clear__both" />
                        </div>
                        <div className={Styles.price}>
                            <p className={Styles.price_item}>1.000.000đ</p>
                            <p className={Styles.discount_item}>729.000đ</p>
                            <div className="clear__both" />
                            <div className={Styles.quanlity_box_item}>
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
                            <div className={Styles.rest_box}>
                                <p>Còn 2 sản phẩm</p>
                            </div>
                            <div className="clear__both" />
                        </div>
                    </div>
                    <div className="clear__both" />
                </div>
            </div>
        </div>
        
    );
}

export default CartItem;