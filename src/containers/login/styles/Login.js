import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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
  loginButton: {
    backgroundColor: '#4FC3F7',
    borderRadius: 20,
    padding: 12,
    marginTop: 30,
    width: Dimensions.get('window').width * 0.8,
    margin: 5
  },
  loginText: {
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
  forgotpwText: {
    color: '#42A5F5',
    fontWeight: '500',
    fontSize: 13,
    textAlign: 'center',
    margin: 15
  },
  loading: {
    height: 15
  }
})
