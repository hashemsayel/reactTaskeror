import {useState} from 'react'

function About() {

  let [count,setCount] = useState(0);
  function changeCount() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={changeCount}>count : {count}</button>
    </div>
  )
}

export default About;
