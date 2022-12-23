import React from 'react'
import './Drawer.scss'
const Drawer = () => {
  return (
    <div style={{'display': 'none'}} className="drawer">
        <div className="drawer__close"></div>
        <div className="drawer__content">
            <h2>Корзина</h2>
            <div className="cartList">
              <div className="cartItem">
                <img src="./img/card-img-1.jpg" alt="Pic" />
                <div className="cartItemContent">
                  <span className='cartItemTitle'>
                    Мужские Кроссовки Nike Air Max 270
                  </span>
                  <span className='cartItemPrice'>
                    12 999 руб.
                  </span>
                </div>
                <button className="cartItemBtn icon-close"></button>
              </div>
              <div className="cartItem">
                <img src="./img/card-img-1.jpg" alt="Pic" />
                <div className="cartItemContent">
                  <span className='cartItemTitle'>
                    Мужские Кроссовки Nike Air Max 270
                  </span>
                  <span className='cartItemPrice'>
                    12 999 руб.
                  </span>
                </div>
                <button className="cartItemBtn icon-close"></button>
              </div>
            </div>
            <div className="total">
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button className="totalBtn">Оформить заказ <span className="totalArrow icon-arrow"></span></button>
            </div>
        </div>
    </div>
  )
}

export default Drawer