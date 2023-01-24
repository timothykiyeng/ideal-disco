import React from 'react'
import PortalNav from './PortalNav'
import PatientCollapsible from './PatientCollapsible'


function PortalPatients({ search, setSearch, patients, docAppointments, user }) { 

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='md:mx-32 mx-8 md:my-16 my-8'>
      <PortalNav user={user} />
      <div className='search md'>
        <label className='header text-2xl'>
          Search Patient:
        </label>
        <input 
            type='text' 
            placeholder='Patient name...' 
            className='patientSearch datepicker' 
            onChange={handleChange} 
            value={search} 
          />
      </div>
      <br></br>
      <div className='appt-list' >
      { Array.from(patients).map(p => {
        return (
          <PatientCollapsible key={p.id} patient={p} docAppointments={docAppointments} />
        )
      }) }
      </div>
    </div>
  )
}

export default PortalPatients