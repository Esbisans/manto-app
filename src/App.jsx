import logo from './assets/electron_icon.png';
import './styles/App.css';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const clickButton = () => {
    Swal.fire({
      title: 'Alerta',
      icon: "success",
      confirmButtonText: "Continuar"
      }
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React x Electron
        </p>
        <div className='container'>
          <button className="btn btn-primary btn-lg me-4" type="submit" onClick={clickButton}>Alerta</button>
          <button className="btn btn-light btn-lg me-4" type="submit" onClick={() => navigate('/auth/login')}>Login</button>
          <button className="btn btn-dark btn-lg me-4" type="submit" onClick={() => navigate('/auth/register')}>Register</button>
          <button className="btn btn-info btn-lg me-4" type="submit" onClick={() => navigate('/dashboard')}>Dashboard</button>
        </div>
        <div className='container col-7 mt-4 mb-4'>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Descripción
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Manto App.</strong> Es una aplicacion web y de escritorio para la gestión y creación de plantillas del manual de calidad 
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
