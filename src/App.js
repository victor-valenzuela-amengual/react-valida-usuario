import Formulario from "./componentes/Formulario";

function App() {  
  return (
    <div className="container">
      <header className="text-light bg-black text-center">
        <h1>Acceso usuarios registrados</h1>
      </header>

      <div>
        <Formulario                   
          texto_boton={"Enviar"}
        />
      </div>          
    </div>
  );
}

export default App;
