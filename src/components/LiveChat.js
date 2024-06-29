
import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addChat } from '../Utils/chatSlice';
import { generateRandomName } from './Helper';

const LiveChat = () => {


const [liveMassage,setLiveMessage]=useState("");
  const dispatch=useDispatch();
  const chatData=useSelector((store)=>store.chat.message);


  useEffect(()=>{

    const interval=setInterval(()=>{
  
      dispatch(addChat({
        name:generateRandomName(),
        message:"hey! dear how r u"
      }))


  },2000);


    return()=>{
      clearInterval(interval);
    }

  },[])




  return <>
    <div className='h-[470px] w-full boder-2 border-black bg-slate-300 rounded-lg mb-1 overflow-y-scroll flex flex-col-reverse'>

      {
        chatData.map((c,i)=>(<ChatMessage  id={i}  name={c.name} message={c.message}/>))
      }
     
    </div>
    <div>
    <form className=''
     onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addChat({
        name:"prince",
        message:liveMassage

      }))
     }

     }

     >
      <input className='w-[200px] bg-slate-300 text-black'
      type='text'
      value={liveMassage}
      onChange={(e)=>setLiveMessage(e.target.value)}
      />
      <button>Send</button>
     </form>
    </div>
    </>
  
}

export default LiveChat
