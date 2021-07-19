import React from 'react';
import Styles from './css/CategoryProducts.module.css';
function CategoryProducts(props) {
    return (
        <div className={Styles.categoris_box_products}>
            <p className={Styles.categoris_title}>Danh mục</p>
            <div className="scroll-x-hide">
                <div className={Styles.item_products_box}>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/tshirt.png" height="100%" />
                            </div>
                            <p>Thời trang nam</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/phone.png" width="100%" />
                            </div>
                            <p>Điện thoại &amp; phụ kiện</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/tivi.png" width="100%" />
                            </div>
                            <p>Đồ điện tử</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/laptop.png" width="100%" />
                            </div>
                            <p>Máy tính &amp; phụ kiện</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/camera.jpg" width="100%" />
                            </div>
                            <p>Máy ảnh &amp; máy quay phim</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/clock.jpg" width="100%" />
                            </div>
                            <p>Đồng hồ</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/dep.jpg" width="100%" />
                            </div>
                            <p>Giay dép nam</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/thietbigiadung.png" width="100%" />
                            </div>
                            <p>Thiết bị gia dụng</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/bong.png" width="100%" />
                            </div>
                            <p>Thể thao du lịch</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/xe.png" width="100%" />
                            </div>
                            <p>Oto xe máy xe điện</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/balo.png" width="100%" />
                            </div>
                            <p>Balo túi ví nam</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/toy.jpg" width="100%" />
                            </div>
                            <p>Đồ chơi</p>
                        </div>
                    </a>
                </div>
                <div className={Styles.item_products_box}>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/vay.png" height="100%" />
                            </div>
                            <p>Thời trang nữ</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/mevabe.png" width="100%" />
                            </div>
                            <p>Mẹ và bé</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/noi.jpg" width="100%" />
                            </div>
                            <p>Nhà cửa đời sống</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/sacdep.png" width="100%" />
                            </div>
                            <p>Sắc đẹp</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/mask.png" width="100%" />
                            </div>
                            <p>Sức khỏe</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/depnu.png" width="100%" />
                            </div>
                            <p>Giay dép nữ</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/tuisach.jpg" width="100%" />
                            </div>
                            <p>Túi ví nữ</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/nhan.png" width="100%" />
                            </div>
                            <p>Trang sức nữ</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/bachhoa.png" width="100%" />
                            </div>
                            <p>Bách hóa</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/sach.jpg" width="100%" />
                            </div>
                            <p>Dụng cụ học tập</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/men.png" width="100%" />
                            </div>
                            <p>Chăn ra gối đệm</p>
                        </div>
                    </a>
                    <a>
                        <div className={Styles.item_products}>
                            <div>
                                <img src="images/categoris/treem.png" width="100%" />
                            </div>
                            <p>Thời trang trẻ em</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CategoryProducts;