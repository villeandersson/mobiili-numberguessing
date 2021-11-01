import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, } from 'react-native';

export default function App() {
  const [arvaus, setArvaus] = useState ("");
  const [numero, setNumero] = useState (Math.floor(Math.random() * 100) + 1);
  const [vastaus, setVastaus] = useState ("Arvaa numero 0 ja 100 väliltä");
  let [maara, setMaara] = useState (0);
  
  function buttonPressed() {
    setMaara(maara + 1);
    if (parseInt(arvaus) == numero) {
      Alert.alert("Oikein meni! Arvasit " + (maara + 1) + " kertaa.");
    } else if (parseInt(arvaus) < numero) {
      setVastaus("Arvaa isompaa");
    } else {
      setVastaus("Arvaa pienempää");
    }
  }

  return (
      <View style={styles.container}>
        <Text>{vastaus}</Text>
        <TextInput style={styles.input}onChangeText={arvaus=> setArvaus(arvaus)}value={arvaus} keyboardType="numeric"/>
        <View style={styles.buttons}>
          <Button onPress={buttonPressed} title="Arvaa" />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 150
  },
  input: {
    marginTop: 15,
    width:200,
    borderColor:'gray',
    borderWidth:1
  },
  buttons: {
    width: 60,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});