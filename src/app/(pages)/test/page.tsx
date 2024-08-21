'use client'
import { Spin, Switch } from 'antd'
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
  const shart =
    first === 'bye' ? <p>uhuihihihui</p> : <button>bhbjhbjhb</button>
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ]

  return (
    <div className="mt-10 flex flex-col gap-10 items-center justify-center">
      {/* <input type="checkbox" checked={ischecked} onChange={handlechange} />
      <input type="text" onChange={hand1} value={first} />
      <p>مقدار{shart}</p>
      <button onClick={hand2}>clear</button> */}
      {products.map((items: any, index: number) => {
        return <li>{items.title}</li>
      })}
    </div>
  )
}
