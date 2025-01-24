import {scale, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  matchHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingLeft: 15,
    paddingTop: 10,
  },
  smallContainer: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    color: '#210C0C',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '600',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#B0AAAA',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  matchContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Ensures content wraps within the container
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  team: {
    alignItems: 'center',
    flex: 1, // Allows flexible width for responsiveness
    maxWidth: '20%', // Ensures each team occupies a maximum percentage of the container
    marginHorizontal: 5,
  },
  name: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Rubik',
    color: '#210C0C',
  },
  tag: {
    fontSize: 12,
    color: '#B0AAAA',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
  },
  scores: {
    alignItems: 'center',
    flex: 1.5, // Slightly larger flex for the score section
    maxWidth: '30%', // Allows scores section to take a larger portion of the container
    marginHorizontal: 5,
  },
  score: {
    color: '#000',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: 2.545,
  },
  setScore: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  systemMessage: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  systemText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 12,
    color: '#777',
  },
  fakeCard: {
    width: '100%',
    height: 2,
    backgroundColor: '#EEEEEE',
    marginTop: 20,
    marginBottom: 20,
  },
  scrollContent: {
    paddingHorizontal: 2, // Adjust the padding to your desired value
  },
});

export default styles;
