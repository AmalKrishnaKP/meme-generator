import React, { useEffect, useState } from 'react'
import findit from '../API/imagefetch.js'
import axios from 'axios'
export default function Main() {
  const [meme,setMeme]=useState({
    topText:"One does not simply ",
    bottomText:"Walk into Mordor",
    imgUrl:"http://i.imgflip.com/1bij.jpg"

  })
  const [img,setImg]=useState([])
  const [imgUrl,setImgUrl]=useState("")
  useEffect(()=>{
    console.log("hai");
    
    const fetching=async()=>{
      try {
        const res=await axios.get(`https://api.imgflip.com/get_memes`)
        if(!res.data)
          return console.log("no data");
        setImg(res.data.data.memes)
        
        
      } catch (error) {
        console.log(error);
        
      }
      
    }
    fetching()
  
  },[])
  console.log(img);
  

  const changeImg=()=>{
    const randomNm=Math.floor(Math.random() * img.length)
    setImgUrl(img[randomNm].url)
    console.log(imgUrl);
    
    // const url=img.
  }


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
          <label className='labels mr-[15px] font-medium  '>

            Top Text
            <input  
                className='pl-2 font-medium rounded-[4px] py-[3px]'                 
                type="text"
                name='topText' 
                placeholder={meme.topText}
                onChange={handleChange}
            />
          </label>
          <label className='labels'>
              Bottom Text
              <input 
                  className='pl-2 font-medium rounded-[4px] py-[3px]'
                  type="text" 
                  name='bottomText' 
                  placeholder={meme.bottomText}
                  onChange={handleChange}
                  
              />
          </label>

        </div>
        <button
        className='bg-blue-800 px-[50px] py-2 mb-3 text-white border rounded-2xl '
          onClick={changeImg}
        >Generate image</button>
      </div>
      
      <div className=' relative meme border border-black rounded-3xl overflow-hidden ' >
        <img src={imgUrl?imgUrl:"https://i.imgflip.com/1bij.jpg"} alt="img"  className='max-h-[70vh]'/>
        <span className="absolute top-0  text-shadow-black text-shadow-lg">{meme.topText}</span>
        <span className="absolute bottom bottom-0  text-shadow-lg text-shadow-black">{meme.bottomText}</span>
      </div>

      </div>
    </main>
  )
}
