import '../styles/SideBar.css'
import { FaBookOpen, FaChartBar, FaColumns, FaHome, FaReact, FaUsers } from 'react-icons/fa';

export const SideBar = () => {
  return (
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{"width": "280px", "height": "100vh"}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          {/* <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
          <FaReact size={40} className="me-2"/>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/dashboard/home" className="nav-link active" aria-current="page">
              <FaHome className='me-2'/>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg> */}
              <FaChartBar className="me-2"/>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <FaColumns className="me-2"/>
              Orders
            </a>
          </li>
          <li>
            <a href="/dashboard/products" className="nav-link text-white">
              {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"/></svg> */}
              <FaBookOpen className="me-2"/>
              Products
            </a>          
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              {/* <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg> */}
              <FaUsers className="me-2"/>
              Customers
            </a>   
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a href="new-project" className="dropdown-item">New project</a>
            </li>
            <li>
              <a href="#" className="dropdown-item">Settings</a>
            </li>
            <li>
              <a href="#" className="dropdown-item">Profile</a>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <a href="#" className="dropdown-item">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
  )
}
