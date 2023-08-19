import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function App() {
  const [img, setImg] = useState(require("./src/biscoito.png"));
  const [textoFrase, setTextoFrase] = useState("");

  let frases = [
    "Life will bring good things if you have patience.",
    "Show love and joy at every opportunity and you'll see that peace is born within you.",
    "Don't make up in anger what you lack in reason.",
    "Flaws and virtues are just two sides of the same coin.",
    "The tallest of towers begins from the ground.",
    "It's not about being strong. It's about being flexible.",
    "People fix their hair every day, why not their hearts?",
    "There are three things that never return; the launched arrow, the spoken word, and the missed opportunity.",
    "Youth is not a time of life, it's a state of mind.",
    "We can choose what to sow, but we are obliged to reap what we plant.",
    "Give all your attention to your children's upbringing, especially by examples from your own life.",
    "Follow the good ones and learn from them.",
    "No matter the size of the mountain, it cannot block out the sun."
];

  quebraBiscoito = () => {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase('"'+frases[numeroAleatorio]+'"');
    setImg(require("./src/biscoitoAberto.png"));

  };

  resetBiscoito = () => {
    setImg(require("./src/biscoito.png"));
    setTextoFrase("");
  };


  return (
    <View style={styles.container}>

      <Image
        style={styles.img}
        source={img}
      />

      <Text style={styles.textofrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
        <Text style={styles.btnTexto} >Crack open your Cookie</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop:15, borderColor: '#121212'}]} onPress={resetBiscoito}>
        <View style={styles.btnArea}>
        <Text style={[styles.btnTexto, {color:'#121212'} ]} >Reset</Text>
        </View>
      </TouchableOpacity>


    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },
  botao: {  
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#dd7b22"
  }
});

export default App;


