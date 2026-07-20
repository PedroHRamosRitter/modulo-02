import { useState } from 'react'
import Header from './components/Header'
import CardUsuario from './components/CardUsuario'

function App() {
  const nomeDoCurso = "React +Prati"
  const [ concluidas, setConcluidas] = useState(0)
  return (
    <>
      <Header />

      <CardUsuario nome="Pedro" curso="Python" />
      <CardUsuario nome="Luciano" curso="Java"/>
      <CardUsuario nome="Renato" curso="C++" />
      <CardUsuario nome="Vitor" curso="React" />

      <p>Tarefas Concluidas: {concluidas}</p>
      <button onClick={() => setConcluidas (concluidas + 1)}>
        Concluir Tarefa
      </button>

    </>
  )
}


export default App
