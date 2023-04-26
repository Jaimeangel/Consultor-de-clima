import Formulario from "./Formulario";
import ResultadoClima from "./ResultadoClima";
import Spinner from "./Spinner";
import NoResultado from "./NoResultado";
import useClima from "../hooks/useClima";

function AppClima() {

  const {result,loading,noResults}=useClima()

  return (
    <main className="dos-columnas">
        <Formulario/>
        {
          loading ? <Spinner/> : 
                noResults ? <NoResultado/> : 
                      result?.name && <ResultadoClima/>
        }
    </main>
  )
}

export default AppClima;
