import {scale, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avaterWraper: {
    borderColor: '#145E94',
    borderWidth: 1,
    borderRadius: 50,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
