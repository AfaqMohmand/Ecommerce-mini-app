import React,{useState} from "react"
import './sofa.css'
import products from "./SofaData"

const Sidebar = () => {
    const [productsData,setProductsData]=useState(products.dataOfSofa)
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Watch",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sofa",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "CellPhone",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Games",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Laptops",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Cars",
    },
  ]
  const handleChange=(e)=>{
    const searchTerm=e.target.value
    const searchedProducts=productsData.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchedProducts)
  }
  return (
    <>
      <div className='category  '>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <input type="text" placeholder="Enter Text" className="searchItem" onChange={handleChange} />
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
       
      </div>
    </>
  )
}

export default Sidebar
