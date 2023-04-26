import useClima from "../hooks/useClima";

function NoResultado() {

    const {noResults}=useClima()

    return (
        <div className="contenedor noResult">
            <h2>{noResults}</h2>
        </div>
    )
}

export default NoResultado;
