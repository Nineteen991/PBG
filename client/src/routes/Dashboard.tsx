import AddEvent from '../components/dashboard/AddEvent'
import NixEvent from '../components/dashboard/NixEvent'
import FileUpload from '../components/dashboard/FileUpload'
import SortGroupDocs from '../components/dashboard/SortGroupDocs'

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='dashboard-sections'>
        <h1 className='section-title'>Add Event</h1>
        <AddEvent />
      </div>

      <div className='dashboard-sections'>
        <h1 className='section-title'>Nix Event</h1>
        <NixEvent />
      </div>
  
      <div className='dashboard-sections'>
        <h1 className='section-title'>
          Add Documents
          <span className='title-span'> (ie: booklets, summaries, flyers)</span>
        </h1>
        <FileUpload />
      </div>

      <div className='dashboard-sections'>
        <h1 className='section-title'>Sort Documents by Group</h1>
        <SortGroupDocs />
      </div>
    </div>
  )
}