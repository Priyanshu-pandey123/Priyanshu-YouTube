

import React from 'react'

const Button = ({name}) => {
  return ( 
    <div className='bg-slate-50'>
      <button className='p-4 m-5 bg-slate-300 text-black rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
