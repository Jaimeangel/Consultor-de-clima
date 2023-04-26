import useClima from "../hooks/useClima";


function ResultadoClima() {

    const {result}=useClima();
    const {name,main}=result;

    const Kelvin=273.15

    return (
        <div className="contenedor clima">
            <h2>El clima de {name} es :</h2>

            <p>
                {parseInt(main.temp-Kelvin)} <span>&#x2103;</span>
            </p>

            <p>
                Temperatura Máxima: {parseInt(main.temp_min-Kelvin)} <span>&#x2103;</span>
            </p>

            <p>
                Temperatura Minima: {parseInt(main.temp_max-Kelvin)} <span>&#x2103;</span>
            </p>
        </div>
    )
}

export default ResultadoClima;
