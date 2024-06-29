

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { showMenu } from '../Utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

 const dispatch=useDispatch();

useEffect(()=>{dispatch(showMenu())},[])
const [searchParams]=useSearchParams();




  return (
    <div className='flex flex-col w-full' >
      <div className='px-5 flex w-full'>
       <div className=''>
        <iframe className='p-3'
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player" frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowFullScreen>

        </iframe>
     </div>

     <div className='pl-[5px] pt-[14px] w-full'>
      <LiveChat/>
     </div>

    </div>   
        <CommentContainer/>
     
        
    </div>
  )
}

export default WatchPage
