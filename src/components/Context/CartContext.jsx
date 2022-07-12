// {
//     Pasos para crear el contexto:
// .... 1 Generar el archivo Context
//     2 Crear el contexto con el hook createContext()previamente importado de react
//     3 Extraer el Provider(Componente funcional)de su contexto creado en el paso anterior con destructuring
//     4 Crear La función CartProvider(componente funcional)donde tendremos todas las funciones que corresponden al carrito
//     5 La función Cart Provider debe devolver el Provider(Componente)que Llevaría como props Las funciones del carrito, y tener
//     6 Envolver todos los componentes con el Cart Provider en App.js
//     7 Armar las funciones necesarias para el carrito (addToCart, removeFromCart, clearCart, isInCart)
// }

import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext;


export const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (item, quantity) => {
    console.log(item)  //No me funciona este console.log
    if(isInCart(item.id)){ //verifica si el producto existe en el carrito
        const newCart = [...cart] // Copia del carrito asi lo puedo modificar
        for(const element of newCart){ //busco cual producto del carrito coindide con el q estoy agregando
            if(element.item.id === item.id){
                element.quantity = element.quantity + quantity; //cuando lo encuenrta le suma la cantidad
            }
        }
        setCart(newCart);  //Algo anda mal que no me suma la cantidad
    }else{

        setCart(
            [
                ...cart,
                {
                    item: item,
                    quantity: quantity
                }
            ]
        )
    }
  }


  const isInCart = (id) => {
    return cart.find((element)=> element.id === id);
  }

  const removeFromCart = (id) => {
    const newCart = [...cart].filter(element => element.item.id !== id);
    setCart(newCart);
  }
 
  const context = {   //el contexto toma todas las funciones que hayan
    cart,
    clearCart,
    addToCart,
    removeFromCart 
  };

  return <Provider value={context}>{children}</Provider>;
};
