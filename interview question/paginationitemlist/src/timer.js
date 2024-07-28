import React from 'react'

function Timer() {


const milsec = '08'
const minutes = '22'
const seconds = '23'





  return (
    <>
    <h1>{minutes} : {seconds} : {milsec}</h1>
    <div className='buttons'>

        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>

    </div>
    </>
  )
}

export default Timer