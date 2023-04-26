import { createContext, useState } from "react"

const ClimaContext=createContext()

function ClimaProvider({children}) {


    const [busqueda,setBusqueda]=useState({
        ciudad:'',
        pais:''
    })

    const [result,setResult]=useState({})

    const [loading,setLoading]=useState(false)

    const [noResults,setNoResults]=useState('')

    const setDatosBusqueda=(e)=>{
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }

    const consultarClima= async (datos)=>{
        setLoading(true)
        try {


            const API_KEY=import.meta.env.VITE_API_KEY;
            const {ciudad,pais}=datos;

            const URL_UBICATION=`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${API_KEY}`;

            const coordenadas= await fetch(URL_UBICATION)
            const response_coordenadas= await coordenadas.json()

            const {lat,lon}=response_coordenadas[0]

            const URL_WEATHER=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

            const weather = await fetch(URL_WEATHER)
            const response_weather = await weather.json()

            setResult(response_weather)
            setNoResults('')
            setLoading(false)
        } catch (error) {
            setNoResults('No hay resultados para su busqueda')
            setLoading(false)
            console.error(error)
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                setDatosBusqueda,
                consultarClima,
                result,
                loading,
                noResults
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export{
    ClimaProvider
}

export default ClimaContext;
