import { useEffect, useState } from 'react'
import axios from 'axios'

import { GetEvents } from '../utils/interfaces/events.interfaces'

export default function Events() {
  const [events, setEvents] = useState<GetEvents[]>([])
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/events')
      .then(res => {
        console.log(res.data.events)
        setEvents(res.data.events)
      })
  }, [])
console.log(events)
  return (
    <div className='events'>
      {
        events.map((event, index) => (
          <div className="event-div" key={index}>
            <a 
              href={ event.eventLink } 
              className="event-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="event-name">{ event.eventName }</h2>
            </a>
          </div>
        ))
      }
    </div>
  )
}