import React from 'react'
import "./List.css"
import ListItem from './ListItem';

export default function List({products}) {
  return (
    <div className="list">
      {products.map((item) => {
        return <ListItem product={item} key={item.id} />;
      })}
    </div>
  )
}
