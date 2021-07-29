import Card from "../components/Card";
import db from '../products.json';

export default function Home() {
  return (
    <>
      <div className="ring-4 ring-indigo-300 rounded-xl mx-auto shadow-md md:max-w-lg mt-5 flex flex-col items-center">
        <div>
          <p className="text-2xl">Seja bem-vindo a loja Sans Games!!!</p>
        </div>
        <small><p>Tenha determinação!</p></small>
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