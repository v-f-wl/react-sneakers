import React from 'react'
import "./Card.scss"

const Card = ({img, title, price, onClickPlus}) => {

  const [isAdded, setIsAdded] = React.useState(false)
  const [isLiked, setIsLiked] = React.useState(false)

  const clickPlus = () => {
    onClickPlus({img, title, price})
    setIsAdded(!isAdded)
  }
  const clickLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="cartMain">
        <button 
          className={isLiked ? "cartMainLike icon-card-like-active btnLike" : "cartMainLike icon-card-like-active"}
          onClick ={clickLike}
          >
        </button>
        <img src={img} alt="Pic" className="cartMainPic" />
        <span className="cartMainTitle">
          {title}
        </span>
        <div className="cartMainBottom">
          <div className="cardBottom">
            <span className="cardBottomTitle">
              Цена:
            </span>
            <span className="cardBottomPrice">
              {price}
            </span>
          </div>
          <button 
            className={isAdded ? 'cartMainBottomAdd icon-plus btnAdd' : 'cartMainBottomAdd icon-plus'}
            onClick ={clickPlus}
          >
          </button>
        </div>
    </div>
  )
}

export default Card