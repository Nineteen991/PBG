export default function Tavant() {
  return (
    <div className='client-benefits'>
      <p className='client-p'>Benefits booklet</p>
      <p className='client-p'>Kaiser Summary</p>
      <p className='client-p'>Cigna EPO Summary</p>
      <p className='client-p'>Cigna PPO Summary</p>
      <p className='client-p'>Cigna HDHP Summary</p>
      <p className='client-p'>Cigna Dental Summary</p>
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
          href='https://hcpdirectory.cigna.com/web/public/consumer/directory'
          target="_blank"
          rel="noreferrer"
          className="provider-links"
        >
          Cigna Providers
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