


export const Paciente = ({paciente, setEdicion, Eliminar}) => {

  const handleEliminar=()=>{
    const respuesta=confirm("Deseas eliminar este paciente?")

    if (respuesta){
      Eliminar(paciente.id)
    }
  }
  return (
    <div>
         <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
          <p className="font-bold mb-3 uppercase text-gray-700">Mascota: <span className="font-normal normal-case">{paciente.Cliente}</span></p>


          <p className="font-bold mb-3 uppercase text-gray-700">Propietario: <span className="font-normal normal-case">{paciente.Propietario}</span></p>


          <p className="font-bold mb-3 uppercase text-gray-700">Email: <span className="font-normal normal-case">{paciente.Email}</span></p>


          <p className="font-bold mb-3 uppercase text-gray-700">Fecha Alta: <span className="font-normal normal-case">{paciente.Alta}</span></p>


          <p className="font-bold mb-3 uppercase text-gray-700">Sintomas: <span className="font-normal normal-case">{paciente.Sintomas}</span></p>

          <div className="flex justify-between">
            <button 
            type='button'
            className="bg-indigo-700 rounded-lg uppercase py-2 px-10 font-bold  text-white m-3" onClick={()=>setEdicion(paciente)}>Editar</button>
            <button 
            type='button'
            className="bg-red-700 rounded-md uppercase py-2 px-10 font-bold text-white m-3" onClick={handleEliminar}>Eliminar</button>

          </div>


        </div>

    </div>
  )
}
