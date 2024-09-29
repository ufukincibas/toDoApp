import React , {useState}from "react";
import { Text, FlatList,View,Button, StyleSheet  } from "react-native";

function App(){
  const [toDoNumber, set_toDoNumber] =useState(0)
  return(
    <View>
      <View style={styles.container}>
      <Text style={styles.header}>
        YAPILACAKLAR
      </Text>
      <Text style={styles.toDoNumber}>{toDoNumber}</Text> 
      </View>
            <View // bu wiew body kısmı flatlist gelcek
            >
           
            </View>
      
            <View //bu wiewin içine searchbar gelecek 
            >
      
      <Button title='Kaydet' // onPress te searchbar dan bilgiyi alıp flatlist şeklinde bilgiyi <text>yazacak</text> ve ne kadar yapılacak olduğu sayısını usetate ile ekranın sağ üstüne atacak
      onPress={() => set_toDoNumber(toDoNumber +1)} /> 
          </View> 
    </View>

  )
}


export default App;

const styles =StyleSheet.create({
  container :{flexDirection:'row',
    alignItems: "center", // Yatayda hizalama
    justifyContent: "space-between", // Elemanları birbirinden uzaklaştırır (soldan sağa)
    
  },
  header:{color:'orange',
    fontWeight:'bold',
    fontSize:25,
   
  },
  toDoNumber:{
    color:'orange',
    fontWeight:'bold',
    fontSize:25,
    paddingRight:15,
   

    
  }
})