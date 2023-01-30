import React, { useState } from "react";
import '../styles/datosgenerales.css'

function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { name, user, rol } = rowsData;
    if (name != null && user != null && rol != null){
        return (
            <tr key={index}>
              <th className="text-break">{user}</th>
              <th className="text-break">{name}</th>
              <th className="text-break">{rol}</th>
              <th>
                  <button onClick={() => tableRowRemove(index)} style={{border: 'none', background: 'none'}}><i class="bi bi-trash" style={{fontSize: '18px', color: '#4A6B89'}}></i></button>
              </th>
            </tr>
          );
    }

  });
}
function Table() {
  const [rows, initRow] = useState([]);
  const [name,setName] = useState(null);
  const [user,setUser] = useState(null);
  const [rol,setRol] = useState(null);

  const addRowTable = () => {
    const data = {
      name:name,
      user:user,
      rol:rol,
    };
    initRow([...rows, data]);
    setName(null)
    setUser(null)
    setRol(null)
    document.getElementById('name').value = null;
    document.getElementById('user').value = null;
    document.getElementById('rol').value = null;
  };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow(data);
  };
  return (
    <>
      <div className="d-flex flex-row mb-3 w-100">
        <label className="me-3" style={{fontWeight: '600'}}>Usuario del participante</label>
        <input className="form-control w-75" type="text" id="user" name="user" onChange={e=>setUser(e.target.value)}/>
        <label className="ms-3 me-3" style={{fontWeight: '600'}}>Nombre del participante</label>
        <input className="form-control w-75" type="text" id="name" name="name" onChange={e=>setName(e.target.value)}/>
    </div>
    <div className="d-flex flex-row mb-3 w-100">
        <div className="d-flex flex-row w-75">
        <label className="me-3 d-flex" style={{width: '18.5%',fontWeight: '600'}}>Rol del participante</label>
        <input className="form-control w-100 d-flex" type="text" id="rol" name="rol"onChange={e=>setRol(e.target.value)}/>
        </div>
        <div className="d-flex flex-row w-75 ms-3">
        <button className="btn btn-primary w-50 h-100" style={{fontWeight: '600'}} onClick={addRowTable}>Añadir participante</button>
        </div>
    </div>
    <div className="p-4 mb-3" style={{backgroundColor: 'lightgrey', border: '1px solid gray', borderRadius: '5px', overflowX: 'auto', maxWidth: '100%'}}>
        <h5 className="mb-4">Participantes</h5>
        <table className="table table-light" style={{overflow: 'auto'}}>
            <thead className="table-title">
                <tr className="table-title">
                <th>Usuario del participante</th>
                <th>Nombre del participante</th>
                <th>Rol del participante</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <TableRows
                rows={rows}
                tableRowRemove={tableRowRemove}
                onValUpdate={onValUpdate}
                />
            </tbody>
        </table>
    </div>
    </>
  );
}
export default Table;