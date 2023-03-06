import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
  const initialState = {
    red: "",
    orange: "",
    green: "",
    violet: "", // Añadir el estado inicial para el color violeta
  };

  const [selectedColor, setSelectedColor] = useState(initialState);
  const [violet, setViolet] = useState(false); // Añadir un nuevo estado para el color violeta

  useEffect(() => {
    // Acceder a la clave del objeto selectedColor que tenga el valor "glow"
    const selectedKey = Object.keys(selectedColor).find(
      (key) => selectedColor[key] === "glow"
    );
    // Cambiar el título al color seleccionado
    document.title = `Has hecho clic en ${selectedKey}`;
  }, [selectedColor]); // Pasar el estado selectedColor como una dependencia

  // Función para generar un color aleatorio
  const getRandomColor = () => {
    const colors = ["red", "orange", "green", "violet"]; // Añadir el color violeta al array de colores
    let color = "";
    for (let i = 0; i < colors.length; i++) {
      color = colors[Math.floor(Math.random() * 4)]; // Cambiar el 3 por el 4 para incluir el color violeta
    }
    return color;
  };

  // Función para aplicar el color aleatorio al fondo del semáforo
  const changeColor = () => {
    const randomColor = getRandomColor();
    setSelectedColor({ ...initialState, [randomColor]: "glow" });
  };

  // Función para añadir el evento onClick y el color violeta al semáforo
  const addViolet = () => {
    setViolet(true); // Cambiar el valor de violet a true
    document.querySelector(".trafficLight").style.height = "23rem";
  };

  return (
    <div className="container">
      <div className="trafficLight">
        <div
          onClick={() => setSelectedColor({ ...initialState, red: "glow" })}
          className={`light red ${selectedColor.red}`}
        ></div>
        <div
          onClick={() => setSelectedColor({ ...initialState, orange: "glow" })}
          className={`light orange ${selectedColor.orange}`}
        ></div>
        <div
          onClick={() => setSelectedColor({ ...initialState, green: "glow" })}
          className={`light green ${selectedColor.green}`}
        ></div>
        <button onClick={changeColor}>Cambiar color</button>
        <button onClick={addViolet}>Añadir violeta</button>
        {violet &&
          (violet ? (
            <div
              onClick={() =>
                setSelectedColor({ ...initialState, violet: "glow" })
              }
              className={`light violet ${selectedColor.violet}`}
            ></div>
          ) : null)}
      </div>
    </div>
  );
};

export default Home;
