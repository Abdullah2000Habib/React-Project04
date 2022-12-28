import React, { useState } from 'react';
import plane from "../../assets/plane.png";
import Card from '../Card/Card';
import { ProductsData } from './Data';
import style from "./style.module.css";
export default function Products() {
    const [menuProducts,setMenuProducts]=useState(ProductsData);
    const filterHandler = (type)=>{
        setMenuProducts(ProductsData.filter((product)=>{ return product.type === type}))
    }
return (
    <>
        <div className={style.container}>
            <img src={plane} alt="plane"/>
            <h1>Our Feature Products</h1>
            <div className={style.products}>
                <ul className={style.menu}>
                    <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
                    <li onClick={()=>filterHandler("skin care")}>Skin Care</li>
                    <li  onClick={()=>filterHandler("conditioner")}>Conditioner</li>
                    <li onClick={()=>filterHandler("foundation")}>Foundation</li>
                </ul>
                <div className={style.list}>
                    {menuProducts.map((item,index)=>{
                        return (
                            <Card key={item.id} name={item.name} detail={item.detail} price={item.price} img={item.img}/>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
)
}
