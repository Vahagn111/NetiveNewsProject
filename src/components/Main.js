import React, { useState } from "react";
import {StyleSheet,View, Text,TouchableOpacity,FlatList,Image,Modal} from "react-native";
import { gStyle } from "../assets/styles/style";
import { Ionicons } from '@expo/vector-icons';
import Form from './Form'



export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool!",
      key: "1",
      img: "https://beonmax.com/img/cover/cover_small/javascript-advanced.jpg",
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool!",
      key: "2",
      img: "https://beonmax.com/img/cover/cover_small/react-js.jpg",
    },
    {
      name: "FaceBook",
      anons: "FaceBook!!!",
      full: "FaceBook is cool!",
      key: "3",
      img: "https://beonmax.com/img/cover/cover_small/python-advanced.jpg",
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false)

  const addArticle = (article) =>{
      setNews((list)=>{
        article.key=Math.random().toString()
          return[
              article,
              ...list
          ]
      });
      setModalWindow(false);
  }

  return (
    <View style={gStyle.main}>
        <Modal visible={modalWindow}>
           <Ionicons name="close" size={35} color="red" style={styles.iconAdd} onPress={()=>setModalWindow(false)}/>
           <View style={gStyle.main}>
               <Text style={styles.title}>Форма добавления статей</Text>
           </View>
        </Modal>
    <Ionicons name="add-circle" buttom={20} size={35} color="green" style={styles.iconAdd} onPress={()=>setModalWindow(true)}/>
      <Text style={gStyle.title}>Главная страница</Text>
      <Form addArticle={addArticle}/>
      <FlatList
        data={news}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[gStyle.title, styles.header]}
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image source={{
                width: 300,
                height: 150,
                uri: item.img,
              }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: "100%",
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    color: '#474747'
  },
  anons:{
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: '#474747'
  },
  iconAdd:{
      textAlign:'center',
      top:30
  }
});
