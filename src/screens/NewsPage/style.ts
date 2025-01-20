import {scale, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 16,
  },
  greeting: {
    fontSize: 18,
    color: '#555',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  searchBar: {
    flex: 1,
    borderRadius: 10,
    marginRight: 8,
  },
  dateItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: '55@s',
    width: '55@s',
  },
  dateItemSelectedContainer: {
    borderWidth: 2,
    borderRadius: '50@s',
    borderColor: '#C1E100', // Matches the green highlight in the screenshot
    padding: 10,
  },
  dateNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555', // Default gray
  },
  dateNumberSelected: {
    color: '#C1E100', // Matches the green text for the selected date
  },
  dateDay: {
    fontSize: 12,
    color: '#555', // Default gray
  },
  dateDaySelected: {
    color: '#C1E100', // Matches the green text for the selected day
  },
  card: {
    marginVertical: 16,
    borderRadius: 10,
  },
  cardImage: {
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  favoriteIcon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  timeItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  timeItemSelected: {
    backgroundColor: '#d1f0d6',
    borderColor: '#4CAF50',
  },
  timeText: {
    color: '#555',
  },
  timeTextSelected: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  // activitiesContainer: {
  //   marginTop: 20, // Add your own styling here
  //   flex: 1,
  //   paddingHorizontal: 16,
  // },
});

export default styles;
