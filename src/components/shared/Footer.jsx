import React from "react";
import styles from "./Footer.module.scss";
import clsx from "clsx";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={clsx(styles.footer__content, "container")}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, nulla.</p>
        <h4>Contact us</h4>
      </div>
    </div>
  );
}
