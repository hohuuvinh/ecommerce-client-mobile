import React from 'react';
import Styles from './css/ProductsRelate.module.css'

function ProductsRelate(props) {
    return (
        <div className={Styles.relate_box}>
            <p className={Styles.relate_title}>Gợi ý cho bạn</p>
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-6 p-1 mb-2">
                        <img className={Styles.img_products} src="https://cf.shopee.vn/file/4024a8f87eb49ea7b0d81503121c86a9_tn" width="100%" height="160px" />
                        <div className={Styles.img_products_box}>
                            <img src="images/icons/ic_discount.svg" width="100%" />
                            <p className={Styles.text_discount}>Giảm <br />Giá</p>
                            <p className={Styles.text_percent}>10%</p>
                        </div>
                        <p className={Styles.text_products}>Balo nữ đẹp đi học thời trang hàn cute dễ thương cá tính giá rẻ BL85 (Không móc treo)</p>
                        <p className={`${Styles.text_price} cl`}>19.000đ</p>
                        <p className={Styles.text_seller}>Đã bán 20</p>
                        <div className="clear__both" />
                    </div>
                    <div className="col-6 p-1 mb-2">
                        <img className={Styles.img_products} src="https://cf.shopee.vn/file/4024a8f87eb49ea7b0d81503121c86a9_tn" width="100%" height="160px" />
                        <div className={Styles.img_products_box}>
                            <img src="images/icons/ic_discount.svg" width="100%" />
                            <p className={Styles.text_discount}>Giảm <br />Giá</p>
                            <p className={Styles.text_percent}>10%</p>
                        </div>
                        <p className={Styles.text_products}>Balo nữ đẹp đi học thời trang hàn cute dễ thương cá tính giá rẻ BL85 (Không móc treo)</p>
                        <p className={`${Styles.text_price} cl`}>19.000đ</p>
                        <p className={Styles.text_seller}>Đã bán 20</p>
                        <div className="clear__both" />
                    </div>
                    <div className="col-6 p-1 mb-2">
                        <img className={Styles.img_products} src="https://cf.shopee.vn/file/4024a8f87eb49ea7b0d81503121c86a9_tn" width="100%" height="160px" />
                        <div className={Styles.img_products_box}>
                            <img src="images/icons/ic_discount.svg" width="100%" />
                            <p className={Styles.text_discount}>Giảm <br />Giá</p>
                            <p className={Styles.text_percent}>10%</p>
                        </div>
                        <p className={Styles.text_products}>Balo nữ đẹp đi học thời trang hàn cute dễ thương cá tính giá rẻ BL85 (Không móc treo)</p>
                        <p className={`${Styles.text_price} cl`}>19.000đ</p>
                        <p className={Styles.text_seller}>Đã bán 20</p>
                        <div className="clear__both" />
                    </div>
                    <div className="col-6 p-1 mb-2">
                        <img className={Styles.img_products} src="https://cf.shopee.vn/file/4024a8f87eb49ea7b0d81503121c86a9_tn" width="100%" height="160px" />
                        <div className={Styles.img_products_box}>
                            <img src="images/icons/ic_discount.svg" width="100%" />
                            <p className={Styles.text_discount}>Giảm <br />Giá</p>
                            <p className={Styles.text_percent}>10%</p>
                        </div>
                        <p className={Styles.text_products}>Balo nữ đẹp đi học thời trang hàn cute dễ thương cá tính giá rẻ BL85 (Không móc treo)</p>
                        <p className={`${Styles.text_price} cl`}>19.000đ</p>
                        <p className={Styles.text_seller}>Đã bán 20</p>
                        <div className="clear__both" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsRelate;