import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const MiAplicacion = () => {
  const [nombre, setNombre] = useState('');
  const [frase, setFrase] = useState('Hola, escribe tu nombre arriba.');

  const actualizarFrase = () => {
    if (nombre.trim() !== '') {
      setFrase(`Hola, ${nombre}!`);
    } else {
      setFrase('Hola, escribe tu nombre arriba.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Mi Aplicación</h1>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-4">
          <Button onClick={actualizarFrase} className="w-full">
            Actualizar Frase
          </Button>
        </div>
        <p className="text-lg text-center text-gray-700">{frase}</p>
      </div>
    </div>
  );
};

export default MiAplicacion;
