"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    // console.log(title)
    // console.log(desc)
    setmaintask([...maintask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(maintask)
  }
  let renderTask=<h2>No task available</h2>
  renderTask=maintask.map((t,i)=>{
    return<div className='flex justify-between'>
      <h5>{t.title}</h5>
      <h6>{t.desc}</h6>
    </div>
  })
 
  return (
    <>
      <h1 className='text-green-600 bg-yellow-500 p-5 text-5xl font-bold
      text-center'>My Todo List</h1>
      <form onSubmit={submitHandler} >
        <input type='text' className='text-2xl rounded-md border-zinc-800 border-2 m-8 px-3 py-2 text-blue-600' placeholder='enter title here'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}/>
        <input type='text' className='text-2xl rounded-md border-zinc-800 border-2 m-8 px-3 py-2 text-blue-600' placeholder='enter description here'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}/>
        <button className='bg-green-500 text-yellow-400 px-3 py-2 rounded-md m-5 '>Add task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-300 text-black'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
