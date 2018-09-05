import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  bgImage: {
    position: 'absolute',
    height: Dimensions.get('window').height
  },
  bgOverlay: {
    backgroundColor: '#4FC3F7',
    opacity: 0.9,
    position: 'absolute',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  logoImage: {
    width: Dimensions.get('window').width * 0.8,
    margin: 100
  },
  buttonGroup: {
    position: 'absolute',
    bottom: 60
  },
  loginButton: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    padding: 12,
    width: Dimensions.get('window').width * 0.8,
    margin: 5
  },
  loginText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 13,
    textAlign: 'center'
  },
  signupButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 12,
    width: Dimensions.get('window').width * 0.8,
    margin: 5
  },
  signupText: {
    color: '#4FC3F7',
    fontWeight: '900',
    fontSize: 13,
    textAlign: 'center'
  }
})
