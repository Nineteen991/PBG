import { useContext, useState } from 'react'
import axios from 'axios'

import { Context } from '../Context'
import { ContextValues } from '../utils/interfaces/context.interfaces'

export default function FileUpload() {
  const [fileToUpload, setFileToUpload] = useState<FormData | null>(null)
  const { setPlanSummaries } = useContext(Context) as ContextValues

  const onChangeHandler = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement
    if (!target.files) return
    const formData = new FormData()
    formData.append('Summaries', target.files[0])
    setFileToUpload(formData)
  }
  
  const onSubmitHandler = () => {
    axios.post("http://localhost:5000/api/v1/summaries", fileToUpload)
      .then(res => setPlanSummaries(res.data.url))
  }

  return (
    <div className='file-upload'>
      <input type="file" name="file" onChange={ onChangeHandler } />
      <button 
        className='btn file-upload-btn' 
        onClick={ onSubmitHandler }
      >
        Upload
      </button>
    </div>
  )
}