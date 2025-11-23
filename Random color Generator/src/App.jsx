import React, { useEffect, useState } from 'react'

const App = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState("#000000")

  function randomColorUtility(length){
    return Math.floor(Math.random()*length);
  }

  function handleCreateRandomHexColor(){
    const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexcolor="#"

    for(let i=0;i<6;i++){
      hexcolor=hexcolor+hex[randomColorUtility(hex.length)]
    }

    setColor(hexcolor)

    
  }
  function handleCreateRandomRgbColor(){
     const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`)


  }
  useEffect(()=>{
    if (typeOfColor==='rgb') handleCreateRandomRgbColor()
      else handleCreateRandomHexColor()
  },[typeOfColor])
  return (
    <div className='w-full h-screen flex flex-col items-center gap-4  justify-center text-center pt-3 ' style={{backgroundColor: color}}>
      <button className='px-10 py-2 cursor-pointer border-2' onClick={()=>setTypeOfColor("hex")}>Create HEX Color</button>
      <button className='px-10 cursor-pointer py-2 border-2  ' onClick={()=>setTypeOfColor("rgb")}>Create RGB Color</button>
      <button className='px-4 cursor-pointer py-2 border-2 ' onClick={
        typeOfColor==='hex' ? handleCreateRandomHexColor :handleCreateRandomRgbColor
      }>Generate Random Color</button>
      <div className='flex flex-col text-2xl font-semibold items-center justify-center'>
        <h3>{typeOfColor==='rgb' ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default App
