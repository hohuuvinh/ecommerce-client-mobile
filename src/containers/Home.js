import React from 'react';
import Styles from './css/Home.module.css';
import CategoryIcon from '../components/CategoryIcon';
import Header from '../components/Header';
import CategoryProducts from '../components/CategoryProducts';
import ProductsRelate from '../components/ProductsRelate';

function Home(props) {
    return (
        <div className="box_main">
            <Header/>
            <div className={Styles.categoris_main}>
                <div className={Styles.categoris_box_scroll}>
                    <div className={Styles.category_box_child}>
                        <CategoryIcon/>
                        <div className={`bg ${Styles.line}`} />
                        <CategoryProducts/>
                        <ProductsRelate/>
                    </div>
                </div></div></div>
    );
}

export default Home;