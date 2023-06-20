import { useState } from 'react'

import { AddEventState } from '../../utils/interfaces/events.interfaces'
import { usePostEvents } from '../../hooks/usePostEvents'

export default function AddEvent() {
  const { mutate: eventMutation } = usePostEvents()
  const [addEvent, setAddEvent] = useState<AddEventState>({
    eventName: '',
    eventLink: '',
    eventDay: '',
    eventTime: '',
    eventType: '',
    eventDesc: '',
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
    eventMutation({
      site: "events", 
      data: addEvent
    })
    setAddEvent({
      eventName: '',
      eventLink: '',
      eventDay: '',
      eventTime: '',
      eventType: '',
      eventDesc: '',
    })
  }

  return (
    <form className='add-event-form' onSubmit={ HandleSubmit }>
      <label htmlFor='input-name' className='labels'>Name</label>
      <input
        name='eventName'
        className='dashboard-input'
        id="input-name"
        onChange={ handleChange }
        value={ addEvent.eventName }
        required
      />
      <label htmlFor='input-link' className='labels'>
        Web Link (optional)
      </label>
      <input 
        name='eventLink'
        className='dashboard-input'
        id="input-link"
        onChange={ handleChange }
        value={ addEvent.eventLink }
      />
      <label htmlFor='input-day' className='labels'>Day</label>
      <input 
        name='eventDay'
        className='dashboard-input'
        id="input-day"
        onChange={ handleChange }
        value={ addEvent.eventDay }
        required
      />
      <label htmlFor='input-time' className='labels'>
        Time (optional)
      </label>
      <input
        name='eventTime'
        className='dashboard-input'
        id="input-time"
        onChange={ handleChange }
        value={ addEvent.eventTime }
      />
      <label htmlFor='input-type' className='labels'>
        Type (ie: webinar) (optional)
      </label>
      <input
        name='eventType'
        className='dashboard-input'
        id="input-type"
        onChange={ handleChange }
        value={ addEvent.eventType }
      />
      <label htmlFor="input-desc" className='labels'>Description</label>
      <textarea
        name='eventDesc'
        className='dashboard-input'
        id="input-desc"
        onChange={ handleChange }
        value={ addEvent.eventDesc }
        required
      />
      <button className='add-event-btn btn'>Add Event</button>
    </form>
  )
}