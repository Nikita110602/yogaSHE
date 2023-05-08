import React from 'react'
import { NavLink } from "react-router-dom";

const Learn = () => {
  return <>
    <div className='our'>
    <h1>What Do You Wanna Learn</h1>
      <table>
        <tr>
          <td><img src="https://i.pinimg.com/474x/e8/8f/2f/e88f2f4fdc9ec70e751507318f536bc4.jpg" alt="" /><NavLink to="/Periods">Yoga For Periods Cramps</NavLink></td>
          <td><img src="https://i.pinimg.com/474x/2c/fd/b7/2cfdb74eaa8c70b431643b4d1a51c660.jpg" alt="" /><NavLink to="/Pcod">Yoga For PCOD/PCOS</NavLink></td>
          <td><img src="https://i.pinimg.com/474x/45/f5/94/45f5943ba3649d5d942dccbb35db0108.jpg" alt="" /><NavLink to="/Thyroid">Yoga For Thyroid</NavLink></td>
        </tr>
      </table>
    </div>
  </>
}

export default Learn