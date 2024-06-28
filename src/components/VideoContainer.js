import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../Utils/constant'
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

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
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos.map((video)=>(
        <Link key={video.id} to={"/watch?v="+video.id}>
      <VideoCard  info={video}/>
      </Link>
    ))}
    </div>
  )
}

export default VideoContainer
