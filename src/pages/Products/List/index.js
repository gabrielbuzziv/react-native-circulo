import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Item } from './components';

import styles from './styles';

const List = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Esta é a listagem de produtos.</Text>

    <Item />

    <TouchableOpacity onPress={() => Actions.productsDetails({ success: 'Passando propriedades com successo', product: { id: 1, name: 'PRTE Box' } })}>
      <Text>VER DETALHES</Text>
    </TouchableOpacity>
  </View>
);

export default List;
