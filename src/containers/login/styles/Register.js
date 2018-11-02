import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    position: 'absolute',
    height: Dimensions.get('window').height
  },
  bgOverlay: {
    backgroundColor: '#fff',
    opacity: 0.9,
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 25
  },
  submitButton: {
    backgroundColor: '#4FC3F7',
    borderRadius: 20,
    padding: 12,
    marginTop: 30,
    width: Dimensions.get('window').width * 0.8,
    margin: 5
  },
  submitText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 13,
    textAlign: 'center'
  },
  input: {
    width: Dimensions.get('window').width * 0.8,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    padding: 5,
    color: '#777'
  },
  inputText: {
    width: Dimensions.get('window').width * 0.8,
    textAlign: 'left',
    marginTop: 15,
    color: '#42A5F5',
    fontSize: 10,
    fontWeight: '700'
  },
  verified: {
    top: -30,
    marginBottom: -20,
    right: Dimensions.get('window').width * -0.4 + 10
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  nameLeftContainer: {
    flexDirection: 'column',
    width: Dimensions.get('window').width * 0.4,
  },
  nameRightContainer: {
    flexDirection: 'column',
    width: Dimensions.get('window').width * 0.4,
    borderLeftWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 10
  },
  nameInput: {
    padding: 5,
    color: '#777'
  },
  nameInputText: {
    textAlign: 'left',
    color: '#42A5F5',
    fontSize: 10,
    fontWeight: '700'
  },
  title: {
    fontSize: 18,
    letterSpacing: 1,
    color: '#64B5F6',
    fontWeight: '700',
    position: 'absolute',
    top: 100
  }
})
