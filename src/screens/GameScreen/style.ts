import {scale, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginVertical: 8,
    // padding: 16,
  },
  matchHeader: {
    height: 70,
    width: '100%',
    // marginBottom: 8,
    // var
  },
  location: {
    color: '#145E94',
    fontFamily: 'Rubik', // Use Rubik font
    fontSize: 16,
    fontWeight: '400', // Matches the Rubik Regular weight
    lineHeight: 18, // Slightly adjusted for better readability
    textAlign: 'right',
    textDecorationLine: 'underline', // React Native equivalent for text-underline-position
  },
  textSUB: {
    color: '#B0AAAA', // Var(--grey)
    fontFamily: 'Rubik', // Ensure the Rubik font is linked in the project
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12.253, // Use percentage line height calculated in px
    textAlign: 'right', // Text alignment to the right
    marginTop: 2,
    marginLeft: 3,
    marginRight: 5,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  playersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 14,
  },
  playerItem: {
    alignItems: 'center',
  },
  playerName: {
    paddingTop: 2,
    fontWeight: '660', // Bold font
    marginTop: 8, // Margin at the top
    fontFamily: 'Rubik', // Custom font family (ensure Rubik is added to your project)
    fontSize: 14, // Font size in points
    fontStyle: 'normal', // Normal font style
    lineHeight: 12.253, // Line height in points
    color: '#210C0C', // Text color
  },
  playerTitle: {
    paddingTop: 4,
    color: '#B0AAAA', // Matches the specified gray color
    fontFamily: 'Poppins', // Custom font family (ensure Poppins is added to your project)
    fontSize: 12, // Font size in points
    fontStyle: 'normal', // Normal font style
    fontWeight: '400', // Font weight
    lineHeight: 10.503, // Line height in points (calculated from 87.523% of 12px)
  },
  vsText: {
    paddingTop: 4,
    fontWeight: '400', // Matches the provided font weight
    fontSize: 21, // Matches the provided font size
    // marginHorizontal: 8, // Matches the given spacing
    textAlign: 'right', // Aligns text to the right
    fontFamily: 'Rubik', // Custom font family (ensure Rubik is added to your project)
    color: '#145E94', // Matches the specified color
    lineHeight: 18.38,
  },
  addPlayer: {
    alignItems: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1,
    paddingLeft: 15,
  },
  gradientButton: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 52,
  },
  gradientButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerText: {
    paddingTop: 5,
    color: '#B0AAAA', // Equivalent to var(--grey, #B0AAAA)
    fontFamily: 'Rubik', // You need to ensure 'Rubik' is properly linked in your project
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12.253, // Equivalent to 87.523% of fontSize
    textAlign: 'right',
  },
});

export default styles;
