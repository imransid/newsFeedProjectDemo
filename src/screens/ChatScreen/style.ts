import {scale, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  iconArrow: {
    // paddingTop: 30
    // marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  date: {
    color: '#145E94',
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18.754,
    flex: 1,
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  messageContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 1},
  },
  highlightMessage: {
    backgroundColor: '#e0f7fa',
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  sender: {
    color: '#210C0C', // var(--black, #210C0C);
    textAlign: 'left',
    fontFamily: 'Rubik',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14.004, // Use exact pixel value for line height
  },
  messageText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  time: {
    fontSize: 10,
    color: '#aaa',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  textBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  textInput: {
    color: '#B0AAAA',
    flex: 1,
    height: 40, // Ensure the height is appropriate for typing
    fontSize: 14,
    backgroundColor: '#fff',
    borderColor: '#f9f9f9', // Set a matching border color
    borderWidth: 0, // Remove the border if it's unnecessary
    paddingHorizontal: 10, // Adjust the padding for better text alignment
  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default styles;
