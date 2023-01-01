import React from 'react'
import "./Header.scss"

const Header = (props) => {
  return (
    <header className="header">
        <div className="headerLeft">
          <img src="./img/logo.png" alt="Logo" className="headerLeftPic"/>
          <h3 className="headerLeftTitle">REACT SNEAKERS</h3>
          <p className="headerLeftSubt">Магазин лучших кроссовок</p>
        </div>
        <div className="headerRight">
          <ul className="iconList">
            <li className="iconListItem iconListItemBag" onClick={props.onClickBag}>
              <span className="itemIcon icon-bag"></span>
              <span className="iconListItemPrice">1205 руб.</span>
            </li>
            <li className="iconListItem">
              <span className="itemIcon icon-like"></span>
            </li>
            <li className="iconListItem">
              <span className="itemIcon icon-profile"></span>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header