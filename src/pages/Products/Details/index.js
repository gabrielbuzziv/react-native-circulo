import React, { Component } from 'react';

import { View, Text, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import styles from './styles';

class Details extends Component {
  static defaultProps = {
    success: null,
    product: {},
  };

  state = {};

  render() {
    const { success, product, osvaldo } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.success}>{success}</Text>

        {product && product.name && <Text style={styles.text}>{product.id}</Text>}


        <ScrollView>
        {osvaldo.data.map(user => (
          <Text style={styles.success}>{user.name.first}</Text>
        ))}
        </ScrollView>
      </View>
    );
  }
}

const mapState = state => ({
  osvaldo: state.example,
});

export default connect(mapState)(Details);
