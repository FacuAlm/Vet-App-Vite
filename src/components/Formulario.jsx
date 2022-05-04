import { useState, useEffect } from "react"

export const Formulario = ({ Pacientes, setPacientes, Edicion,setEdicion }) => {

  const [Cliente, setCliente] = useState('')
  const [Propietario, setPropietario] = useState('')
  const [Email, setEmail] = useState('')
  const [Alta, setAlta] = useState('')
  const [Sintomas, setSintomas] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(Edicion).length > 0) {
      setCliente(Edicion.Cliente)
      setPropietario(Edicion.Propietario)
      setEmail(Edicion.Email)
      setAlta(Edicion.Alta)
      setSintomas(Edicion.Sintomas)
    }
  }, [Edicion])

  const generarID = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {


    if ([Cliente, Propietario, Email, Alta, Sintomas].includes('')) {
      setError(true)
    }
    else {

      setError(false)
      e.preventDefault()
      console.log("Enviando")
      const objetoPaciente = {
        Cliente,
        Propietario,
        Email,
        Alta,
        Sintomas

      }

      if (Edicion.id) {
        objetoPaciente.id = Edicion.id

        const PacientesActualizados = Pacientes.map(pacienteState => pacienteState.id === Edicion.id ? objetoPaciente : pacienteState)

        setPacientes(PacientesActualizados)
        setEdicion({})
      }
      else {
        objetoPaciente.id = generarID()
        setPacientes([...Pacientes, objetoPaciente])
      }



      //Reiniciar formulario
      setCliente('')
      setPropietario('')
      setEmail('')
      setAlta('')
      setSintomas('')
    }
  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center mt-5 mb-5">Seguimiento Pacientes</h2>

      <p className="font-black">Añade Pacientes y{' '}<span className="text-indigo-600" >Administralos</span></p>

      <form
        onSubmit={handleSubmit}
        className="uppercase"
      >
        <div className="mt-5">
          <label htmlFor='mascota' className="font-bold text-indigo-600">Nombre Mascota</label>
          <input
            required
            id='mascota'
            type="text"
            placeholder='Nombre Mascota'
            className="border-2 w-full p-2 mt-2 rounded-md shadow-md"
            value={Cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>


        <div className="mt-5">
          <label htmlFor='propietario' className="font-bold text-indigo-600">Nombre Propietario</label>
          <input
            required
            id='propietario'
            type="text"
            placeholder='Nombre Propietario'
            className="border-2 w-full p-2 mt-2 rounded-md shadow-md"
            value={Propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor='email' className="font-bold text-indigo-600 ">Email</label>
          <input
            required
            id='email'
            type="email"
            placeholder='Email'
            className="border-2 w-full p-2 mt-2 rounded-md shadow-md"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-5">
          <label htmlFor='alta' className="font-bold text-indigo-600">Fecha de Alta</label>
          <input
            required
            id='alta'
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-md shadow-md"
            value={Alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>


        <div className="mt-5">
          <label htmlFor='sintomas' className="font-bold text-indigo-600">Sintomas</label>
          <textarea
            required
            id='sintomas'
            className="border-2 w-full p-2 mt-2 rounded-md"
            placeholder='Describe los Sintomas...'
            value={Sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        {error && <p className="text-red-600 normal-case">*Faltan llenar campos</p>}

        <button
          className="shadow-md mt-5 bg-indigo-600 rounded-md w-full p-3 text-white uppercase font-bold"


        >{Edicion.id ? "Editar Paciente" : "Agregar Paciente"}</button>

      </form>
    </div>

  )
}
