import React from 'react'

const Head = () => {
  return (
    <div className='grid grid-flow-col border-b-2 h-[70px] shadow-lg'>
      <div className='flex mt-2'>
            <img alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" className='h-[40px] w-[40px]'/>
            <img alt="logo" src="https://tse3.mm.bing.net/th?id=OIP.gc6m_EejGd5q1JwA7aMJ5AHaFL&pid=Api&P=0&h=180" className='h-[40px] w-[60px] ml-5'/><span className='text-3xl'>You Tube</span>
        </div>

        <div className='mt-3 border-1 rounded-lg  border-black text-center'>
            <input type='text ' className="bg-slate-100 border-b-8 mt-[5px] w-7/12"/>
            <button>search</button>
        </div>
        
        <div className='mt-3'>
            <img alt="user-icon" src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" className='h-[40px] w-[40px]'/>
        </div>
    </div>
  )
}

export default Head
