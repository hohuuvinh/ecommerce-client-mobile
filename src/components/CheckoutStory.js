import React from 'react';
import Styles from './css/CheckoutStory.module.css';

function CheckoutStory(props) {
    return (
        <div className={Styles.cart_item_box}>
            <div className={Styles.image_story}>
                <img alt="" src="images/icons/ic_story.svg" width="85%" />
            </div>
            <div className={Styles.name_story}>
                <p>Tổng kho gia dụng Humy</p>
            </div>
            <div className="clear__both" />
            <div className={Styles.story_item}>
                <div className={Styles.item_image}>
                    <img alt="" src="https://cf.shopee.vn/file/0f01c350a669ebdac21574af319b0a57" width="100%" />
                </div>
                <div className={Styles.item_info}>
                    <p className={Styles.title}>Máy ép chậm rau  NineShield</p>
                    <p className={Styles.type}>Phân loại: vàng</p>
                    <p className={Styles.price}>750.000đ</p>
                    <p className={Styles.quanlity}>x1</p>
                    <div className="clear__both" />
                </div>
            </div>
            <div className={Styles.story_item}>
                <div className={Styles.item_image}>
                    <img alt="" src="https://cf.shopee.vn/file/0f01c350a669ebdac21574af319b0a57" width="100%" />
                </div>
                <div className={Styles.item_info}>
                    <p className={Styles.title}>Máy ép chậm rau  NineShield</p>
                    <p className={Styles.type}>Phân loại: vàng</p>
                    <p className={Styles.price}>750.000đ</p>
                    <p className={Styles.quanlity}>x1</p>
                    <div className="clear__both" />
                </div>
            </div>
        </div>
    );
}

export default CheckoutStory;