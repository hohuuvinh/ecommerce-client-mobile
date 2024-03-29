import React, { useEffect, useState } from 'react';
import Styles from './css/Signup.module.css';
import { NavLink } from "react-router-dom";
import { validEmail, validPhone } from './../Regex';

function Signup(props) {
    const [formData, setFormData] = useState({ emailOrPhone: "", password: "" })
    const [hideShowPassword, setHideShowPassword] = useState(false)
    const [checkSubmit,setCheckSubmit] = useState(false)
    const [errorSignup, setErrorSignup] = useState("")
    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setFormData({
            ...formData,
            [name]: value
        })
        if (validEmail.test(formData.emailOrPhone) || validPhone.test(formData.emailOrPhone)) {
            setCheckSubmit(true)
        } else {
            setCheckSubmit(false)
        }
    }
    const HideShowPassword = () => {
        setHideShowPassword(!hideShowPassword);
    }

    const submitFormSignup = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={submitFormSignup}>
                <div className={Styles.header_box_main}>
                    <NavLink exact to="/" onClick={props.onProgress}>
                        <div className={Styles.back_button}>
                            <svg fill="#078e49" viewBox="0 0 22 17" className="stardust-icon stardust-icon-back-arrow yGpYhu"><g stroke="none" strokeWidth={1} fillRule="evenodd" transform="translate(-3, -6)"><path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z" /></g></svg>
                        </div>
                    </NavLink>
                    <div className="clear__both" />
                </div>
                <div className={Styles.input_box_main}>
                    <p className={`cl ${Styles.signup_title}`}>Đăng ký</p>
                    <div className={Styles.email_input_box}>
                        <input name="emailOrPhone" value={formData.emailOrPhone} onChange={handleChange} type="text" placeholder="Số điện thoại / Email" />
                    </div>
                    <div className={Styles.password_input_box}>
                        <input type={hideShowPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Mật khẩu" autoComplete="on" />
                        <div onClick={() => HideShowPassword()}>
                            {
                                hideShowPassword ?
                                    <svg className="display__none" fill="none" viewBox="0 0 20 12"><path stroke="none" fill="#000" fillOpacity=".54" fillRule="evenodd" d="M19.975 5.823V5.81 5.8l-.002-.008v-.011a.078.078 0 01-.002-.011v-.002a.791.791 0 00-.208-.43 13.829 13.829 0 00-1.595-1.64c-1.013-.918-2.123-1.736-3.312-2.368-.89-.474-1.832-.867-2.811-1.093l-.057-.014a2.405 2.405 0 01-.086-.02L11.884.2l-.018-.003A9.049 9.049 0 0010.089 0H9.89a9.094 9.094 0 00-1.78.197L8.094.2l-.016.003-.021.005a1.844 1.844 0 01-.075.017l-.054.012c-.976.226-1.92.619-2.806 1.09-1.189.635-2.3 1.45-3.31 2.371a13.828 13.828 0 00-1.595 1.64.792.792 0 00-.208.43v.002c-.002.007-.002.015-.002.022l-.002.01V5.824l-.002.014a.109.109 0 000 .013L0 5.871a.206.206 0 00.001.055c0 .01 0 .018.002.027 0 .005 0 .009.003.013l.001.011v.007l.002.01.001.013v.002a.8.8 0 00.208.429c.054.067.11.132.165.197a13.9 13.9 0 001.31 1.331c1.043.966 2.194 1.822 3.428 2.48.974.52 2.013.942 3.09 1.154a.947.947 0 01.08.016h.003a8.864 8.864 0 001.596.16h.2a8.836 8.836 0 001.585-.158l.006-.001a.015.015 0 01.005-.001h.005l.076-.016c1.079-.212 2.118-.632 3.095-1.153 1.235-.66 2.386-1.515 3.43-2.48a14.133 14.133 0 001.474-1.531.792.792 0 00.208-.43v-.002c.003-.006.003-.015.003-.022v-.01l.002-.008c0-.004 0-.009.002-.013l.001-.012.001-.015.001-.019.002-.019a.07.07 0 01-.01-.036c0-.009 0-.018-.002-.027zm-6.362.888a3.823 3.823 0 01-1.436 2.12l-.01-.006a3.683 3.683 0 01-2.178.721 3.67 3.67 0 01-2.177-.721l-.009.006a3.823 3.823 0 01-1.437-2.12l.014-.01a3.881 3.881 0 01-.127-.974c0-2.105 1.673-3.814 3.738-3.816 2.065.002 3.739 1.711 3.739 3.816 0 .338-.047.662-.128.975l.011.009zM8.145 5.678a1.84 1.84 0 113.679 0 1.84 1.84 0 01-3.679 0z" clipRule="evenodd" /></svg>
                                    :
                                    <svg fill="none" viewBox="0 0 20 10" className="stardust-icon stardust-icon-eye-shut _2nnXgl"><path stroke="none" fill="#000" fillOpacity=".54" d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z" />
                                    </svg>

                            }
                        </div>
                    </div>
                </div>
                {
                    errorSignup === "" ?
                        <div className={Styles.white_space}>
                        </div> :
                        <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                            <div className={Styles.box_error}>
                                <div className={Styles.icon_error}>
                                    <svg viewBox="0 0 16 16" className="stardust-icon stardust-icon-cross-with-circle _2-4Lck"><path fill="none" stroke="#078e49" d="M8 15A7 7 0 108 1a7 7 0 000 14z" clipRule="evenodd" /><rect stroke="none" width={7} height="1.5" x="6.061" y={5} fill="#078e49" rx=".75" transform="rotate(45 6.06 5)" /><rect stroke="none" width={7} height="1.5" fill="#078e49" rx=".75" transform="scale(-1 1) rotate(45 -11.01 -9.51)" /></svg>
                                </div>
                                <div className={Styles.text_error}>
                                    <p className="mb-0">signup failed, please try again later or use another signup method</p>
                                </div>
                            </div>
                        </div>
                }
                <div className={Styles.box_foter}>

                    <button disabled={!checkSubmit || formData.password.length < 8} className={checkSubmit && formData.password.length > 8 ? `${Styles.box_button_signup} ${Styles.enable} bg` : `${Styles.box_button_signup} bg`}>
                        Đăng ký
                    </button>
                    <NavLink exact to="/quen-mat-khau" onClick={props.onProgress}>
                        <p className={Styles.forgot_password}>Quên mật khẩu</p>
                    </NavLink>
                    <p className={Styles.signup_sms}>Đăng nhập với SMS</p>
                    <div className="clear__both" />
                    <div className="display__flex">
                        <div className={Styles.line} />
                        <div className={Styles.or_text}>
                            <p>OR</p>
                        </div>
                        <div className={Styles.line} />
                    </div>
                    <div className={Styles.signup_social}>
                        <div className={Styles.fb_box}>
                            <div className={Styles.social_icon} >
                                <img alt="" src="./images/icons/ic_fb.png" width="100%" height="100%"></img>
                            </div>
                            <div className={Styles.social_text}>
                                <p className="ml-2">Facebook</p>
                            </div>
                        </div>
                        <div className={Styles.ap_box}>
                            <div className={Styles.social_icon} >
                                <img alt="" src="./images/icons/ic_ap.png" width="90%" height="100%"></img>
                            </div>
                            <div className={Styles.social_text}>
                                <p>Apple</p>
                            </div>
                        </div>
                        <div className={Styles.gg_box}>
                            <div className={Styles.social_icon} >
                                <img alt="" src="./images/icons/ic_gg.png" width="100%" height="100%"></img>
                            </div>
                            <div className={Styles.social_text}>
                                <p>Google</p>
                            </div>
                        </div>
                        <div className="clear__both" />
                    </div>
                    <div className={Styles.move_login}>
                        <p>Bạn đã có tài khoản?
                            <NavLink exact to="/dang-nhap" onClick={props.onProgress}>
                                <a> Đăng nhập</a>
                            </NavLink>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;