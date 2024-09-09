import React, { useContext, useEffect } from 'react'
import './ProductDisplayAdult.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../product-item/ProductItem'

const ProductDisplayAdult = () => {

  const { product_list } = useContext(StoreContext)
  const adultProducts = product_list.filter(product => product.category === 'ADULT COSTUMES')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='product-display' id='product-display'>
      <h2>Top Products Near You</h2>
      <div className="product-display-list">
        {adultProducts.map((item, index) => {
          return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default ProductDisplayAdult