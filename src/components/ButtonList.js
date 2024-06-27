import React from 'react'
import Button from './Button';



const list=["All","TMKOc","GAME","Music","Foods","Class","All","TMKOc","GAME","Music","Foods","Class"];
const ButtonList = () => {
  return (
    <div className='flex'>
    {list.map((name,index)=><Button key={index} name={name}/>)}
    </div>
  )
}

export default ButtonList
