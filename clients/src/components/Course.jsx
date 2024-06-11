import React, { useEffect, useState } from 'react'
import Card from "./Card"
import { Link } from 'react-router-dom'
import axios from "axios"

function Course() {
    const [books,setBooks]=useState([])

    useEffect(()=>{
        const getData=async ()=>{
            try {
                const item= await axios.get("http://localhost:8000/books")
                console.log(item.data)
                setBooks(item.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[])
    
  return (
    <>
        <div className='mmax-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='pt-24 md:pt-32 text-center'>
                <h1 className='text-2xl font-semibold md:text-4xl'>We are delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
                <p className='my-5 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit consectetur error rem unde harum. Voluptate eligendi ipsa accusantium enim laudantium? Iste, excepturi! Voluptatibus molestias rerum ullam dolore similique velit fugiat dignissimos. Voluptate facilis accusantium numquam fugiat? Consequatur rem in nobis cupiditate, id expedita eveniet nam, quae repellendus asperiores recusandae tenetur.</p>
                <Link to="/" className='bg-pink-500 text-white py-2 px-4 my-5 rounded-lg hover:bg-pink-700 duration-700'>Back</Link>
            </div>

            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    books.map((item,index)=>{
                        return(<Card key={index} item={item}/>)
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Course