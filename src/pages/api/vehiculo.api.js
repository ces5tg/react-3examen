
import axios from "axios";

const VehiculoApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/vehiculos/',
});
/* export const getAllTaSKS =()=> {
  return axios.get("http://127.0.0.1:8000/documentos/")
}
 */

export const getAllVehiculos = () => VehiculoApi.get("/");

export const getVehiculo = (vehiculo_id) => VehiculoApi.get(`/${vehiculo_id}`);

export const createVehiculo = (vehiculo) => VehiculoApi.post("/", vehiculo);

export const updateVehiculo = (vehiculo_id, vehiculo) => VehiculoApi.put(`/${vehiculo_id}/`, vehiculo);

export const deleteVehiculo = (vehiculo_id) => VehiculoApi.delete(`/${vehiculo_id}`);