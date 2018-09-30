import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  locationInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    fontSize: 12,
    marginLeft: 0,
    marginRight: 0,
    height: 38
  },
  locationInputContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  locationContainer: {
    backgroundColor: '#fff',
  },
  cancelButton: {
    backgroundColor: '#ffcdd2',
    borderRadius: 5,
    padding: 12,
    marginTop: 30,
    width: Dimensions.get('window').width * 0.8,
    margin: 5
  },
  cancelText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 13,
    textAlign: 'center'
  },
  buttonContainer: {
    bottom: 15,
    position: 'absolute',
    alignItems: 'center',
    left: Dimensions.get('window').width * 0.1,
  },
})
