import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [addEvent, setAddEvent] = useState('')

  function handleChange(e: React.FormEvent<EventTarget>) {
    console.log(e.target)
  }

  return (
    <div className='dashboard'>
      <div className='add-event'>
        <h1 className='section-title'>Add Event</h1>
        <form className='add-event-form'>
          <input
            name='add-event'
            className='dashboard-input'
            // onChange={ handleChange }
          />
          <button className='add-event-btn btn'>Add Event</button>
        </form>
      </div>
    </div>
  )
}