import React from 'react'

export const MediaCard = ({imgUrl , title , body , isOpen}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={imgUrl} alt = "Img not Found" height={100} width = {100} />
        {isOpen ? "Door is open" : "Door is Closed"}
    </div>
  )
}
