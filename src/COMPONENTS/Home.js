import { Link } from "react-router-dom";
import React from "react";
import DataTests from "../db.json";

export const Home = () => {

  return (
    <div className="flex flex-col items-center content-center mt-4">
      {/* TITLE IN APP.JS  */}
      <h2 className="text-[2rem] text-white ">
        Select a client to see results of the test
      </h2>

      {/* OBTENER DATA DE FILE .JSON Y RETORNAR CLIENTES */}
      <div className="tests-container flex flex-row gap-20 mt-[2em]">
        {DataTests &&
          DataTests.map((test) => {
            return (
                <div
                className="test-box hover:scale-125 transition-all duration-500"
                key={test.idVideo}
                >
                <Link to={`/test/${test.cliente}`}  >
                  <button className="text-white text-xl hover:text-sky-500 uppercase font-semibold p-7 border-solid border-2 hover:border-sky-500 rounded-3xl transition-all duration-300">
                    {test.cliente}
                  </button>
                </Link>
              </div>
            );
          })}
      </div>

      <footer className="mt-4 absolute w-full bottom-[1px] text-center text-white">
          <p>✨ Developed by {" "}
            <a href={'https://franciscoagustinr.github.io'} target='_blank' className="hover:underline">
             <span className="font-bold underlined"> Francisco Agustín Rodríguez</span>
            </a>{" "}✨
          </p>
        </footer>
    </div>
  );
};
