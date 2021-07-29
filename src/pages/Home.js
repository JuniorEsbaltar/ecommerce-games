import Card from "../components/Card";
import db from '../products.json';
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <p className="text-2xl">Seja bem-vindo a loja WallyGames!!!</p>
        <p>Encontre seus jogos favoritos aqui!</p>
      </div>

      <div>
      {db.map(item => {
        return (
          <div className="mt-10" key={item.id}>
            <Card item={item}/> 
          </div>
        )
        
      })}
      </div>
    </>
  )
}