import { useParams, Link } from 'react-router-dom'


export const CartGreeting = () => {

  const { id } = useParams();

  return (
    
    <div className="CartBody">
      <div className="cartGreeting_img">
        <img src='../images/greeting_b.jpg' alt='librero'/>
      </div>
      <div>
      <div className="cartGreeting_body">
        <h1>Gracias por tu Compra!</h1>
        <p>Tu Número de Orden es: <b>{id}</b></p>
      </div>
      <div>
        <Link to={"/"}>Salida...<i class="bi bi-door-open-fill"/></Link>        
      </div>
      </div>
    </div >
      
      )
}

