import React,{useState} from 'react'

const SofaCart = ({addToCart,dataOfSofa}) => {
    const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
   <>
    {dataOfSofa.map((shopItems, index) => {
        return (
          <div className='box' key={shopItems.id}>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{shopItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${shopItems.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
                  <p>{shopItems.shortDesc}</p>
              </div>
            </div>
          </div>
        )
      })}
   </>
  )
}

export default SofaCart