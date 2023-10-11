import React, { useState } from 'react'

const ComponentApp = () => {
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState(["First category"])
  const handleEvent = (e) => {
    setCategory(e.target.value)
  }
  const Addcategory = () => {
    setCategories(list => [...list, category])
    setCategory("")
  }
  return (
    <>
      <h1>Gif expert</h1>
      <input type="..." value={category} onChange={(event) => handleEvent(event)} />
      <button onClick={() => Addcategory()}>Add </button>
      <ol>
        {
          categories.map(
            (category, key) => {
              return <li key={key}> {category} </li>
            }
          )
        }
      </ol>
    </>

  )
}
export default ComponentApp;