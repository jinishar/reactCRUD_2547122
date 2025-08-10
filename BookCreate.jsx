//BookCreate.jsx
import { useState } from "react"

export default function BookCreate({onCreate}) {
   const [title,setTitle] = useState('')
    const formOnSubmit=(event) => {
        event.preventDefault()
        onCreate(title)
    }
    const changeHandle =(event) => {
        setTitle(event.target.value)
        
    }

  return (
<div className="bg-green-200 mx-auto w-[300px]">
        <form onSubmit={formOnSubmit}>
     <p className="text-lg font-sans"> Add an order</p>
     <p className="mx-2 p-2">Title</p>
     <input onChange={changeHandle} 
     className="border-2 border-black border-solid mx-2 my-2 p-4 rounded-lg"
     value={title} />
     <br />
     <button type="submit"
     className="font-bold border-2 border-black border-solid mx-2 my-2 p-4 rounded-lg">Add</button>
     </form>
    </div>
  )
}