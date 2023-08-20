import './Main.css'
import { useContext, useRef } from 'react'
import { Context } from '../../App'

// Components
import SearchMenu from '../../components/search/SearchMenu'

function Main() {
  const { datas, handleHeightOne, handleHeightTwo, hendleSizeOne, hendleSizeTwo, hendleSizeThree } = useContext(Context)

  return (
    <main className='main-page'>
      <SearchMenu />
      <h2>Все пиццы</h2>
      <div className="main-page__container">
      {
        datas?.map(pizza => {
          return (
            <div className='card' key={pizza.id}>
              <img src={pizza.img} alt="pizza" />
              <h3>{pizza.title}</h3>
              <div className='card__btns'>
                <div className='card__btns--top'>
                  <button className={pizza.selectHeight === 0 ? 'active' : ''} onClick={() => handleHeightOne(pizza.id)}>тонкое</button>
                  <button className={pizza.selectHeight === 1 ? 'active' : ''} onClick={() => handleHeightTwo(pizza.id)}>традиционное</button>
                </div>
                <div className="card__btns--bottom">
                  <button className={pizza.selectSize === 0 ? 'active' : ''} onClick={() => hendleSizeOne(pizza.id)}>{pizza.size[0]} sm</button>
                  <button className={pizza.selectSize === 1 ? 'active' : ''} onClick={() => hendleSizeTwo(pizza.id)}>{pizza.size[1]} sm</button>
                  <button className={pizza.selectSize === 2 ? 'active' : ''} onClick={() => hendleSizeThree(pizza.id)}>{pizza.size[2]} sm</button>
                </div>
              </div>
              <div className='card__total-price'>
                <p>от {pizza.price[pizza.selectHeight][pizza.selectSize]} ₽</p>
                <button><i className="bi bi-plus"></i>Добавить</button>
              </div>
            </div>
          )
        })
      }
      </div>
    </main>
  )
}

export default Main