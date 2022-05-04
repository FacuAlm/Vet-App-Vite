import React, { useEffect } from 'react'
import { Paciente } from './Paciente'

export const ListadoPacientes = ({ Pacientes, setEdicion, Eliminar}) => {

  useEffect(()=>{
    if (Pacientes.length>0) {
      console.log('Nuevo paciente')
    }
    
  }, [Pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {Pacientes && Pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center mt-5 mb-5">Listado Pacientes</h2>

          <p className="font-black">Administra tus {' '} <span className="text-indigo-600">Pacientes Y Citas</span></p>


          {
            Pacientes.map((paciente) => {
              return (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setEdicion={setEdicion}
                  Eliminar={Eliminar}
                  
                  
                />

              )

            })
          }
        </>

      ) : (
        <>
          <h2 className="font-black text-3xl text-center mt-5 mb-5">No hay Pacientes</h2>

          <p className="font-black">Comienza agregando pacientes {' '} <span className="text-indigo-600">Y apareceran aqui</span></p>
        </>
      )}








    </div>
  )
}
