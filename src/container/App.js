import '../styles/App.css';
import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

export default function App() {
  return (
    <>
      <div className="App">
        <h3>Convidados:</h3>
        <ClassComponent nome="Dafne" estaNaLista={true} />
        <ClassComponent nome="Pedro" estaNaLista={true} />
        <ClassComponent nome="Anna" estaNaLista={true} />
        <h3>Tarefas:</h3>
        <FunctionComponent nome="Dafne" tarefa="batata-frita" />
        <FunctionComponent nome="Pedro" tarefa="pizza" />
        <FunctionComponent nome="Anna" tarefa="bebidas" />
      </div>

    </>
  );
}
