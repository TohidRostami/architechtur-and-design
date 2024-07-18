import React from "react";
import Link from "next/link";
import classes from './main-header.module.css';

const Mainheader = () => {
  return (
    <header className={classes.header}>
      <div className="logo">
        <Link href="/">logo</Link>
      </div>
      <nav className={classes.navbar}>
        <ul>
          <li>
            <Link href="" className={classes.home}>Home</Link>
          </li>
          <li>
            <Link href="">Projects</Link>
          </li>
          <li>
            <Link href="">Services</Link>
          </li>
          <li>
            <Link href="">Contact us</Link>
          </li>
          <li>
            <Link href="">About us</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.login}>
        <Link href="">Login</Link>
      </div>
    </header>
  );
};

export default Mainheader;
