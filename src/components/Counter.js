import React, { useState } from "react";

function Counter(){
  
    const [count, setCount] = useState(0)
    function increment(){
      console.log(`first${count}`)
      
      setCount ( count + 1)

      console.log(`second${count}`)

  }
  return(
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  )
}

export default Counter;
