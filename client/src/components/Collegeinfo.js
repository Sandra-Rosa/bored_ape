import React from 'react'
import Navbar2 from './Navbar2.js'
import styles from './components.css'

export const Collegeinfo = () => {
  return (
    <div>
      <div>
        <Navbar2 />
      </div>
      <div className="collegeinfo">
        <table className='center'>
          <tr>
            <th>sl No</th>
            <th>Course Offered</th>
            <th>College</th>
            <th>Contact Info</th>
          </tr>
          <tr>
            <td>1</td>
            <td>B-tech</td>
            <td>IIST Thiruvananthapuram</td>
            <td> 0471 256 8477</td>
          </tr>
          <tr>
            <td>2</td>
            <td>MBBS</td>
            <td>Jubilee Mission Medical College and Research Institute</td>
            <td> 0487 243 2200</td>
          </tr>
        </table>
      </div>

    </div>
  )
}
export default Collegeinfo