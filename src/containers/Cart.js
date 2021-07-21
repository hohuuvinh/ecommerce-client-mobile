import React, { useState } from 'react';
import Styles from './css/Cart.module.css'; 
import CartBottom from '../components/CartBottom';
import CartChooseType from '../components/CartChooseType';
import CartHeader from '../components/CartHeader';
import CartItem from '../components/CartItem';
import CartItemDiscount from '../components/CartItemDiscount';
import CartItemSelled from '../components/CartItemSelled';

function Cart(props) {
    const [showType,setShowType]=useState(false)
    const [idItemShow,setIdItemShow]=useState()
    const [tab,setTab]=useState('all')
    const changeTypeItem =(id) =>{
        setShowType(!showType);
        setIdItemShow(id)
        console.log('id item '+id);
    }

    const moveTab = (tab) =>{
        setTab(tab)
    }
    return (
        <div>
            <CartChooseType showType={showType} changeTypeItem={changeTypeItem} idItemShow={idItemShow}/>    
            <CartHeader moveTab={moveTab} tab={tab}/>
            <CartBottom/>
            <div className={Styles.item_story}>
                <div>
                  {tab==="all"?
                  <CartItem changeTypeItem={changeTypeItem}/> :""
                  }
                  {tab==="discount"?
                  <CartItemDiscount changeTypeItem={changeTypeItem}/>:""
                  }
                  {tab==="selled"?
                  <CartItemSelled changeTypeItem={changeTypeItem}/>:""
                  }
                    
                   
                    
                    
                              
                </div>
            </div>
        </div>
    );
}

export default Cart;