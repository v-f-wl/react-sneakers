import React from 'react'
import './Drawer.scss'
const Drawer = ({closeBag, items = []}) => {

  return (
    <div className="drawer">
        <div className="drawer__close" onClick={closeBag}></div>
        <div className="drawer__content">
            <div className="drawer__top">
              <h2>Корзина</h2>
              <span className="drawer__top--close icon-close" onClick={closeBag}></span>
            </div>
            <div className="cartList">
              {items.map((obj) => (
                  <div className="cartItem">
                    <img src={obj.img} alt="Pic" />
                    <div className="cartItemContent">
                      <span className='cartItemTitle'>
                        {obj.title}
                      </span>
                      <span className='cartItemPrice'>
                        {obj.price} руб.
                      </span>
                    </div>
                    <button className="cartItemBtn icon-close"></button>
                  </div>
              ))
              }
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