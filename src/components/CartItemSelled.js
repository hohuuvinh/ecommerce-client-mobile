import React from 'react';
import Styles from "./css/CartItemSelled.module.css";

function CartItemSelled(props) {
    return (
        <div>
        <div className={Styles.relate_box}>
          <div className="container-fluid p-0">
            <div className="row m-0">
              <div className="col-6 p-1 mb-1">
                <img alt="" className={Styles.img_products} src="https://cf.shopee.vn/file/4024a8f87eb49ea7b0d81503121c86a9_tn" width="100%" height="160px" />
                <div className={Styles.img_products_box}>
                  <img alt="" src="images/icons/ic_discount.svg" width="100%" />
                  <p className={Styles.text_discount}>Giảm <br />Giá</p>
                  <p className={Styles.text_percent}>10%</p>								
                </div>
                <p className={Styles.text_products}>Balo nữ đẹp đi học thời trang hàn cute dễ thương cá tính giá rẻ BL85 (Không móc treo)</p>
                <p className={`${Styles.text_price} cl`}>19.000đ</p>
                <p className={Styles.text_seller}>Đã mua 1</p>
                <div className="clear__both" />								
              </div>
              <div className="col-6 p-1 mb-1">
                <img alt="" className={Styles.img_products} src="https://cf.shopee.vn/file/4024a8f87eb49ea7b0d81503121c86a9_tn" width="100%" height="160px" />
                <div className={Styles.img_products_box}>
                  <img alt="" src="images/icons/ic_discount.svg" width="100%" />
                  <p className={Styles.text_discount}>Giảm <br />Giá</p>
                  <p className={Styles.text_percent}>10%</p>								
                </div>
                <p className={Styles.text_products}>Balo nữ đẹp đi học thời trang hàn cute dễ thương cá tính giá rẻ BL85 (Không móc treo)</p>
                <p className={`${Styles.text_price} cl`}>19.000đ</p>
                <p className={Styles.text_seller}>Đã mua 2</p>
                <div className="clear__both" />								
              </div>
            </div>
          </div>
        </div>
      </div>
        
    );
}

export default CartItemSelled;