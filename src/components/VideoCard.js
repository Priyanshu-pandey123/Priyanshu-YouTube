

import React from 'react'
import Shimmer from './Shimmer';

const VideoCard = ({info}) => {

    console.log(info,"form VideoCar");
    const{snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;

    
   
  return (
    <div className='p-4 m-4  w-72 shadow-lg border-black'>
        <img 
        className='rounded-lg'
        alt="videos"
         src={thumbnails?.medium?.url}
        />
      <ul className='mt-1'>
        <li className='break-words font-bold'>
         {title}
        </li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount/1000}K views</li>
    
      </ul>
    </div>
  );
}

export default VideoCard
