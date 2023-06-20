import { useState } from 'react'
import axios from 'axios'

import { axiosGet } from '../../utils/axiosReqs'

export default function SortGroupDocs() {
  const selectHandler = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement
    const { value } = target 
    console.log(value)
    axios.post("http://localhost:5000/api/v1/summaries", {value})
  }

  return (
    <div className='sort-group'>
      <form className='sort-group-form'>
        <select onChange={ selectHandler }>
          <option value=""></option>
          <option value="Tavant">Tavant</option>
        </select>
      </form>
    </div>
  )
}