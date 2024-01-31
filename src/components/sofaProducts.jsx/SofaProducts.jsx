import React from 'react'
import Catg from '../shops/Catg'
import Shop from '../shops/Shop'
import Sidebar from './Sidebar'
import SofaCart from './SofaCart'

const SofaProducts = ({dataOfSofa,addToCart}) => {
  return (
<section className='shop background'>
        <div className='container d_flex'>
          <Sidebar />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Sofa</h2>
              </div>
              <div className='heading-right row '>
              </div>
            </div>
            <div className='product-content  grid1 bordergrid'>
              <SofaCart addToCart={addToCart} dataOfSofa={dataOfSofa} />
            </div>
          </div>
        </div>
      </section>
  )
}

export default SofaProducts