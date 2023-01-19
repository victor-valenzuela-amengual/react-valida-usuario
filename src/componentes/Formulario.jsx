import { useState } from "react";
import Mensajes from "./Mensajes";

const Formulario = (props) => {
  const { titulo, subtitulo, texto_boton } = props;
  // Declaración de una variable de estado que llamaremos "mensaje"
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [txtBoton, setTxtBoton] = useState(texto_boton);

  const [mensaje, setMensaje] = useState("");
  const [tipo, setTipo] = useState(null);

  const passValida = "252525";
  const userValido = "ADL";

  const validarFormulario = (e) => {
    e.preventDefault();
    setTipo(null);
    if (usuario === "") {
      setTipo("error");
      return setMensaje("Ingrese el usuario");
    }

    if (password === "") {
      setTipo("error");
      return setMensaje("Ingrese la contraseña");
    }
    if (usuario === userValido && password === passValida) {
      setTipo("exito");
      setTxtBoton("Enviando...");
      return setMensaje("Sesión iniciada correctamente");
    } else {
      setTipo("error");
      return setMensaje("Nombre de usuario o contraseña incorrectos");
    }
  };
  let spinner =
    tipo === "exito" ? (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>      
    ) : (
      ""
    );
  return (
    <section>
      <h2>{titulo}</h2>
      <h4>{subtitulo}</h4>
      {tipo ? <Mensajes tipo={tipo} mensaje={mensaje} /> : null}
      <form onSubmit={validarFormulario}>
        <div className="row">
          {/* col-12 col-sm-6 col-lg-4 1 //columna para celulares 2 para 576 y 3 para lg */}
          <div className="col-12 " onChange={(e) => setUsuario(e.target.value)}>
            <label htmlFor="usuario">Usuario</label>
            <input id="usuario" type="text" className="form-control" />
          </div>
          <div
            className="col-12 pt-3"
            onChange={(e) => setPassword(e.target.value)}
          >
            <label htmlFor="pass">Contraseña</label>
            <input id="pass" type="password" className="form-control" />
          </div>
          <div className="row pt-2 text-center">
            <div className="col">
              <button
                className="btn btn-primary"
                disabled={usuario === "" || password === "" || tipo ==="exito"}
              >
                {txtBoton}
              </button>  
              <div className="pt-4">{spinner}</div>            
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
export default Formulario;
