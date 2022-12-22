import React from 'react';
import './app.scss'

function App() {
  return (
    <div className="wrapper"> 
      <header className="header">
        <div className="headerLeft">
          <img src="./img/logo.png" alt="Logo" className="headerLeftPic"/>
          <h3 className="headerLeftTitle">REACT SNEAKERS</h3>
          <p className="headerLeftSubt">Магазин лучших кроссовок</p>
        </div>
        <div className="headerRight">
          <ul className="iconList">
            <li className="iconListItem iconListItemBag">
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

      <div className="content">
        <div className="contentTop">
          <h2 className="contentTopTitle">
            Все кроссовки
          </h2>
          <div className="contentTopSearch">
            <form className="contentForm">
              <button className="contentFormBtn icon-search">
              </button>
              <input type="text" className="contentFormInput" placeholder="Поиск..."/>
            </form>
          </div>
        </div>

        <div className="contantMain">
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
            <div className="cartMain">
              <button className="cartMainLike icon-card-like-active"></button>
              <img src="./img/card-img-2.jpg" alt="Pic" className="cartMainPic" />
              <span className="cartMainTitle">
                Мужские Кроссовки Nike Air Max 270
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
            <div className="cartMain">
              <button className="cartMainLike icon-card-like-active"></button>
              <img src="./img/card-img-3.jpg" alt="Pic" className="cartMainPic" />
              <span className="cartMainTitle">
                Мужские Кроссовки Nike Blazer Mid Suede
              </span>
              <div className="cartMainBottom">
                <div className="cardBottom">
                  <span className="cardBottomTitle">
                    Цена:
                  </span>
                  <span className="cardBottomPrice">
                    8 499 руб.
                  </span>
                </div>
                <button className="cartMainBottomAdd icon-plus"></button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
