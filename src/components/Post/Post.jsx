import { Button } from 'primereact/button';
import React from 'react'
import css from './Post.module.css'

export const Post = ({title, desc, imgpath, data, link}) => {
  return (

    <a href={link} className={css.post}>
      <div className={css.postimg}>
        <img src={imgpath} alt="Article img" width={'200px'} />
      </div>
      <div className={css.category}>
        PORADNIK
      </div>
      <div className={css.posttitle}>
        {title}
      </div>
      <div className={css.postdata}>
        {data}
      </div>
      <p className={css.postdesc}>
        {desc}
      </p>
      <Button className={css.link} label="Dowiedz się więcej" link onClick={() =>  window.open(link, '_blank')}/>
    </a>
  )
}
