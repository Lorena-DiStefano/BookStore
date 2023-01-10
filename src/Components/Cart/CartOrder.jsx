import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import db from '../../Utils/FirebaseConfig';


export const CartOrder = () => {
  const { cartList, setCartList, fullPayment } = useContext(CartContext);
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [orderId, setOrderId] = useState("")

  const orderGenerator = () => {
    const date = new Date()
    const order = {
      buyer: { name: name, phone: phone, email: email },
      items: cartList.map(item => ({ id: item.id, title: item.title, quantity: item.quantity, price: item.price, price_total: item.quantity * item.price })),
      total: fullPayment(),
      order_date: `${date}`
    };

    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))

    setCartList([])
  }

  return (
    <div className="container cartBody">
      <div className="row my-5">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label id="nombre" className="form-label">Nombre:</label>
              <input type="text" className="form-control" placeholder="Ingrese su nombre" onInput={(e) => { setName(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label id="telefono" className="form-label">Teléfono:</label>
              <input type="text" className="form-control" id="telefono" placeholder="Ingrese su teléfono" onInput={(e) => { setPhone(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label id="email" className="form-label">Email:</label>
              <input type="text" className="form-control" id="email" placeholder="Ingrese su mail" onInput={(e) => { setEmail(e.target.value) }} />
            </div>
            <button type="button" className="cart_endBtn " onClick={orderGenerator}>Generar Orden</button>
          </form>
        </div>
        <div className="col-md-6">
          <table className="table">
            <tbody>
              {cartList.map(item => (
                <tr key={item.id}>
                  <td><img src={item.image} alt={item.title} width={50} /></td>
                  <td className="align-middle">{item.title}</td>
                  <td className="align-middle text-center">{item.quantity}</td>
                  <td className="align-middle text-end">${(item.quantity * item.price).toLocaleString()}</td>
                </tr>
              ))
              }
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td className="text-end"><b>Total a Pagar </b></td>
                <td className="text-end"><b>${fullPayment().toLocaleString()}</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div>
          {orderId !== "" ? <Navigate to={"/CartGreeting/" + orderId} /> : ""}
        </div>
      </div>
    </div>
  )
}

export default CartOrder;

