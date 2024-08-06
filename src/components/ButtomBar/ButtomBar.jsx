import React from 'react'
import css from "./ButtomBar.module.css";
import homecss from "../../pages/Home/Home.module.css";
import { Button } from 'primereact/button';

const ButtomBar = () => {
  return (
    <div className={css.container}>
        <div>
            <Button className={homecss.button} label="Zobacz nasz blog" onClick={() =>  window.open('https://kalkulatorstali.com/blog', '_blank')}/>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default ButtomBar