import React from "react";
import style from "./Header.module.scss";
import clsx from "clsx";
export default function Header() {
  return (
    <div className={clsx(style.header)}>
      <div className={style.header__content}>
        <h1>ShopShoe</h1>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>  
      </div>
    </div>
  );
}
