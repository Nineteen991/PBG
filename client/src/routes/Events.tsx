import { useContext, useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

// import { GetEvents } from '../utils/interfaces/events.interfaces'
import { ContextValues } from '../utils/interfaces/context.interfaces'
import { Context } from "../Context"

export default function Events() {
  const { events } = useContext(Context) as ContextValues

  // const [events, setEvents] = useState<GetEvents[]>([])

  // const fetchEvents = async () => {
  //   await axios.get('http://localhost:5000/api/v1/events')
  //     .then(res => setEvents(res.data.events))
  //     .catch(error => console.error("Failed to fetch events: ", error))
  // }

  // const { isLoading } = useQuery({
  //   queryKey: ['events'],
  //   queryFn: fetchEvents
  // })
  console.log(events)
  return (
    <div className='events'>
      {
        events.length > 0
          ? events.map((event, index) => (
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
          : null
      }
      {/* { isLoading 
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
      } */}
    </div>
  )
}