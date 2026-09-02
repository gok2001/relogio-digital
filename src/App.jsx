import { useState, useEffect } from "react";

function App() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h1>Relógio Digital</h1>
      {hora.toLocaleTimeString("pt-BR")}
    </div>
  );
}

export default App;