import { StyleSheet } from "react-native"

const Style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
    },
    card: {
      width: 250,
      height: 150,
      backgroundColor: '#2f2f2f',
      borderRadius: 10,
      elevation: 5, // Para Android
      shadowColor: '#000', // Para iOS
      shadowOffset: { width: 0, height: 2 }, // Para iOS
      shadowOpacity: 0.1, // Para iOS
      shadowRadius: 4, // Para iOS
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginVertical:20,
    },
    cardText: {
      fontSize: 20,
      color: '#8B0000',
      fontWeight: "bold"
    },
    image:{
      width:250,
      height:250,
      objectFit:"contain",
      resizeMode:"contain",
    }
  });

  export default Style