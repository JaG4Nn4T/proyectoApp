/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  KeyboardAvoidingView, //se ajusta con el teclado
  Dimensions, //determina las dimensiones en las animaciones
} from 'react-native';
import {Button, Checkbox} from 'react-native-paper';
import {ImageBackground} from 'react-native';
//Continuar en 15:50
export default function Hlc() {
  const [offset /**setOffset*/] = useState(new Animated.ValueXY({x: 0, y: 10}));
  useEffect(() => {
    Animated.spring(offset.y, {toValue: 0, speed: 4, bounciness: 20}).start;
  }, []);
  return (
    <KeyboardAvoidingView style={estilos.contenedor}>
      <View style={estilos.cabeza}>
        <Image source={require('./imagenes/logo.png')} style={estilos.logo} />
      </View>

      <Animated.View
        style={[
          estilos.cuerpo,
          {
            transform: [{translateY: offset.y}],
          },
        ]}>
        <View style={estilos.textEntrada}>
          <Text style={estilos.texto}>Correo</Text>
          <TextInput
            style={estilos.inpuTex}
            placeholder="ejemplo@gmail.com"
            autoCorrect={false}
            onChange={() => {}}
          />
          <Text style={estilos.texto}>Contraseña</Text>
          <TextInput
            style={estilos.inpuTex}
            placeholder="********"
            autoCorrect={false}
            secureTextEntry
            onChange={() => {}}
          />
        </View>
        <View style={estilos.textT}>
          <Checkbox />
          <Text>Recordar contraseña</Text>
        </View>
        <View style={estilos.conBotones}>
          <TouchableOpacity style={estilos.boton}>
            <Text style={estilos.texto}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.boton}>
            <Text style={estilos.texto}>Crear</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onChange={() => {}}>
          <Text style={estilos.olvidar}>Olvide contraseña</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#191919',
  },
  cabeza: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'green',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //resizeMode: 'contain',
  },
  cuerpo: {
    flex: 1,
    width: '90%',
    backgroundColor: '#fffff9',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 0,
    paddingBottom: 50,
  },
  textEntrada: {
    flexDirection: 'column',
    marginVertical: 15,
  },
  inpuTex: {
    fontSize: 15,
    textAlign: 'center',
    width: 250,
    //height: '11%',
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 15,
    marginTop: 0,
    borderColor: 'green',
    //color: '#222',
    //fontFamily: 'tahoma',
  },
  texto: {
    fontSize: 17,
    textAlign: 'left',
    color: '#001a57',
  },
  textT: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  conBotones: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  boton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d53032',
    width: '30%',
    height: '90%',
    borderRadius: 25,
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'green',
  },
  iconoBoton: {
    width: 18,
    height: 18,
    //borderRadius: 9,  //opcional
  },
  texBoton: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fffff9',
    textAlign: 'justify',
    marginHorizontal: 8,
  },
  olvidar: {
    color: 'blue',
  },
  pie: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconoRedes: {
    width: 24,
    height: 24,
    //borderRadius: 12,  //opcional
    marginHorizontal: 10,
  },
});
