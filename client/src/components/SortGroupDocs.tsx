import { useState } from 'react'
import axios from 'axios'

export default function SortGroupDocs() {
  const selectHandler = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement
    const { value } = target 
    console.log(value)
    axios.post("http://localhost:5000/api/v1/summaries", {value} )
  }

  return (
    <div className='sort-group'>
      <select onChange={ selectHandler }>
        <option value=""></option>
        <option value="Tavant">Tavant</option>
      </select>
    </div>
  )
}