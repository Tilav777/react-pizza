import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Routes, Route } from 'react-router-dom'
import { createContext } from 'react'
import { useState } from 'react'

// Datas
import { pizzas } from '../data/db'

// Components
import Header from './components/header/Header'

// Pages
import Basket from './pages/basket/Basket'
import Main from './pages/main/Main'

// Context
export const Context = createContext()


function App() {
  const [datas, setDatas] = useState(pizzas)
  const [active, setActive] = useState(1)
  const [basketData, setBasketData] = useState([])

  function getBasketData(id) {
    let isBasket = basketData.find(data => data.id === id)
    let basket = pizzas.find(data => data.id === id)
    
    if(isBasket) {
      setBasketData(prev => {
        return prev.map(data => {
          if(data.id === id) {
            return {...data, countShop: data.countShop + 1}
          }else {
            return data
          }
        })
      })
    }else {
      setBasketData(prev => {
        return [...prev, {...basket, countShop: basket.countShop + 1}]
      })
    }
  }

  function hendleSizeOne(id) {
    setDatas(prev => {
      return prev.map(data => {
        if(data.id === id) return {...data, selectSize: 0}
        else return {...data, selectSize: 0}
      })
    })
  }

  function hendleSizeTwo(id) {
    setDatas(prev => {
      return prev.map(data => {
        if(data.id === id) return {...data, selectSize: 1}
        else return {...data, selectSize: 0}
      })
    })
  }

  function hendleSizeThree(id) {
    setDatas(prev => {
      return prev.map(data => {
        if(data.id === id) return {...data, selectSize: 2}
        else return {...data, selectSize: 0}
      })
    })
  }

  function handleHeightOne(id) {
    setDatas(prev => {
      return prev.map(data => {
        if(data.id === id) return {...data, selectHeight: 0}
        else return {...data, selectHeight: 0}
      })
    })
  }

  function handleHeightTwo(id) {
    setDatas(prev => {
      return prev.map(data => {
        if(data.id === id) return {...data, selectHeight: 1}
        else return {...data, selectHeight: 0}
      })
    })
  }

  function sortDatas(type) {
    if(type === 'price') {
      setDatas(prev => {
        return prev.sort((a, b) => {
          return a.price[0][0] - b.price[0][0]
        })
      })
    }else if(type === 'alphabet') {
      setDatas(prev => {
        return prev.sort((a, b) => {
          const firstAlphabet = a.title
          const secondAlphabet = b.title
          return (firstAlphabet < secondAlphabet) ? -1 : (firstAlphabet > secondAlphabet) ? 1 : 0
        })
      })
        
    }else if(type === 'popularity'){
      setDatas(pizzas)
    }
  }


  function hendleSearch(type) {
    setDatas(() => {

      if(type === 'Все') {
        setDatas(pizzas)
        return
      }

      return pizzas.filter(data => {
        return data.type === type
      })
    })

    setActive(() => {
      if(type === 'Все') {
        return 1
      }else if(type === 'Мясные') {
        return 2
      }else if(type === 'Вегетарианская') {
        return 3
      }else if(type === 'Гриль') {
        return 4
      }else if(type === 'Острые') {
        return 5
      }else if(type === 'Закрытые') {
        return 6
      }
    })
  }

  return (
    <Context.Provider value={{datas, hendleSearch, active, sortDatas, handleHeightOne, handleHeightTwo, hendleSizeOne, hendleSizeTwo, hendleSizeThree, getBasketData, basketData}}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </Context.Provider>
  )
}

export default App