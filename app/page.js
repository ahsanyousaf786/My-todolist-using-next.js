"use client"


import React, { useState } from 'react'



const page = () => {

  const [task, settask] = useState("")

  const [mainTask, setmainTask] = useState([])

  const submithandler = (e) => {

    e.preventDefault()

    setmainTask([...mainTask, { task }])

    console.log(mainTask);


    settask("")
  }

  const deleteHandler = (i)=>{

    let copytask=[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  }

  let renderTask = <h2>No task available</h2>

  if (mainTask.length > 0) {

    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between'>

          <div className='mb-5'>
            <h5 className='text-xl font-semibold'>{t.task}</h5>
          </div>

          <button onClick={()=>{deleteHandler(i)}} className='bg-red-500 p-2 rounded text-white' >Delete</button>

        </li>
      );
    });

  }


  return (
    <>

      <h1 className=" bg-black text-5xl text-white font-bold text-center m-5 p-5 rounded" >My Todo List </h1>

      <form onSubmit={submithandler}>
        <input

          type="text"
          placeholder='Enter Your task here'
          className=' border-2 m-5 text-5xl px-4 py-2'
          value={task}
          onChange={(e) => {

            settask(e.target.value)

          }}

        />

        <button className='bg-black text-5xl font-bold text-white p-2 rounded'  >Add Task</button>

      </form>
      <hr />

      <div className='bg-gray-300  m-5 p-5 '>

        <ul>
          {renderTask}
        </ul>



      </div>

    </>
  )
}

export default page


