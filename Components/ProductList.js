'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ProductList = () => {

    const [fetchdata , setFetchData] = useState([])
  
  
    const getData = async () => {
      let result = await axios.get('https://dummyjson.com/products')
      setFetchData(result.data.products)
    }
  console.log(fetchdata.products)
  
  
    useEffect(() => {
     getData()    
    } , [])
  console.log(fetchdata)

  return (
    <div id='product' className='grid grid-cols-4 '>
      {
        fetchdata.map((ele) => {
          const {id , brand , category , images , price , title} = ele;
        return(
          <div className='border p-4 m-4 shadow-xl'>
           <div className=''>
           <p> {id} </p>
           <p> {brand} </p>
           <p> {category} </p>z
           <p> {price} </p>
           <p> {title} </p>
           <img className='w-[200px] h-[150px]' src={images[0]} alt='/'/>
            </div>
            </div>
        )
        })
      }
    </div>
  )
}

export default ProductList