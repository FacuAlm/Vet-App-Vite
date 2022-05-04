import { useState, useEffect } from "react";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";
import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {
  const INITIAL = JSON.parse(localStorage.getItem("Pacientes")) ?? [];
  const [Pacientes, setPacientes] = useState(INITIAL);
  const [Edicion, setEdicion] = useState({});
  
  useEffect(() => {
    localStorage.setItem("Pacientes", JSON.stringify(Pacientes));
  }, [Pacientes]);



  const Eliminar = (id) => {
    const PacientesActualizados = Pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(PacientesActualizados);
  };

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mx-3 mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          Pacientes={Pacientes}
          Edicion={Edicion}
          setEdicion={setEdicion}
        />
        <ListadoPacientes
          Pacientes={Pacientes}
          setEdicion={setEdicion}
          Eliminar={Eliminar}
        />
      </div>
    </div>
  );
}

export default App;
