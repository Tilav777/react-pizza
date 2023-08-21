import './Basket.css'
import { Context } from '../../App'
import { useContext } from 'react'

function Basket() {

  const { basketData } = useContext(Context)

  return (
    <div className='basket'>
      {
        basketData.length > 0 && basketData.map(data => {
          return (
            <div key={data.id} className='basket-item'>
              <img src={data.img} alt={data.title} />
            </div>
          )
        })
      }
      {
        basketData.length === 0 &&
        <div className='basket-empty'>
          <h3>Your basket is empty</h3>
        </div>
      }
    </div>
  )
}

export default Basket