import { useState } from 'react'

import { AddEventState } from '../../utils/interfaces/events.interfaces'
import { axiosPost } from '../../utils/axiosReqs'

interface addEvt {
  setFetching: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddEvent({setFetching}: addEvt) {
  const [addEvent, setAddEvent] = useState<AddEventState>({
    eventName: '',
    eventLink: ''
  })

  function handleChange(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement
    const { name, value } = target
    setAddEvent(prev => (
      {
        ...prev,
        [name]: value
      }
    ))
  }

  function HandleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault()
    axiosPost('events', addEvent)
    setFetching(true)
    // axios.post("http://localhost:5000/api/v1/events", addEvent)
    setAddEvent({
      eventName: '',
      eventLink: ''
    })
  }

  return (
    <form className='add-event-form' onSubmit={ HandleSubmit }>
      <input
        name='eventName'
        className='dashboard-input'
        onChange={ handleChange }
        value={ addEvent.eventName }
        required
      />
      <input 
        name='eventLink'
        className='dashboard-input'
        onChange={ handleChange }
        value={ addEvent.eventLink }
        required
      />
      <button className='add-event-btn btn'>Add Event</button>
    </form>
  )
}