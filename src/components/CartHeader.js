import React from 'react';
import Styles from './css/CartHeader.module.css';
import { NavLink } from "react-router-dom";

function CartHeader(props) {
    return (
        <div className={Styles.header_box_main}>
            <div className={Styles.header}>
                <NavLink exact to="/" onClick={props.onProgress}>
                    <div className="back_box">
                        <svg fill="#078e49" viewBox="0 0 22 17" className="stardust-icon stardust-icon-back-arrow yGpYhu"><g stroke="none" strokeWidth={1} fillRule="evenodd" transform="translate(-3, -6)"><path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z" /></g></svg>
                    </div>
                </NavLink>
                <p className={`${Styles.change_button} cl`}>Sửa</p>
                <p className={Styles.cart_title_text}>Giỏ hàng</p>
                <div className="clear__both" />
            </div>
            <div className={`${Styles.header_bar} cursor`}>
                <div onClick={()=>props.moveTab('all')} className={props.tab==='all'?Styles.active:""}>
                    <p>Tất cả</p>
                </div>
                <div onClick={()=>props.moveTab('discount')} className={props.tab==='discount'?Styles.active:""}>
                    <p>Giảm giá</p>
                </div>
                <div onClick={()=>props.moveTab('selled')} className={props.tab==='selled'?Styles.active:""}>
                    <p>Mua lần nữa</p>
                </div>
            </div>
        </div>
    );
}

export default CartHeader;