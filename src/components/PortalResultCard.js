import React from 'react'
//import './PortalResultCard.css'

const PortalResultCard = ({ result }) => {

  return (
    <div className='result-table'>
      <table>
        <tr>
          <th className="test-date">{result.test_date.split('-')[1]}/{result.test_date.split('-')[2].split('T')[0]}/{result.test_date.split('-')[0]}:</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr className='table-header'>
          <th>Test</th>
          <th>Result</th>
          <th>Units</th>
          <th>Reference Interval</th>
        </tr>
        <tr className='row'>
          <td>White Blood Count</td>
          <td>{result.diagnosis}</td>
          <td>x 10^-3/mL</td>
          <td>4.0-10.5</td>
        </tr>
        
        
      </table>
    </div>
  )
}

export default PortalResultCard