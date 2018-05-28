import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from 'assets/styles';

import { View, Text, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ExampleActions } from 'store/ducks/example';

import styles from './styles';

class Home extends Component {
  static propTypes = {
    getExampleRequest: PropTypes.func.isRequired,
    getExampleRefreshRequest: PropTypes.func.isRequired,
    example: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        full_name: PropTypes.string,
      })),
      loading: PropTypes.bool,
      refreshing: PropTypes.bool,
    }).isRequired,
  };

  static navigationOptions = {
    title: 'RN Boilerplate',
  };

  componentDidMount() {
    this.props.getExampleRequest();
  }

  handleLoadMore = () => this.props.example.data.length >= 20 && this.props.getExampleRequest();

  handleRefresh = () => {
    this.props.getExampleRefreshRequest();
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.props.example.data.length && this.props.example.loading ? (
          <ActivityIndicator size="small" color={colors.primary} style={styles.loading} />
        ) : (
          <View>
            <TouchableOpacity onPress={() => Actions.products()}>
              <Text>Ir para produtos</Text>
            </TouchableOpacity>

            <FlatList
              data={this.props.example.data}
              keyExtractor={example => String(example.id)}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <Image style={styles.avatar} source={{ uri: item.picture.thumbnail }} />
                  <Text style={styles.info}>{item.name.first}</Text>
                </View>
              )}
              refreshing={this.props.example.refreshing}
              onRefresh={this.handleRefresh}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={0.1}
              ListFooterComponent={
                this.props.example.loading && (
                  <ActivityIndicator size="small" color={colors.primary} style={styles.loading} />
                )
              }
            />
          </View>
        )}
      </View>
    );
  }
}

const mapState = state => ({
  example: state.example,
});
const mapActions = dispatch => bindActionCreators(ExampleActions, dispatch);

export default connect(mapState, mapActions)(Home);
