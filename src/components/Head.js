import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';

const Head = () => {
  
  const dispatch=useDispatch();
  const handleToggleMenu =()=>{
      
       dispatch(toggleMenu());
      }
   


  return (
    <div className='grid grid-flow-col border-b-2 h-[70px] shadow-lg'>
      <div className='flex mt-2 col-span-1'> 
            <img alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" className='h-[30px] w-[30px] cursor-pointer ml-[5px] mt-[5px]'
            onClick={()=>handleToggleMenu()}
            />
            <img alt="logo" src="https://tse3.mm.bing.net/th?id=OIP.gc6m_EejGd5q1JwA7aMJ5AHaFL&pid=Api&P=0&h=180" className='h-[30px] w-[60px] ml-[20px] mt-[5px]'/><span className='text-3xl'>You Tube</span>
        </div>

        <div className='col-span-10 py-5'>
            <input type='text ' className="bg-slate-100 border-gray-400  w-1/2 p-2 rounded-l-full mt-[-4px] "  />
            <button className='rounded-r-full border border-l-gray-700 bg-slate-300 h-[40px] w-[50px]'>🔍</button>
        </div>
        
        <div className='mt-3 col-span-1'>
            <img alt="user-icon" src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" className='h-[40px] w-[40px]'/>
        </div>
    </div>
  )
}

export default Head
