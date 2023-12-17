import React from 'react';
import '../styles/App.css';

export const PhotoFrame = ({url,title}) => {
   <div className='"photoframe'>
        <img src={url} alt={title}/>
        <div className='caption'>{title}</div>

   </div>
}