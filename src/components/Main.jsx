import React, { useState } from 'react'
import findit from '../API/imagefetch.js'
export default function Main() {
  const [meme,setMeme]=useState({
    topText:"One does not simply ",
    bottomText:"Walk into Mordor",
    imgUrl:"http://i.imgflip.com/1bij.jpg"

  })
  const handleChange=(e)=>{
    const {value,name}=e.target
    console.log(value,name);
    
    setMeme((prev)=>({
      ...prev,
      [name]:value.length!=0?value:name!="topText"?"Walk into Mordor":"One does not simply "
    }))
  }
  
  return (
    <main className='flex flex-col'>
      <div className="mainContainer">
      <div className="form  flex flex-col items-center ">
        <div className="inputContainer flex p-[20px] justify-end">
          <label className='labels mr-[15px] '>

            Top Text
            <input   
                type="text"
                name='topText' 
                placeholder={meme.topText}
                onChange={handleChange}
            />
          </label>
          <label className='labels'>
              Bottom Text
              <input 
                  type="text" 
                  name='bottomText' 
                  placeholder={meme.bottomText}
                  onChange={handleChange}
                  
              />
          </label>

        </div>
        <button
          onClick={findit}
        >Generate image</button>
      </div>
      
      <div className='meme' >
        <img src="http://i.imgflip.com/1bij.jpg" alt="img" width="500px"/>
        <span className="top top-0">{meme.topText}</span>
        <span className="bottom bottom-0">{meme.bottomText}</span>
      </div>

      </div>
    </main>
  )
}
