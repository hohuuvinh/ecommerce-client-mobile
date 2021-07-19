import React from 'react';
import Styles from './css/Cart.module.css'; 
import CartBottom from '../components/CartBottom';
import CartChooseType from '../components/CartChooseType';
import CartHeader from '../components/CartHeader';
import CartItem from '../components/CartItem';

function Cart(props) {
    return (
        <div>
            <CartChooseType/>
            <CartHeader/>
            <CartBottom/>
            <div className={Styles.item_story}>
                <div>
                    <CartItem/>
                    <CartItem/>
                </div>
            </div>
        </div>
    );
}

export default Cart;