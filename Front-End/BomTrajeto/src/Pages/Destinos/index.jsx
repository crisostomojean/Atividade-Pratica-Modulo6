import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from '../../Api/Api';
import './destino.css';

export default function Index() {
  const [destinos, setDestinos] = useState([]);
  const [redirect, setRedirect] = useState(false); 


  useEffect(() => {
    Api.get('/Destinos')
      .then((response) => {
        setDestinos(response.data);
        setRedirect(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [redirect, setRedirect]);

  function deleteDestino(id){
    Api.delete(`/destinos/${id}`)
    setRedirect(true);}

  return (
    <>
      <header className="header">
        <h1 className="container"> Destinos</h1>
      </header>
      <div className="container p-3">
        
        <div className="table-responsive d-flex ">
          <table className="table table-hover table-sm table-colors">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cidade</th>
                <th>Cliente</th>
              </tr>
            </thead>
            <tbody>
              {destinos.map((destino) => (
                <tr className="text-dark " key={destino.id}>
                  <td className="text-dark">{destino.id}</td>
                  <td className="text-dark">{destino.cidade}</td>
                  <td className="text-dark">{destino.cliente.nome}</td>
                  <td className="d-flex justify-content-end">
                    <Link
                      to={`/Destinos-Update/${destino.id}`}
                      className="btn btn-info"
                    >
                      EDITAR
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteDestino(destino.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      DELETAR
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <Link to="/Destinos-Create" className="btn btn-success mb-3">
         <strong>NOVO DESTINO</strong>
        </Link>
      </div>
    </>
  );
}
