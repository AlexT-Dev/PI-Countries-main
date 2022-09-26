import React from "react";
import { Link } from "react-router-dom";
import style from "./landing.module.css";


export function Landing() {
  return (
    <div> 
      <div className={style.myhome}>
       
        <h1 className={style.textName}>PI Countries</h1>
        <p className={style.textDetail}>By Alejandro Téllez</p>
        </div> 
        <div className={style.divi}>
          <button className={style.button}>
            <Link className={style.link} to="/countries">
              Home
            </Link>
          </button>
          
        </div>
   </div> 

  );
}
export default Landing;
