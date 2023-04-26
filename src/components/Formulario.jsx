import { useState } from "react";
import useClima from "../hooks/useClima";
import Alert from "./Alert";

function Formulario() {

    const [alert,setAlert]=useState('')
    const {busqueda,setDatosBusqueda,consultarClima,resultado}=useClima()
    const {ciudad,pais}=busqueda

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlert('Todos los campos son obligatorios')
            return
        }

        consultarClima(busqueda)
        setAlert('')
    }

  return (
    <div className="contenedor">
        {alert && <Alert alert={alert}/>}
        <form>

            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text"
                    id="ciudad"
                    name="ciudad" 
                    onChange={setDatosBusqueda}
                    value={ciudad}
                />
            </div>

            <div className="campo">
                <label htmlFor="pais">Ciudad</label>
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}
                    onChange={setDatosBusqueda}
                >
                    <option value="">Selecciona un pais</option>
                    <option value="CO">Colombia</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="ES">España</option>
                    <option value="CR">Costa Rica</option>
                    <option value="PE">Peru</option>
                </select>
            </div>

            <input 
                type="submit" 
                value='Consultar Clima'
                onClick={(e)=>handleSubmit(e)}
            />

        </form>
    </div>
  )
}

export default Formulario;
