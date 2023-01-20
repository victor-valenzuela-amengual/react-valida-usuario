const Mensajes = (props) => {
  const { tipo, mensaje } = props;
  
  let alerta =mensaje!==undefined? (
    <div
      className={`alert ${tipo === "exito" ? "alert-success" : "alert-danger"}`}
    >
      {mensaje}
    </div>
  ):"";
  return (
    <>
      {alerta}
    </>
  );
};

export default Mensajes;
