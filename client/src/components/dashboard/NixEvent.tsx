import { useContext } from "react"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContextValues } from '../../utils/interfaces/context.interfaces'
import { Context } from "../../Context"
import { useDeleteEvents } from "../../hooks/useDeleteEvents";

export default function NixEvent() {
  const { events, setEvents } = useContext(Context) as ContextValues
  const { mutate: deleteMutation } = useDeleteEvents()

  const fetchEvents = async () => {
    await axios.get('http://localhost:5000/api/v1/events')
      .then(res => {
        setEvents(res.data.events)
      })
  }

  useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents
  })

  const nixEvent = (id: string) => deleteMutation(id)

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