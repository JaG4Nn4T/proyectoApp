import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function Boton1() {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.tex}>H</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: 45,
    backgroundColor: 'green',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  tex: {
    color: 'yellow',
  },
});

export default Boton1;