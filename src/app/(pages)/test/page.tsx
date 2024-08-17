'use client'
import { log } from 'console'
import { useState } from 'react'
export default function page() {
  const [ischecked, setischecked] = useState(false)

  const [first, setfirst] = useState('')
  console.log(first)

  function handlechange() {
    setischecked(!ischecked)
  }

  function hand1(event: any) {
    setfirst(event.target.value)
  }

  function hand2() {
    setfirst('')
  }
  return (
    <div className="mt-10 flex justify-center">
      <input type="checkbox" checked={ischecked} onChange={handlechange} />
      <input type="text" onChange={hand1} value={first} />
      <p>{first}</p>
      <button onClick={hand2}>clear</button>
    </div>
  )
}
