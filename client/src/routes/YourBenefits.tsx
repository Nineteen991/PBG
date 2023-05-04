import { useState } from 'react'

import { setClientComponent } from '../utils/setClientComponent'
import { Groups } from '../utils/types'

export default function YourBenefits() {
  const [client, setClient] = useState<string>('')

  function handleSelections(e: React.FormEvent<EventTarget>) {
    const target = e.target as HTMLInputElement
    const { value } = target
    setClient(value)
  }

  const EmployerBenefits = 
    client 
      ? setClientComponent[client as keyof Groups] 
      : setClientComponent['PBG']

  return (
    <div className="your-benefits">
      <h2 className='section-title'>Who do you work for?</h2>

      <div className="benefits">
        <select 
          name="clients"
          id="clients"
          className="input-clients"
          value={ client }
          onChange={ handleSelections }
        >
          <option value=""></option>
          <option value="PBG">PBG</option>
          <option value="Tavant">Tavant</option>
          <option value="UA">Universal Audio</option>
        </select>
      </div>
      {/* Render Employer Benefits & Links to providers */}
      {
        client 
          ? <EmployerBenefits />
          : null
      }
    </div>
  )
}