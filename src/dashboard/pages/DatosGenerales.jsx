import { useNavigate } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import Table from "../components/TableP";
import '../styles/datosgenerales.css'

export const DatosGenerales = () => {

    const navigate = useNavigate();
  
    return (
      <div className="d-flex flex-nowrap" style={{backgroundColor: '#E7E7E7', maxWidth:'100%', overflow: 'auto'}}>  
          <SideBar/>
          <div className="m-4 mt-5" style={{width: '100%'}}>
            <h1 style={{color: '#2D4564'}}>Datos generales</h1>

            <div className="card w100 mt-4 d-flex flex-row p-1" style={{border: 'none'}}>
                <div className="" style={{width: '20%'}}>
                  <h5 className="m-3 me-5">Historia</h5>
                </div>
                <a className="m-3" href="#"><i className="bi bi-info-circle" style={{fontSize: '19px', color: '#4A6B89'}}></i></a>
                <div className="m-3" style={{width: '100%'}}>
                    <textarea className="form-control text-historia" name="historia" id="historia" style={{width: '100%'}}></textarea>
                </div>
            </div>

            <div className="card w100 mt-4 d-flex flex-row p-1" style={{border: 'none'}}>
                <div className="" style={{width: '20%'}}>
                  <h5 className="m-3 me-5">Organización de la empresa</h5>
                </div>
                <a className="m-3" href="#"><i className="bi bi-info-circle" style={{fontSize: '19px', color: '#4A6B89'}}></i></a>
                <div className="m-3" style={{width: '100%'}}>
                    <Table/>
                </div>
            </div>

            <div className="card w100 mt-4 d-flex flex-row p-1" style={{border: 'none'}}>
                <div className="" style={{width: '20%'}}>
                  <h5 className="m-3 me-5">Organigrama</h5>
                </div>
                <a className="m-3" href="#"><i className="bi bi-info-circle" style={{fontSize: '19px', color: '#4A6B89'}}></i></a>
                <div className="m-3" style={{width: '100%'}}>
                    <div className="d-flex flex-row mb-3 w-100">
                      <label className="me-3" style={{fontWeight: '600'}}>URL de archivo</label>
                      <input className="form-control w-75" type="file" />
                      <button className="btn btn-primary w-25 ms-4" style={{fontWeight: '600'}}>Seleccionar archivo</button>
                      <button className="btn btn-primary w-25 ms-4" style={{fontWeight: '600'}}>Cargar archivo</button>
                    </div>
                    <div className="p-4 mb-3" style={{backgroundColor: 'lightgrey', border: '1px solid gray', borderRadius: '5px'}}>
                      <h5 className="mb-4">Archivos cargados</h5>
                      <table class="table table-light">
                        <thead className="table-title">
                          <tr className="table-title">
                            <th>Nombre del archivo</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Documento1.pdf</th>
                            <th><a href="#"><i class="bi bi-trash" style={{fontSize: '18px', color: '#4A6B89'}}></i></a></th>
                          </tr>
                          <tr>
                            <th>Documento2.pdf</th>
                            <th><a href="#"><i class="bi bi-trash" style={{fontSize: '18px', color: '#4A6B89'}}></i></a></th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
            </div>

            <div className="card w100 mt-4 d-flex flex-row p-1" style={{border: 'none'}}>
                <div className="" style={{width: '20%'}}>
                  <h5 className="m-3 me-5">Funciones de puestos en la empresa</h5>
                </div>
                <a className="m-3" href="#"><i className="bi bi-info-circle" style={{fontSize: '19px', color: '#4A6B89'}}></i></a>
                <div className="m-3" style={{width: '100%'}}>
                    <textarea className="form-control text-historia" name="historia" id="historia" style={{width: '100%'}}></textarea>
                </div>
            </div>

            <div className="card w100 mt-4 d-flex flex-row p-1" style={{border: 'none'}}>
                <div className="" style={{width: '20%'}}>
                  <h5 className="m-3 me-5">Alcance</h5>
                </div>
                <a className="m-3" href="#"><i className="bi bi-info-circle" style={{fontSize: '19px', color: '#4A6B89'}}></i></a>
                <div className="m-3" style={{width: '100%'}}>
                <textarea className="form-control text-historia mb-3" name="historia" id="historia" style={{width: '100%'}}></textarea>
                    <div className="d-flex flex-row mb-3 w-100">
                      <label className="me-3" style={{fontWeight: '600'}}>URL de archivo</label>
                      <input className="form-control w-75" type="text" />
                      <button className="btn btn-primary w-25 ms-4" style={{fontWeight: '600'}}>Seleccionar archivo</button>
                      <button className="btn btn-primary w-25 ms-4" style={{fontWeight: '600'}}>Cargar archivo</button>
                    </div>
                    <div className="p-4 mb-3" style={{backgroundColor: 'lightgrey', border: '1px solid gray', borderRadius: '5px'}}>
                      <h5 className="mb-4">Archivos cargados</h5>
                      <table class="table table-light">
                        <thead className="table-title">
                          <tr className="table-title">
                            <th>Nombre del archivo</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Documento1.pdf</th>
                            <th><a href="#"><i class="bi bi-trash" style={{fontSize: '18px', color: '#4A6B89'}}></i></a></th>
                          </tr>
                          <tr>
                            <th>Documento2.pdf</th>
                            <th><a href="#"><i class="bi bi-trash" style={{fontSize: '18px', color: '#4A6B89'}}></i></a></th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
            </div>

            <div className="card w100 mt-4 d-flex flex-row p-1" style={{border: 'none'}}>
                <div className="" style={{width: '20%'}}>
                  <h5 className="m-3 me-5">Vocabulario</h5>
                </div>
                <a className="m-3" href="#"><i className="bi bi-info-circle" style={{fontSize: '19px', color: '#4A6B89'}}></i></a>
                <div className="m-3" style={{width: '100%'}}>
                    <textarea className="form-control text-historia" name="historia" id="historia" style={{width: '100%'}}></textarea>
                </div>
            </div>

            <div className="card w100 mt-4 d-flex flex-column p-1" style={{border: 'none'}}>
              <div className=" w100 d-flex flex-row">
                <div className="mb-5" style={{width: '20%'}}>
                  <h5 className="m-3 me-5">Condiciones generales</h5>
                </div>
                <a className="m-3" href="#"><i className="bi bi-info-circle" style={{fontSize: '19px', color: '#4A6B89'}}></i></a>
              </div>
              <div className=" w100 d-flex flex-row">
                <div className="" style={{width: '20%'}}>
                  <h5 className="m-3 me-5">Mision</h5>
                </div>
                <a className="m-3" href="#"><i className="bi bi-info-circle" style={{fontSize: '19px', color: '#4A6B89'}}></i></a>
                <div className="m-3" style={{width: '100%'}}>
                    <textarea className="form-control text-historia" name="historia" id="historia" style={{width: '100%'}}></textarea>
                </div>
              </div>
              <div className=" w100 d-flex flex-row">
                <div className="" style={{width: '20%'}}>
                  <h5 className="m-3 me-5">Vision</h5>
                </div>
                <a className="m-3" href="#"><i className="bi bi-info-circle" style={{fontSize: '19px', color: '#4A6B89'}}></i></a>
                <div className="m-3" style={{width: '100%'}}>
                    <textarea className="form-control text-historia" name="historia" id="historia" style={{width: '100%'}}></textarea>
                </div>
              </div>
              <div className=" w100 d-flex flex-row">
                <div className="" style={{width: '20%'}}>
                  <h5 className="m-3 me-5">Políticas generales</h5>
                </div>
                <a className="m-3" href="#"><i className="bi bi-info-circle" style={{fontSize: '19px', color: '#4A6B89'}}></i></a>
                <div className="m-3" style={{width: '100%'}}>
                    <textarea className="form-control text-historia" name="historia" id="historia" style={{width: '100%'}}></textarea>
                </div>
              </div>
            </div>
            <center><button className="btn btn-primary mt-5 mb-3 btn-save">Guardar</button></center>
          </div>
          
          
          {/* <button class="btn btn-primary btn-lg" type="submit" onClick={() => {navigate('/')}}>Inicio</button> */}
      </div>
    )
  }