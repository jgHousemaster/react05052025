import { useEffect, useState } from "react";
import Solution from "./Solution";

const initialCartItems = [
  { id: 1, name: "Apple", price: 0.99, quantity: 0 },
  { id: 2, name: "Banana", price: 3.99, quantity: 0 },
  { id: 3, name: "Orange", price: 2.99, quantity: 0 },
  { id: 4, name: "Mango", price: 1.99, quantity: 0 },
];

export default function ShoppingCart() {
  const [items, setItems] = useState(initialCartItems);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      items.reduce((accum, current) => {
        return accum + current.quantity * current.price;
      }, 0)
    );
  }, items);
  const handleMinus = (id) => {
    setItems((pre) =>
      pre.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: Math.max(item.quantity - 1, 0),
          };
        } else {
          return item;
        }
      })
    );
  };
  const handleAdd = (id) => {
    setItems((pre) =>
      pre.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <th>{item.name}</th>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => {
                      handleMinus(item.id);
                    }}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => {
                      handleAdd(item.id);
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>Total Price: ${total.toFixed(2)}</div>
      <button
        onClick={() => {
          setItems((pre) =>
            pre.map((item) => {
              return { ...item, quantity: 0 };
            })
          );
        }}
      >
        Empty Cart
      </button>
    </div>
  );
}
