import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

const alertImage = require('../../../assets/alert.png');

const AppButton = ({ onPress, title, backgroundColor }: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.appButtonContainer, (backgroundColor = { backgroundColor })]}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const buttonAlert = () =>
  Alert.alert(
    'Confirmar',
    'Lembre-se que está ação irá tornar sua solitação como prioritária e poderá ocasionar transtornos, deseja continuar ?',
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        // style: 'cancel',
      },
      { text: 'Confirmar', onPress: () => console.log('OK Pressed') },
    ]
  );

const OpenTicket = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentImage}>
          <Image
            source={alertImage}
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
          />
        </View>
        <View style={styles.contentInput}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            useNativeAndroidPickerStyle={false}
            items={[
              { label: 'Maicon', value: 'maicon' },
              { label: 'Silvia', value: 'silvia' },
              { label: 'Maria', value: 'maria' },
            ]}
            placeholder={picker.placeholderUser}
            style={picker.pickerStyle}
          />
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            useNativeAndroidPickerStyle={false}
            items={[
              { label: 'Coletores', value: 'coletores' },
              { label: 'JD Edwards', value: 'linhaparada' },
              { label: 'Infraestrutura', value: 'recautomatico' },
            ]}
            placeholder={picker.placeholderCategory}
            style={picker.pickerStyle}
          />
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            useNativeAndroidPickerStyle={false}
            items={[
              { label: 'Desempenho', value: 'football' },
              { label: 'Produção', value: 'baseball' },
              { label: 'Rede', value: 'hockey' },
            ]}
            placeholder={picker.placeholderSubcategory}
            style={picker.pickerStyle}
          />
        </View>
      </View>
      <View style={styles.contentButton}>
        <AppButton
          onPress={buttonAlert}
          title="abrir chamado"
          backgroundColor="green"
        />
      </View>
      <View style={styles.contentButton}>
        <AppButton
          onPress={() => BackHandler.exitApp()}
          title="sair"
          backgroundColor="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1c1277',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: '90%',

    borderRadius: 10,
    elevation: 4,
    height: 500,

    marginTop: 100,
  },
  contentImage: {
    alignItems: 'center',
    marginTop: -56,
  },
  contentInput: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-around',
  },
  contentButton: {
    // marginBottom: 30,
    width: '90%',
  },

  //BUTTON STYLES
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

const picker = {
  placeholderUser: {
    label: 'Solicitante...',
    value: null,
    color: '#9EA0A4',
  },
  placeholderCategory: {
    label: 'Categoria...',
    value: null,
    color: '#9EA0A4',
  },
  placeholderSubcategory: {
    label: 'Subcategoria...',
    value: null,
    color: '#9EA0A4',
  },
  pickerStyle: {
    inputAndroid: {
      color: '#2f2d2d99',
      marginLeft: 24,
      fontSize: 20,
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
  },
};

export default OpenTicket;
