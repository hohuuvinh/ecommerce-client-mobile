import React from 'react';
import Styles from './css/Header.module.css';
import { NavLink } from "react-router-dom";

function Header(props) {
    return (
        <div className={Styles.header_box_child}>
                <div className={`bg ${Styles.header_box}`}>
                    <div className={Styles.search_box}>
                        <div className={Styles.search_icon_box}>
                            <div>
                                <img alt="" src="images/icons/search.svg" width="100%" />
                            </div>
                        </div>
                        <input className={Styles.input_search} type="text" placeholder="Hôm nay muốn mua gì?" />
                    </div>
                    <NavLink exact to="/gio-hang" onClick={props.onProgress}>
                    <div className={Styles.cart_box}>
                        <div>
                            <img alt="" src="images/icons/cart.png" width="72%" />
                        </div>
                    </div>
                    </NavLink>
                    <NavLink exact to="/dang-nhap" onClick={props.onProgress}>
                    <div className={Styles.account_box}>
                        <div>
                        <img  alt="" src="images/icons/ic_user.png" width="72%" />
                        </div>
                    </div>
                    </NavLink>
                </div>
            </div>
    );
}

export default Header;