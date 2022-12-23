import React from 'react'
import "./Card.scss"

const Card = () => {
  return (
    <div className="cartMain">
        <button className="cartMainLike icon-card-like-active"></button>
        <img src="./img/card-img-1.jpg" alt="Pic" className="cartMainPic" />
        <span className="cartMainTitle">
          Мужские Кроссовки Nike Blazer Mid Suede
        </span>
        <div className="cartMainBottom">
          <div className="cardBottom">
            <span className="cardBottomTitle">
              Цена:
            </span>
            <span className="cardBottomPrice">
              12 999 руб.
            </span>
          </div>
          <button className="cartMainBottomAdd icon-plus"></button>
        </div>
    </div>
  )
}

export default Card