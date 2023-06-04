import { useState } from 'react'
import axios from 'axios'

import { AddEventState } from '../utils/interfaces/events.interfaces'

export default function AddEvent() {
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

  function handleSubmit(e: React.FormEvent<EventTarget>) {
    e.preventDefault()
    axios.post("http://localhost:5000/api/v1/events", addEvent)
    setAddEvent({
      eventName: '',
      eventLink: ''
    })
  }

  return (
    <form className='add-event-form' onSubmit={ handleSubmit }>
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