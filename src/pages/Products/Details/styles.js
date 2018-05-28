import { StyleSheet } from 'react-native';
import { colors } from 'assets/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
  },

  text: {
    color: colors.white,
  },

  success: {
    backgroundColor: colors.success,
    padding: 10,
    margin: 20,
    color: colors.white,
  },
});
