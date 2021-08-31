import { red } from "color-name";
import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { FlatButton } from "../components/Button";
import { globalStyle } from "../components/style/globalStyle";

const WelcomeScreen = () => {

  return (
    <View  style={globalStyle.container}>
      {/* Imagen */}
      <View style={styles.logoSection}>

      </View>
      {/* Botones */}
      <View style={styles.buttonSection}>
        <FlatButton
          color="#07CCFF"
          text="Ingresa"
          onPress={() => console.log("pressed")}
        />
        <FlatButton
          color="#5146AF"
          text="Registrate"
          onPress={() => console.log("pressed")}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  logoSection:{
    flex: 60,
    backgroundColor:'blue'
  },  
  buttonSection: {
    flex: 40,
    alignItems: 'center',
    backgroundColor: 'red'
  }
});
