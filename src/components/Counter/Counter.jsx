import { useState } from "react";
import style from "./styles.module.css";

export function Counter() {
  const [contador, setContador] = useState(0);
  return (
    <div className={style.container}>
      <h1 className={style.contador}>{contador}</h1>
      <div className={style.container_button}>
        <button
          className={style.button}
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          Diminuir
        </button>

        <button
          className={style.button}
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          Aumentar
        </button>
      </div>
    </div>
  );
}
