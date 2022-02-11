import React from 'react'
import './gif.css'
export default function Gif({ id, title, url }) {
  return (
    <div key={id} className="gif">
      <img src={url} alt="gif"></img>
      <h4>{title}</h4>
    </div>
  )
}
