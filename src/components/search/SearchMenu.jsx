import './SearchMenu.css';
import { useContext } from 'react'
import { Context } from '../../App'

function SearchMenu() {

  const { hendleSearch, active, sortDatas } = useContext(Context)

  return (
    <div className='search-menu'>
        <div className="search-menu__btns">
            <button className={active === 1 ? 'active' : ''} onClick={() => hendleSearch('Все')}>Все</button>
            <button className={active === 2 ? 'active' : ''} onClick={() => hendleSearch('Мясные')}>Мясные</button>
            <button className={active === 3 ? 'active' : ''} onClick={() => hendleSearch('Вегетарианская')}>Вегетарианская</button>
            <button className={active === 4 ? 'active' : ''} onClick={() => hendleSearch('Гриль')}>Гриль</button>
            <button className={active === 5 ? 'active' : ''} onClick={() => hendleSearch('Острые')}>Острые</button>
            <button className={active === 6 ? 'active' : ''} onClick={() => hendleSearch('Закрытые')}>Закрытые</button>
        </div>
        <div className='search-menu__select'>
            <p>Сортировка по:</p>
            <select onChange={(e) => sortDatas(e.target.value)}>
                <option value="popularity">популярности</option>
                <option value="price">по цене</option>
                <option value="alphabet">по алфавиту</option>
            </select>
        </div>
    </div>
  )
}

export default SearchMenu