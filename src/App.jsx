import React from 'react'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
export default function App() {
  console.log(window.innerWidth, window.innerHeight);
  
  return (
    <div className='flex flex-col items-center'>
      <Header/>
      <Main />


    </div>
  )
}
