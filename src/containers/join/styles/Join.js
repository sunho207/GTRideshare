import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: Dimensions.get('window').width * 0.1,
    paddingRight: Dimensions.get('window').width * 0.1
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
  buttonContainer: {
    bottom: 15,
    position: 'absolute',
    alignItems: 'center',
    left: Dimensions.get('window').width * 0.1,
  },
  findButton: {
    backgroundColor: '#4FC3F7',
    borderRadius: 5,
    padding: 12,
    marginTop: 30,
    width: Dimensions.get('window').width * 0.8,
    margin: 5
  },
  findText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 13,
    textAlign: 'center'
  },
  createText: {
    color: '#42A5F5',
    fontWeight: '500',
    fontSize: 13,
    textAlign: 'center',
    margin: 5
  },
  title: {
    color: '#777',
    fontSize: 18,
    marginTop: 25,
    marginBottom: 10
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
  seatInput: {
    width: 115,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    fontSize: 12,
    color: '#777',
    textAlign: 'center'
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  timePickerFull: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    width: 180
  },
  timeToText: {
    marginLeft: 5,
    marginRight: 5,
    padding: 8,
    color: '#777'
  },
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  }
})
