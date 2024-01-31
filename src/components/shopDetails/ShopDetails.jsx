import React from 'react'
import { useParams } from 'react-router-dom'

const ShopDetails = () => {
    const {id}=useParams
    console.log("🚀 ~ file: ShopDetails.jsx:6 ~ ShopDetails ~ id", id)
  return (
    <div>ShopDetails</div>
  )
}

export default ShopDetails