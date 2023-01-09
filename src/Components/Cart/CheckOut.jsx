import { addDoc, doc, collection, getFirestore, writeBatch, getDoc } from "firebase/firestore";
import { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export const Checkout = () => {
  const { cartList, cleanCart, fullPayment } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  const generarOrden = () => {
    const fecha = new Date();
    const order = {
      buyer: { name: nombre, phone: telefono, email: email },
      items: cartList.map(item => ({ id: item.id, title: item.nombre, quantity: item.quantity, price: item.precio, price_total: item.quantity * item.precio })),
      total: fullPayment(),
      order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((snapShot) => {
      setOrderId(snapShot.id);
      const batch = writeBatch(db);

      cartList.forEach(item => {
        let producto = doc(db, "items", item.id);
        getDoc(producto).then((snapShot) => {
          batch.update(producto, { stock: snapShot.data().stock - item.quantity });
        });
      });

      batch.commit();
      cleanCart();
    });
  }


  return (
    <div className="container cartDetail">
      <div className="row my-5">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label id="nombre" className="form-label">Nombre:</label>
              <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput={(e) => { setNombre(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label id="telefono" className="form-label">Teléfono:</label>
              <input type="text" className="form-control" id="telefono" placeholder="Ingrese su Teléfono" onInput={(e) => { setTelefono(e.target.value) }} />
            </div>
            <div className="mb-3">
              <label id="email" className="form-label">Email:</label>
              <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => { setEmail(e.target.value) }} />
            </div>
            <button type="button" className="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
          </form>
        </div>
        <div className="col-md-6">
          <table className="table">
            <tbody>
              {cartList.map(item => (
                <tr key={item.id}>
                  <td><img src={item.image} alt={item.title} width={50} /></td>
                  <td className="align-middle">{item.title}</td>
                  <td className="align-middle text-end">{item.quantity} =</td>
                  <td className="align-middle text-end">${item.quantity * item.price}</td>
                </tr>
              ))
              }
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td className="text-end"><b>Total a Pagar </b></td>
                <td className="text-end"><b>${fullPayment()}</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          {orderId !== "" ? <Navigate to={"/CartGreeting/" + orderId} /> : ""}
        </div>
      </div>
    </div>
  )
}

export default Checkout;
