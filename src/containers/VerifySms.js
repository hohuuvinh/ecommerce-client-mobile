import React, { useState } from 'react';
import Styles from './css/VerifySms.module.css';
import { validEmail, validPhone } from './../Regex';
import { NavLink } from "react-router-dom";


function VerifySms(props) {
    const [formData, setFormData] = useState({ emailOrPhone: "" })
    const [checkSubmit, setCheckSubmit] = useState(false);
    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        if (validEmail.test(value) || validPhone.test(value)) {
            setCheckSubmit(true)
        } else {
            setCheckSubmit(false)
        }
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const submitFormForget = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={submitFormForget}>
                <div className={Styles.header_box_main}>
                    <NavLink exact to="/dang-nhap" onClick={props.onProgress}>
                        <div className={Styles.back_button}>
                            <svg fill="#078e49" viewBox="0 0 22 17" className="stardust-icon stardust-icon-back-arrow yGpYhu"><g stroke="none" strokeWidth={1} fillRule="evenodd" transform="translate(-3, -6)"><path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z" /></g></svg>
                        </div>
                    </NavLink>
                    <div className="clear__both" />
                </div>
                <div className={Styles.input_box_main}>
                    <p className={`cl ${Styles.forgot_title}`}>Lấy lại mật khẩu</p>
                    <div className={Styles.email_input_box}>
                        <input name="emailOrPhone" value={formData.emailOrPhone} onChange={handleChange} placeholder="Số điện thoại / Email" />
                    </div>
                </div>
                <div className={Styles.box_foter}>
                    <button disabled={!checkSubmit} className={checkSubmit ? `${Styles.box_button_forgot} bg ${Styles.enable}` : `${Styles.box_button_forgot} bg`}>
                        Tiếp theo
                    </button>
                </div >
            </form>
        </div >
    );
}

export default VerifySms;