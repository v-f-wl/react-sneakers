import React from 'react'
import './app.scss'
import Card from './components/Card/Card';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="wrapper"> 
        <Drawer />
        <Header />

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
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
    </div>
  );
}

export default App;
