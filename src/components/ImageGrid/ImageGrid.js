import React from 'react'
import "./ImageGrid.css"
export default function ImageGrid(props) {
  return (
    <div className='image-list'>
      {
        props.images.map((item,key)=>{
          return <div className="image" key={key}>
            <img src={item} alt="" />
          </div>
        })
      }
    </div>
  )
}
