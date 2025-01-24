import {scale, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Matches the CSS justify-content: center
    borderWidth: 1,
    borderColor: '#145E94', // Matches var(--BLUE, #145E94)
    borderRadius: 26, // Matches border-radius: 26px
    backgroundColor: '#FFF', // Matches var(--white, #FFF)
    //paddingVertical: 3, // Matches padding top and bottom: 11px
    paddingHorizontal: 15, // Matches padding left and right: 12px
    height: 40,
    //width: 120, // Example width
  },
  dropdownText: {
    color: '#000', // Color set to black
    textAlign: 'center', // Aligns text to the center
    fontFamily: 'Rubik', // Sets font family
    fontSize: 14, // Font size in px
    fontStyle: 'normal', // Sets font style to normal
    fontWeight: '400', // Sets font weight
    //lineHeight: '12.253px', // Line height converted from percentage to px
  },

  dropdownIcon: {
    marginLeft: 5,
  },
  sectionButton: {
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 10, // Horizontal padding (average 12px and 13px)
    justifyContent: 'center', // Centers content horizontally
    alignItems: 'center', // Centers content vertically
    borderRadius: 26, // Border radius
    borderWidth: 1, // Border width
    borderColor: '#145E94', // Fallback color for var(--BLUE)
    backgroundColor: '#FFF',
    width: 150,
  },
  sectionButtonText: {
    color: '#145E94', // Fallback color for var(--BLUE)
    textAlign: 'center', // Centers the text
    fontFamily: 'Rubik', // Ensure the font is linked correctly in your React Native project
    fontSize: 14, // Font size in dp
    fontStyle: 'normal', // Normal font style
    fontWeight: '400', // Font weight as a string in React Native
    //lineHeight: 10.253, // Converted line height from percentage to dp
  },
});

export default styles;
