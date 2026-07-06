import { useState } from "react";

// function Saudacao({ nome }) {
//   return <h2>'Olá {nome} seja bem-vindo!'</h2>
// }

// export default function App() {

//   const [contador, setContador] = useState(0)

//   return (
//     <div>
//       <Saudacao nome="Pedro" />

//       <p>
//         {contador}
//       </p>

//       <button onClick={() => setContador(contador + 1)}>
//         Somar +1

//       </button>

//       <button onClick={() => setContador(contador - 1)}>
//         Diminuir 1
//       </button>
//     </div>
//   )
// }

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Aprender sobre Props", concluida: true },
    { id: 2, texto: "Entender useState", concluida: false },
    { id: 3, texto: "Estudar Web Components", concluida: false },
  ]);

  return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))}
      </ul>
    </div>
  );
}
