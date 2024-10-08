import React, { useState } from "react";
import InputMask from "react-input-mask";
import { navigate } from "gatsby";

const SolicitarValor = () => {
  const [valor, setValor] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (valor) {
      setError("");
      navigate(`/Checkout?valor=${valor}`);
    } else {
      setError("Por favor, informe um valor.");
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen px-4">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Informe o Valor</h1>

        <div className="relative mb-4">
          <span className="absolute left-3 top-2 text-gray-500">R$</span>
          <InputMask
            mask="999.999,99"
            maskChar=""
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          >
            {() => (
              <input
                type="text"
                className={`border p-2 w-full pl-10 outline-none rounded-md bg-slate-50 
                ${error ? 'border-red-600' : 'border-gray-300'}`}
                placeholder="Digite o valor"
              />
            )}
          </InputMask>
        </div>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <button
          onClick={handleSubmit}
          className="bg-blue-600 border border-blue-600 text-white py-2 px-4 w-full font-medium rounded-md hover:bg-transparent hover:text-blue-600 transition-all duration-200"
        >
          Prosseguir
        </button>
      </div>
    </div>
  );
};

export default SolicitarValor;
