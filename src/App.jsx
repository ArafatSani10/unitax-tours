import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1 className='text-4xl text-black font-bold'>my name is arafat rahman sani</h1>
      <button className='btn btn-primary'>Book</button>
     </div>
    </>
  )
}

export default App
