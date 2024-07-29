import React, {useEffect, useState, useRef} from 'react'


function Mytimer() {
const [isRunning, setisRunning] = useState(false)    
const [elapsedTime, setelapsedTime] = useState(0);
const startTimeRef = useRef(0);
const intervalIdref = useRef(null)


useEffect(()=>{
    if(isRunning){
  intervalIdref.current =  setInterval(()=>{
      setelapsedTime(Date.now() - startTimeRef.current)
   },10)
}



   return ()=>{
    clearInterval(intervalIdref.current)
   }
},[isRunning])

function startfxn(){
    setisRunning(true)
    startTimeRef.current = (Date.now() - elapsedTime)
    console.log(startTimeRef)
}

function stopfxn(){
    setisRunning(false)

}

function resetfxn(){
    setelapsedTime(0)
    setisRunning(false)

}

function time(){
let minutes = Math.floor(elapsedTime/(1000*60)%60)
let seconds = Math.floor(elapsedTime/(1000)%60)
let milliseconds = Math.floor((elapsedTime%1000)/100)

minutes = String(minutes).padStart(2,'0')
seconds = String(seconds).padStart(2,'0')
milliseconds = String(milliseconds).padStart(2,'0')


return `${minutes} : ${seconds} : ${milliseconds}`

}

  return (
    <>
    <div className='diaplay'>{time()}</div>
    <div className='buttons'>
         <button onClick={startfxn} className='button start'>start</button>
         <button onClick={stopfxn} className='button stop'>stop</button>
         <button onClick={resetfxn} className='button reset'>reset</button>

     </div>
   </>
  )
}

export default Mytimer