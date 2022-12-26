import React from 'react';
import { CgShoppingBag } from "react-icons/cg";
import Logo from "../../assets/logo.png";
import style from "./style.module.css";
export default function Header() {
  return (
         
      <div className={style.container}>

        <div className={style.logo}>

          <img src={Logo} alt="logo"/>
          <span>amazon</span>

        </div>

        <div className={style.right}>


            <ul className={style.menu}>
              <li>Collections</li>
              <li>Brands</li>
              <li>New</li>
              <li>Sales</li>
              <li>ENG</li>

            </ul>



          <input className={style.search} type="text" placeholder='Search...'/>
          <CgShoppingBag className={style.cart}/>

        </div>




      </div>
  )
}
