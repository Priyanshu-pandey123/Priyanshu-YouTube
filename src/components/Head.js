import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';
import { SEARCH_API } from '../Utils/constant';

const Head = () => {
  const [search,setSearch]=useState("");
  const [showSuggestion,setShowSuggestion]=useState(false);

  const [suggestion,setSuggestion]=useState([]);
  console.log(search)
  const dispatch=useDispatch();
  const handleToggleMenu =()=>{
      
       dispatch(toggleMenu());
      }


    useEffect(()=>{
      

    const timer = setTimeout(()=>searchSuggestion(),200);
    return()=>{
      clearInterval(timer);
    }

    },[search]);



      const searchSuggestion= async()=>{

        const searchData= await fetch(SEARCH_API+search);
        const json =await searchData.json();
        console.log(json);
        setSuggestion(json[1]);


      }
   


  return (
    <div className='grid grid-flow-col border-b-2 h-[70px] shadow-lg'>
      <div className=' flex mt-2 col-span-1'> 
            <img alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" className='h-[30px] w-[30px] cursor-pointer ml-[5px] mt-[5px]'
            onClick={()=>handleToggleMenu()}
            />
            <img alt="logo" src="https://tse3.mm.bing.net/th?id=OIP.gc6m_EejGd5q1JwA7aMJ5AHaFL&pid=Api&P=0&h=180" className='h-[30px] w-[60px] ml-[20px] mt-[5px]'/><span className='text-3xl'>You Tube</span>
        </div>







        <div className='col-span-10 px-10'>
          <div>
          <input
             className="bg-slate-100 border-gray-400  w-1/2 p-2 rounded-l-full mt-[14px] "
             type='text'
             value={search}
             onChange={(e)=>setSearch(e.target.value)}
             onFocus={()=>setShowSuggestion(true)}
             onBlur={()=>setShowSuggestion(false)}
             
             />
            <button className='rounded-r-full border border-l-gray-700 bg-slate-300 h-[40px] w-[50px] '>🔍</button>
          </div>
         {   showSuggestion &&
           <  div className='absolute bg-white w-[500px] text-black m-2  shadow-lg rounded-lg border border-gray-400'>
           <ul>
             {suggestion.map((s)=><li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-300'>{s}</li>)}
            
             
           </ul>
         </div>
         }
        </div>
        







        <div className='mt-3 col-span-1'>
            <img alt="user-icon" src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg" className='h-[40px] w-[40px]'/>
        </div>
    </div>
  )
}

export default Head
