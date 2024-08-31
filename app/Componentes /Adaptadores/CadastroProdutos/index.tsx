import { useState } from "react";
import { TextInput, View, Text } from "react-native";

const CadastroProduto = ()=>{
let [nome, setNome] = useState('')
let [descricao,setDescricao] = useState ('')
    return(
        <View>
            <Text>Home:</Text>
            <TextInput onChangeText={setNome} value={nome}/>
            <Text>Descrição:</Text>
            <TextInput onChangeText={setDescricao} value={descricao}/>
        </View>
    )
}
export default CadastroProduto