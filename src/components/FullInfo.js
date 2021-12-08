import React, {useEffect} from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { gStyle } from "../assets/styles/style";


export default function Contacts( {route} ) {

  useEffect(() => {
   console.log(route)
  }, [route])

  return (
    <View style={gStyle.main}>
      <Image
              source={{
                width: 300,
                height: 150,
                uri: route.params.img,
              }}
            />
      <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  full:{
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: '#f105f1'
  },
  
  header:{
    fontSize:25,
    marginTop:25
  }
});
