  

  import React from 'react'
  
  const ChatMessage = ({name,message}) => {
    return (
      <div className='flex'>
           <div className='mt-2 flex shadow-lg ml-2 border-white border-b-1 w-full '>
           <img 
            alt="user-icon" 
            src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
            className='h-[30px] w-[30px] rounded-2xl ml-[2px] mb-1'
            />
            <span className='ml-2 font-bold'>{name}</span>
            <span className='ml-2 '>{message}</span>
           </div>
      </div>
    )
  }
  
  export default ChatMessage
  