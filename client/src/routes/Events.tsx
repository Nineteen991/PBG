import { useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

import { GetEvents } from '../utils/interfaces/events.interfaces'

export default function Events() {
  const [events, setEvents] = useState<GetEvents[]>([])

  const fetchEvents = async () => {
    await axios.get('http://localhost:5000/api/v1/events')
      .then(res => {
        setEvents(res.data.events)
      })
  }

  const { isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents
  })
  
  return (
    <div className='events'>
      { isLoading 
          ? <div className='loading'>loading...</div>
          : events.map((event, index) => (
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