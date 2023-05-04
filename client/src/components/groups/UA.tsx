export default function UA() {
  return (
    <div className='client-benefits'>
      <p className='client-p'>Benefits booklet</p>
      <p className='client-p'>Kaiser Summary</p>
      <p className='client-p'>Blue Shield HMO Summary</p>
      <p className='client-p'>Blue Shield PPO Summary</p>
      <p className='client-p'>Blue Shield Dental Summary</p>
      <p className='client-p'>VSP Summary</p>

      <div className="client-providers">
        <h2 className="providers-title">Find a Provider</h2>
        <a 
          href='https://healthy.kaiserpermanente.org/northern-california/doctors-locations#/search-form'
          target="_blank"
          rel="noreferrer"
          className="provider-links"
        >
          Kaiser Doctors & Locations
        </a>
        <a 
          href='https://www.blueshieldca.com/fad/home'
          target="_blank"
          rel="noreferrer"
          className="provider-links"
        >
          Blue Shield Providers
        </a>
        <a 
          href='https://www.vsp.com/eye-doctor'
          target="_blank"
          rel="noreferrer"
          className="provider-links"
        >
          VSP Providers
        </a>
      </div>
    </div>
  )
}