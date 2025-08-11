import Componente1 from "./components/Componente1";
import Carros from "./components/Carros";
import "./App.css"

// todo componente só retorna um elemento
function App() {
  const paragr2 = { color: 'blue', fontWeight: 'bold' };
  // return deve ser entre parênteses para que comporte o JSX "Javascript XML"
  let nome = "Rafael";
  let alunos = ['Victor', 'Maria', 'Rafael'];

  return (
    <div>
      <h1>Olá</h1>
      <p style={paragr2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      {/* {Ah} */}
      <p>Nome: {nome}</p>
      <p>Soma: {2 + 3}</p>
      <p>Aluno: {alunos[2]}</p>
      <p className="exemplo">rafa</p>
      <Componente1 />
      <Carros />
    </div>
  );
}

export default App;
