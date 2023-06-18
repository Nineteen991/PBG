import { useContext, useEffect, useState } from "react"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContextValues } from '../../utils/interfaces/context.interfaces'
import { Context } from "../../Context"
import { axiosDelete } from '../../utils/axiosReqs'

interface fetchingEvt {
  fetching: boolean
  setFetching: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NixEvent({fetching, setFetching}: fetchingEvt) {
  const { events, setEvents } = useContext(Context) as ContextValues

  const fetchEvents = async () => {
    await axios.get('http://localhost:5000/api/v1/events')
      .then(res => {
        setEvents(res.data.events)
      })
      .catch(error => console.error("Failed to fetch events: ", error))
  }

  useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents
  })

  useEffect(() => {
    fetching && fetchEvents()
    setFetching(false)
  }, [fetching, setFetching])

  const nixEvent = (id: string) => {
    axiosDelete('events', id)
      .then(res => toast("Wow so easy!"))
      .catch(error => console.error("Failed to delete event: ", error))
    alert('nixed')
  }

  return (
    <div className="nix-event">
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
                <button 
                  className="btn nix-event"
                  onClick={ () => nixEvent(event._id)}
                >
                  X
                </button>
              </div>
            ))
          : null
      }
    </div>
  )
}