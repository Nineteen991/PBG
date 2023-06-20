import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FileUpload() {
  const [fileToUpload, setFileToUpload] = useState<FormData | null>(null)

  const onChangeHandler = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement
    if (!target.files) return
    const formData = new FormData()
    formData.append('Summaries', target.files[0])
    setFileToUpload(formData)
  }
  
  const onSubmitHandler = () => {
    axios.post("http://localhost:5000/api/v1/summaries", fileToUpload)
      .then(res => res.status === 200 && toast("Suksefully Uploaded, yay!"))
      .catch(error => console.error("Post error: ", error))
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
      <ToastContainer />
    </div>
  )
}