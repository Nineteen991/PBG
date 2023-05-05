import { useState } from 'react'

export default function Dashboard() {
  const [addEvent, setAddEvent] = useState('')

  function handleSubmit(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement
    const { value } = target
    setAddEvent(value)
  }

  return (
    <div className='dashboard'>
      <div className='add-event'>
        <h1 className='section-title'>Add Event</h1>
        <form className='add-event-form' onSubmit={ handleSubmit }>
          <input
            name='add-event'
            className='dashboard-input'
          />
          <button className='add-event-btn btn'>Add Event</button>
        </form>
      </div>

      <div className='show-events'>

      </div>
    </div>
  )
}