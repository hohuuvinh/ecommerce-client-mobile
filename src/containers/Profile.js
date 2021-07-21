import React from 'react';
import Styles from './css/Profile.module.css';
import { NavLink } from "react-router-dom";

function Profile(props) {
  return (
    <div>
      <div className={`${Styles.header_box_main} bg`}>
        <div className={Styles.header}>
          <NavLink exact to="/" onClick={props.onProgress}>
            <div className="cursor back_box">
              <svg fill="#fff" viewBox="0 0 22 17" className="stardust-icon stardust-icon-back-arrow yGpYhu"><g stroke="none" strokeWidth={1} fillRule="evenodd" transform="translate(-3, -6)"><path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z" /></g></svg>
            </div>
          </NavLink>
          <p className={`${Styles.change_button} cl`}>Cửa hàng của tôi<i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
          <div className="clear__both" />
          <div className={Styles.profile_box_main}>
            <div className={Styles.avatar}>
              <img src="https://cf.shopee.vn/file/b4e7ea467771d5705fb562188551b10d_tn" />
            </div>
            <div className={Styles.name}>
              <p className="font-weight-bold mb-0 mt-1">Ho Huu Vinh</p>
              <p className={Styles.follow}>Người theo dõi 0 | Đang theo dõi 2</p>
            </div>
            <div className={Styles.logout}>
              <i className="fa fa-sign-out float-right" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.profile_manage_main}>
        <div>
          <div className={Styles.tab_box}>
            <p className={Styles.text_left}>Đơn mua</p>
            <p className={Styles.text_right}>Xem lịch sử mua hàng<i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
            <div className="clear__both" />
          </div>
          <div className={Styles.box_icon_main}>
            <div className={Styles.icon_box}>
              <div style={{ width: '40px' }}>
                <img alt="" src="images/icons/ic_pending.svg" width="100%" height="100%" />
              </div>
              <p>Chờ xác nhận</p>
            </div>
            <div className={Styles.icon_box}>
              <div>
                <img alt="" src="images/icons/ic_waiting.svg" width="100%" height="100%" />
              </div>
              <p>Chờ lấy hàng</p>
            </div>
            <div className={Styles.icon_box}>
              <div style={{ width: '55px' }}>
                <img alt="" src="images/icons/ic_ship.svg" width="100%" height="100%" />
              </div>
              <p>Đang giao</p>
            </div>
            <div className={Styles.icon_box}>
              <div>
                <img alt="" src="images/icons/ic_review.svg" width="100%" height="100%" />
              </div>
              <p>Đánh giá</p>
            </div>
          </div>
          <div className={Styles.tab_box}>
            <p className={Styles.text_left}>Khách hàng thân thiết</p>
            <p className={Styles.text_right}>Thanh viên bạc<i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
            <div className="clear__both" />
          </div>
          <div className={Styles.tab_box}>
            <p className={Styles.text_left}>Đã thích</p>
            <p className={Styles.text_right}>2 lượt thích<i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
            <div className="clear__both" />
          </div>
          <div className={Styles.tab_box}>
            <p className={Styles.text_left}>Đã xem gần đây</p>
            <p className={Styles.text_right}><i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
            <div className="clear__both" />
          </div>
          <div className={Styles.tab_box}>
            <p className={Styles.text_left}>Số dư tài khoản</p>
            <p className={Styles.text_right}><i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
            <div className="clear__both" />
          </div>
          <div className={Styles.tab_box}>
            <p className={Styles.text_left}>Đánh giá của tôi</p>
            <p className={Styles.text_right}><i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
            <div className="clear__both" />
          </div>
          <div className={Styles.tab_box}>
            <p className={Styles.text_left}>Mã giảm giá</p>
            <p className={Styles.text_right}><i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
            <div className="clear__both" />
          </div>
          <div className={Styles.tab_box}>
            <p className={Styles.text_left}>Thiết lập tài khoản</p>
            <p className={Styles.text_right}><i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
            <div className="clear__both" />
          </div>
          <div className={Styles.tab_box}>
            <p className={Styles.text_left}>Trung tâm trợ giúp</p>
            <p className={Styles.text_right}><i className="fa fa-angle-right ml-2" aria-hidden="true" /></p>
            <div className="clear__both" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;