import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import {
  getAllVehiculos,
  createVehiculo,
  deleteVehiculo,
  getVehiculo,
} from "../api/vehiculo.api";
import { useForm } from "react-hook-form";
import { VehiculosForm } from "./form/VehiculosForm";
import { toast } from "react-hot-toast";
function Vehiculos() {
  const [vehiculos, setVehiculos] = useState([]);
  useEffect(() => {
    async function loadVehiculos() {
      const resVehiculos = await getAllVehiculos();
      setVehiculos(resVehiculos.data);
    }
    loadVehiculos();
  }, []);

  const removeVehiculos = async (id) => {
    console.log(id);
    const a = await deleteVehiculo(id);
    setVehiculos(vehiculos.filter((vehiculo) => vehiculo.vehiculo_id !== id));
    toast.success("Se elimino correctamente", {
      position: "bottom-right",
      style: {
        background: "#101010",
        color: "#fff",
      },
    });
  };

  return (
    <>
      <Layout>
        <main>
          <div className="card m-4">
            <div className="card-body">
              <Link className="btn btn-success" to={`/vehiculos-form/`}>
                Crear nuevo Vehiculo
              </Link>
            </div>
          </div>
          <div className="card m-4">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Placa</th>
                    <th scope="col">Kilometraje</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Modelo</th>
                    <th colSpan={2} className="text-center">
                      ACCIONES
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vehiculos.map((vehiculo) => (
                    <tr key={vehiculo.vehiculo_id}>
                      <th>{vehiculo.vehiculo_id}</th>
                      <td>{vehiculo.placa}</td>
                      <td>{vehiculo.kilometraje}</td>
                      <td>{vehiculo.marca}</td>
                      <td>{vehiculo.modelo}</td>
                      <td>
                        <Link className="btn btn-primary" to={`/vehiculos/${vehiculo.vehiculo_id}`}>
                          editar
                        </Link>
                      </td>
                      <td>
                        <button className="btn btn-danger"
                          onClick={(e) =>
                            removeVehiculos(vehiculo.vehiculo_id, e)
                          }
                        >
                          eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Vehiculos;
