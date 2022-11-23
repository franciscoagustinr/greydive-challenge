import React from "react";
import { useParams } from "react-router";
import DataTests from "../db.json";

export const TestCliente = () => {
  // ASIGNAR PÁG. CLIENTE SEGÚN CONSULTADO
  let { testCliente } = useParams();

  const handleClick = () => {
    window.scrollTo({
      top: 0, 
      left: 0,
      behavior: "smooth"
    }); 
  }

  return (
    // CLIENTE INFO
    <div className="p-2 flex flex-col ">
      <span className="absolute uppercase text-[.6rem] text-gray-300">
        cliente
      </span>
      <h1 className="text-sky-500 uppercase text-[3rem] tracking-wider">
        {testCliente}
      </h1>

      {/* INFO TEST  */}
      <div className="text-white text-[1.5rem]">
        Test de usabilidad en el sitio web

        {DataTests && DataTests.map((test) =>
        // OBTENER DATA DE FILE .JSON Y COMPROBAR PARA PASAR INFO DEL PARÁMETRO (CLIENTE CONSULTADO)
          testCliente === test.cliente ? (

            // IMPRIMIR INFORMACIÓN DEL CLIENTE
            <div className='relative flex flex-col items-center'>

              {/* VIDEO CLIENTE */}
              <div className="m-4 ">
                <video width="750" height="500" controls  className="rounded">
                  <source src={test.linkVideo} type='video/mp4'/>
                </video>
              </div>
              
              {/* TRANSCRIPCIÓN BOX  */}
              <div className="w-[60%] h-[10em] flex flex-col items-center ">
                        <span className="place-self-start py-2 uppercase text-[.6rem] text-gray-300 bg-transparent">
                            transcripción
                        </span>
                    <div className="p-4  overflow-scroll bg-[#353B45] rounded">
                        <p
                            dangerouslySetInnerHTML={{
                            __html: `${test.transcripcion}`,
                            }}
                            className="bg-[#353B45] text-[1.2rem]"
                        />
                    </div>
              </div>
              
                {/* TAREAS BOX */}
                <div className="mt-4">
                  <h2 className="my-4 text-[2rem] font-bold">Tareas</h2>
                  <h2 className="text-[1.2rem]">Escenario: <span className="font-semibold">{test.escenario}</span></h2>
                  
                  {/* IMPRIMIR CADA PREGUNTA */}
                  {test.preguntas &&
                  test.preguntas.map( (pregunta, index ) => {
                      return (
                            <div key={pregunta.texto} className=" w-[40%] p-4 ">
                              <hr/>
                              <p className="text-[1rem] font-semibold pt-2 ">Tarea {index + 1}:</p> 
                              <p key={pregunta.texto} className="text-[1.3rem] font-bold pt-2 ">{pregunta.texto}</p>
                              <p key={pregunta.tiempo} className="text-[red] text-[1rem] pt-2">Duración de la tarea: {pregunta.tiempo}</p>
                              
                              {/* SI LA RESPUESTA ES VERBAL, NO IMPRIMIR RESPUESTA  */}
                              { pregunta.respuesta && 
                                pregunta.respuesta === 'respuesta verbal' ? '' : <p className="text-[1.1rem]">Respuesta: {pregunta.respuesta}</p>
                              }
                            </div>
                          )
                    })
                  }
                </div>
              <button className="absolute bottom-[2rem] right-[2rem] bg-white rounded-full p-2" onClick={handleClick}>🔝</button>
            </div>
          ) : (
            ""
          )
        )}
      </div>

      <footer className="mt-4 relative w-full bottom-[1px] text-center text-white">
          <p>✨ Developed by {" "}
          <a href={'https://franciscoagustinr.github.io'} target='_blank' className="hover:underline">
             <span className="font-bold underlined"> Francisco Agustín Rodríguez</span>
            </a>{" "}✨
          </p>
        </footer>

    </div>
  )
}
