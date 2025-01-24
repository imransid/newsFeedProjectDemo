import {scale, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#1F1B1B',
    paddingLeft: 20,
  },
  profileImage: {
    width: 40.714,
    height: 40.714,
    borderRadius: 20.357,
    backgroundColor: '#A5A5A5',
    overflow: 'hidden',
  },
  name: {
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  subtitle: {
    color: '#B0AAAA',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 10.5,
  },
});

export default styles;
