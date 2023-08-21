import './Basket.css'
import { Context } from '../../App'
import { useContext } from 'react'

function Basket() {

  const { datas, basketCounter } = useContext(Context)

  console.log(basketCounter);

  return (
    <div className='basket'>
      {
        basketCounter > 0 && datas.map(data => {
          if(data.countShop > 0) {
            return (
              <div key={data.id} className='basket-item'>
                <img src={data.img} alt={data.title} />
              </div>
            )
          }
        })
      }
      {
        basketCounter === 0 &&
        <div className='basket-empty'>
          <h3>Your basket is empty</h3>
        </div>
      }
    </div>
  )
}

export default Basket