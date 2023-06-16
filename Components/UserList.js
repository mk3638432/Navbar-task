'use client'
import React, { useEffect, useState } from 'react'
import axios  from 'axios'
const UserList = () => {

 const [data , setData] = useState([])

 const getUserData = async () => {
    let responce = await axios.get("https://dummyjson.com/users")
    setData(responce.data.users)
 }
useEffect(() => {
    getUserData()
} , [])
console.log(data.users)
  return (
    <div id='user'>
        <h1 className='flex justify-center font-bold text-cyan-500 text-2xl'>User FullName</h1>
        
        {
            data.map((res) => {
                const {id ,firstName , lastName} = res;
                return(
                    <div key={id}>
                        <div className='flex  justify-center items-center mt-10 '> 
                     
                  <h1 className='border p-4'> {id}. {firstName} {lastName}</h1>
                  <h2>  </h2>
                  </div>
                   </div>
                )
            })
        }
    </div>
  )
}

export default UserList