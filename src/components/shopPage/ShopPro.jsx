import React,{useState} from 'react'
import products from '../sofaProducts.jsx/SofaData'
import Data from '../Data'
import Sdata from '../MainPage/Sdata'
import {useNavigate} from 'react-router-dom'
import './shopPro.css'
import { FlexBox } from './styled'
import { Link } from 'react-router-dom'


const ShopPro = () => {
    const [productsData,setProductsData]=useState(products.dataOfSofa)
    const [flashData,setFlashData]=useState(Data.productItems)
    const [serialsData,setSerialsData]=useState(Sdata)
    const navigate=useNavigate()

    const handleFilter = (e) => {
      const filterValue = e.target.value;
      if (filterValue === "sofa") {
        const filteredProducts = productsData.filter(
          (item) => item.category === "sofa"
        );
        setProductsData(filteredProducts);
      }
      if (filterValue === "mobile") {
        const filteredProducts = productsData.filter(
          (item) => item.category === "mobile"
        );
        setProductsData(filteredProducts);
      }
      if (filterValue === "chair") {
        const filteredProducts = productsData.filter(
          (item) => item.category === "chair"
        );
        setProductsData(filteredProducts);
      }
      if (filterValue === "watch") {
        const filteredProducts = productsData.filter(
          (item) => item.category === "watch"
        );
        setProductsData(filteredProducts);
      }
      if (filterValue === "wireless") {
        const filteredProducts = productsData.filter(
          (item) => item.category === "wireless"
        );
        setProductsData(filteredProducts);
      }
      if (filterValue === "shoes") {
        const filteredProducts = serialsData.filter(
          (item) => item.category === "shoes"
        );
        setProductsData(filteredProducts)
        setSerialsData(filteredProducts);
        setFlashData(filteredProducts)
      }
    };

    const handleSearch=(e)=>{
      const searchTerm=e.target.value
      const searchedProducts=productsData.filter(item=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
      const flashDataSearch=flashData.filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      const serialsDataSearch=serialsData.filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setProductsData(searchedProducts)
      setFlashData(flashDataSearch)
      setSerialsData(serialsDataSearch)
    }

  return (
    <>
    <section className='externalCss'>
            <div className="filter__widget">
                <select onChange={handleFilter} className="selectBar">
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="shoes">Shoes</option>
                </select>
              </div>
              <div className="filter__widget" >
                <select className="selectBar">
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
              <div className="search__box">
              <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' onChange={handleSearch}/>
          </div>
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>

      </section>
      <FlexBox>
        {productsData.length === 0 ? <p className='textCenter'>No products Found</p>:        
          productsData.map((item)=>{
            return (
              <div className="innerBox">
              <img src={item.cover} alt="" />
              <Link to={`/shop/${item.id}`} onClick={()=>navigate(`/shop/${item.id}`)}><h4>{item.productName}</h4></Link>
              <span>{item.category}</span>
              <p>${item.price} <span><i className="ri-add-line">stars </i></span></p>
            </div>
            )
          })
        }
      </FlexBox>
      <FlexBox>
        {flashData.length === 0 ? <p className='textCenter'>No products Found</p>:        
          flashData.map((item)=>{
            return (
              <div className="innerBox">
              <img src={item.cover} alt="" />
              <Link to={`/shop/${item.id}`} onClick={()=>navigate(`/shop/${item.id}`)}><h4>{item.name}</h4></Link>
              <p>${item.price} <span><i className="ri-add-line">stars </i></span></p>
            </div>
            )
          })
        }
      </FlexBox>
      <FlexBox>
        {serialsData.length === 0 ? <p className='textCenter'>No products Found</p>:        
          serialsData.map((item)=>{
            return (
              <div className="innerBox">
              <img src={item.cover} alt="" />
              <Link to={`/shop/${item.id}`} onClick={()=>navigate(`/shop/${item.id}`)}><h4>{item.name}</h4></Link>
              <p>${item.price} <span><i className="ri-add-line">stars </i></span></p>
            </div>
            )
          })
        }
      </FlexBox>
      </>
  )
}

export default ShopPro