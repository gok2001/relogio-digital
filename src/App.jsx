import { useState, useEffect } from "react";

function App() {
  const [hora, setHora] = useState(new Date());
  const [mostrarRelogio, setMostrarRelogio] = useState(true);

  useEffect(() => {
    if (!mostrarRelogio) {
      return;
    }

    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, [mostrarRelogio]);

  return (
    <div>
      <h1>Relógio Digital</h1>
      <button onClick={() => setMostrarRelogio(!mostrarRelogio)}>{mostrarRelogio ? "Remover relógio" : "Adicionar relógio"}</button>

      {mostrarRelogio && (
        <p>{hora.toLocaleTimeString("pt-BR")}</p>
      )}
    </div>
  );
}

export default App;
