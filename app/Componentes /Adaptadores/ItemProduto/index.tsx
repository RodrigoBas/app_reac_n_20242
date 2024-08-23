import { Text,View } from "react-native";

function ItemProduto ({produto}: {produto:{nome:string, preco:number} } ) {
    return(
        <View>
            <Text >{produto.nome}</Text>
            <Text >{produto.nome}</Text>
        </View>
    )

}

export default ItemProduto;