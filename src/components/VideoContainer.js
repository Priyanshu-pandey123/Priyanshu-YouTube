import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../Utils/constant'
import VideoCard from './VideoCard';

const VideoContainer = () => {


const [videos,setVideos]=useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
   const data=await fetch(YOUTUBE_API);
   const json= await data.json(); 
   setVideos(json.items);
  }

  if(videos.length<0) return <h1 className='text-5xl'>Loading....</h1>

  return (
    <div className='flex flex-wrap'>
      {videos.map((video)=><VideoCard key={video.id} info={video}/>)}
    </div>
  )
}

export default VideoContainer
