import './App.css';
import Card from './components/card';

let lista = [
  {
    url: "http://www.hq-now.com/hq/5/batman",
    texto: "Batman: Os Novos 52"
  },
  {
    url: "http://www.hq-now.com/hq/1372/batman-ano-um-ra-s-al-ghul",
    texto: "Batman: Ano Um"
  },
  {
    url: "http://www.hq-now.com/hq/3138/superman-e-robin-especial-2022",
    texto: "Superman e Robin"
  }
]

function App() {
  return (
    <>
      <h1>Listas de quadrinhos para ler</h1>
      {lista.map((elem) => {
        return (
          <Card url={elem.url} texto={elem.texto}></Card>
        )

      })

      }
    </>
  );
}

export default App;
