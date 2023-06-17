'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from '@mui/material/Pagination';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
const ProductList = () => {

    const [fetchdata , setFetchData] = useState([])
    // const [page , setPage] = useState(1)
    // slice(page * 10 - 10 ,page * 10)
  
    const getData = async () => {
      let result = await axios.get('https://dummyjson.com/products')
      setFetchData(result.data.products)
    }
  console.log(fetchdata.products)
  
  
    useEffect(() => {
     getData()    
    } , [])
  console.log(fetchdata)

  // const selectedPageHandler = (selected) => {
  //   setPage(selected)
  // }

  return (
    <div id='product' className='pt-10 mt-[200px]'>

    <div  className='grid grid-cols-4  '>
      <Carousel className=''>
      {
        fetchdata.map((ele) => {
          const {id , brand , category , images , price , title} = ele;
        return(
          <div className='border flex justify-center items-center p-4 m-4 shadow-xl'>
           <div className=''> 
           <p> {id} </p>
           <p> {brand} </p>
           <p> {category} </p>
           <p> ${price} </p>
           <p> {title} </p>
           <img className='w-[250px] h-[150px]' src={images[0]} alt='/'/>
            </div>

            </div>
        )
      })
    }
    </Carousel>
    </div>
        <div>
       {
       
         <Pagination count={10}  className='flex justify-center items-center mt-10 mb-20 bg-green-300 p-4'/>
       }
 
        </div>
    </div>
  )
}

export default ProductList