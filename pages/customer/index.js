import { useState, useRef } from "react"

export default function Index(params) {
  
  const index = useRef(0)

  const textRef = useRef(null)

  const output = useRef([])



  const startClick = () => {
    for (let i = 0; i < 20; i++) {
      output.current.push(i)
    }
    update()
  }

  const update = () => {
    console.log('update')
    console.log('output.current', output.current, index.current, output.current.length, textRef.current)
    if (index.current < output.current.length) {
      textRef.current.innerText = textRef.current.innerText + output.current[index.current]
      index.current = index.current + 1
      // setIndex(index => index + 1)
      setTimeout(update,100)
    }
  }


  const stopClick = () => {
    index.current = 0
    output.current = []
    textRef.current.innerText = ''
  }
  

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4">
        <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" onClick={startClick}>
        Start
      </button>
      <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white" onClick={stopClick}>
        Stop
      </button>
      <div>
        <span ref={textRef}></span>
      </div>
        
      </div>
    </div>
  )

}