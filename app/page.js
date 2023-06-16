import Home from '@/Components/Home'
import ProductList from '@/Components/ProductList'
import UserList from '@/Components/UserList'
import React from 'react'

const page = () => {
  return (
    <div>
      <Home/>
      <UserList/>
      <ProductList/>
    </div>
  )
}

export default page