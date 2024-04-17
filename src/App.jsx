import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [Showmodel,setShowModel] = useState(false);

  return (
    <>
    <div className='h-screen flex flex-col items-center bg-gray-900 text-white gap-6'>
      <h1 className='text-5xl font-bold mt-4'>Popup Modal</h1>
      <button onClick={() =>setShowModel(true)} className='px-3 py-2 bg-indigo-500 rounded-lg '>Get your ebook</button>
      {Showmodel && <Modal onClose={()=>setShowModel(false)}/>}
    </div>
    </>
  )
}

export default App
