import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ListaProdutos from "./Componentes /Adaptadores/ListaProdutos";

const produtos = [
  { id: 1, nome: "Coca-Cola", preco: 4.5},
  { id: 2, nome: "Pepsi", preco: 3.5},
  { id: 3, nome: "Fanta", preco: 5.1},
  { id: 4, nome: "Guaraná", preco: 3.9},
];



export default function Index() {
  let [contador,setContador] = useState(0)
  return (
    <View style={estilo.container}>
      <ListaProdutos produtos={produtos}></ListaProdutos>    
      <Button title={contador.toString()}
       onPress={()=>{Clicarbotao()}}></Button>

    </View>
    );
  function Clicarbotao(){
    setContador(contador++)
  };
}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
  },
  Text: {
    color:"#ffffff",
    fontSize: 20,
  },
  titulo:{
    color: "#8B0000",
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold"
  },
});