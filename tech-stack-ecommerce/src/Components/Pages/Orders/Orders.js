import React, { useState, useEffect } from "react";
import { db } from "./../../../firebase";
import "./Orders.css";
import { useStateValue } from "./../../../StateProvider";
import Order from "./../../Fragments/Order/Order";
import {
  collection,
  // doc,
  // getDoc,
  getDocs,
  // orderBy,
  // query,
} from "firebase/firestore";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
    //   const q = query(
    //     collection(db, `users/${user?.id}/orders`),
    //     orderBy("created")
    //   );

      const fetchData = async () => {
          const path = `/users/${user?.uid}/orders/`;
        const snapshot = await getDocs(collection(db, path));
        console.log(snapshot.docs)

        setOrders(
          snapshot.docs.map((document) => {
            console.log(document);
            return {
              id: document.id,
              data: document.data(),
            };
          })
        );
      };

      // db
      // .collection('users')
      // .doc(user?.uid)
      // .collection('orders')
      // .orderBy('created', 'desc')
      // .onSnapshot(snapshot => (

      fetchData();

      //   setOrders(
      //     snapshot.docs.map((document) => ({
      //       id: document.id,
      //       data: document.data(),
      //     }))
      //   );
      // ))
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
