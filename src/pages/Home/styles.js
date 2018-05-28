import { StyleSheet } from 'react-native';
import { colors, normalize } from 'assets/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  title: {
    fontSize: normalize.font(20),
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 20,
  },

  item: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  avatar: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  info: {
    flex: 1,
  },

  loading: {
    marginVertical: 20,
  },
});
