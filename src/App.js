import React from 'react'
import './app.scss'
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = []
function App() {

  const [cardOpened, setCardOpened] = React.useState(false)
  const [bagItems, setBagItems] = React.useState([])
  const [items, setItems] = React.useState([])


  React.useEffect( () => {
    fetch('https://63add95e3e4651691665a26f.mockapi.io/items ')
      .then( (res) => {
        return res.json()
      })
        .then ((json) => {
          setItems(json)
        })
  }, [])

  const onAddToCard = (obj) => setBagItems(prev => [...prev, obj])  

  return (
    <div className="wrapper"> 
      {cardOpened &&
        <Drawer 
          items ={bagItems}
          closeBag = {() => {setCardOpened(false)}}
        /> 
      }
      <Header
        onClickBag ={() => {setCardOpened(true)}}
      />
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
            {
              items.map(obj => 
                <Card 
                  title={obj.name}
                  price={obj.price}
                  img={obj.img}
                  onClickFavorite ={() => console.log('Fav')}
                  onClickPlus = {(obj) => onAddToCard(obj)}
                />
              )
            }
          </div>
        </div>
    </div>
  );
}

export default App;
