import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const alertImage = require('../../assets/alert.png');

export const Home = () => {
  const placeholderUser = {
    label: 'Solicitante...',
    value: null,
    color: '#9EA0A4',
  };

  const placeholderCategory = {
    label: 'Categoria...',
    value: null,
    color: '#9EA0A4',
  };

  const placeholderSubcategory = {
    label: 'Subcategoria...',
    value: null,
    color: '#9EA0A4',
  };

  const pickerStyle = {
    inputIOS: {
      color: 'white',
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
    },
    inputAndroid: {
      color: '#2f2d2d99',
      marginLeft: 24,
      fontSize: 24,
    },
    placeholderColor: 'white',
    underline: { borderTopWidth: 0 },
    icon: {
      position: 'absolute',
      backgroundColor: 'transparent',
      borderTopWidth: 5,
      borderTopColor: '#00000099',
      borderRightWidth: 5,
      borderRightColor: 'transparent',
      borderLeftWidth: 5,
      borderLeftColor: 'transparent',
      width: 0,
      height: 0,
      top: 20,
      right: 15,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}></View>
      <View style={styles.containerBottom}>
        <View style={styles.contentImage}>
          <Image
            source={alertImage}
            style={{
              flex: 1,
              width: 100,
              height: 100,
              resizeMode: 'contain',
            }}
          />
          <View style={styles.contentInput}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              useNativeAndroidPickerStyle={false}
              items={[
                { label: 'Maicon', value: 'maicon' },
                { label: 'Silvia', value: 'silvia' },
                { label: 'Maria', value: 'maria' },
              ]}
              placeholder={placeholderUser}
              style={pickerStyle}
            />
          </View>
          <View style={styles.contentInput}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              useNativeAndroidPickerStyle={false}
              items={[
                { label: 'Coletores', value: 'coletores' },
                { label: 'JD Edwards', value: 'linhaparada' },
                { label: 'Infraestrutura', value: 'recautomatico' },
              ]}
              placeholder={placeholderCategory}
              style={pickerStyle}
            />
          </View>
          <View style={styles.contentInput}>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              useNativeAndroidPickerStyle={false}
              items={[
                { label: 'Desempenho', value: 'football' },
                { label: 'Produção', value: 'baseball' },
                { label: 'Rede', value: 'hockey' },
              ]}
              placeholder={placeholderSubcategory}
              style={pickerStyle}
            />
          </View>
        </View>
      </View>
      <View style={styles.containerTouchable}>
        <TouchableOpacity onPress={() => Alert.alert('Click')}>
          <View style={styles.containerButton}>
            <Text style={styles.textButton}>Abrir Chamado</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64A2FF',
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerTop: {
    flex: 0.4,
    backgroundColor: '#FFC164',
    width: '100%',
  },
  containerBottom: {
    flex: 1,
    backgroundColor: '#FFF',
    height: '65%',
    width: '90%',
    maxWidth: '100%',
    position: 'absolute',
    marginTop: 120,
    borderRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  containerTouchable: {
    width: '90%',
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: 56,
  },
  containerButton: {
    borderRadius: 20,
    backgroundColor: '#FFC164',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    shadowOpacity: 2,
    elevation: 4,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  contentImage: {
    position: 'absolute',
    // backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    marginTop: -56,
  },
  contentInput: {
    flex: 1,
    marginTop: 32,
    width: '90%',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    elevation: 2,
  },
});
