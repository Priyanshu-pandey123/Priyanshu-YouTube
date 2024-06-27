

import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {




  const menuOpen=useSelector((store)=>store.app.isMenuOpen)

  if(!menuOpen)  return null;

  return (
    <div className='p-4 m-3 shadow-md '>
      <h1 className='font-bold'>Subcription</h1>
     <ul>
     
      <li>Music</li>
      <li>Gaming</li>
      <li>Movie</li>
      <li>Premiun</li>
     </ul>
     <h1 className='font-bold pt-5'>watch Later</h1>
     <ul className=''>   
      <li>Music</li>
      <li>Gaming</li>
      <li>Movie</li>
      <li>Premiun</li>
     </ul>
     <h1 className='font-bold pt-5'>Home</h1>
     <ul className=''>   
      <li>Music</li>
      <li>Gaming</li>
      <li>Movie</li>
      <li>Premiun</li>
     </ul>
    </div>
  )
}

export default Sidebar
