import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.9, // Responsive width
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // Shadow for Android
  },
  textContainer: {
    flex: 1,
    marginRight: 10, // Space between text and image
  },
  category: {
    color: '#007aff', // Blue color for "News"
    fontFamily: 'Rubik', // Replace with your font if needed
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
  },
  title: {
    color: '#000',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timestamp: {
    color: '#808080', // Light gray color
    fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '400',
  },
  divider: {
    marginHorizontal: 5,
    color: '#808080',
    fontSize: 12,
  },
  comments: {
    color: '#808080',
    fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '400',
  },
  image: {
    width: 60, // Adjust width for proper scaling
    height: 60, // Match height to width for a square image
    borderRadius: 8, // Rounded corners
  },
});

export default styles;
