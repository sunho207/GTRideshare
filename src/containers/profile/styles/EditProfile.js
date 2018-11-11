import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 25,
    paddingRight: 25
  },
  row: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  profile: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 50,
    marginBottom: 10,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  updatePhoto: {
    color: '#42A5F5',
    fontWeight: '700',
    fontSize: 13,
    textAlign: 'center',
    margin: 5
  },
  title: {
    color: '#777',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    fontSize: 12,
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: '#777'
  },
  halfInput: {
    width: '45%',
    height: 38,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginRight: '5%',
    fontSize: 12,
    color: '#777'
  },
  updateButton: {
    backgroundColor: '#4FC3F7',
    borderRadius: 5,
    padding: 12,
    marginTop: 10,
    width: Dimensions.get('window').width * 0.8
  },
  updateText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 13,
    textAlign: 'center'
  },
  logoutText: {
    color: '#333',
    fontWeight: '600',
    marginTop: 10,
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
