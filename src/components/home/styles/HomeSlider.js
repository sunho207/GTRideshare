import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  slider: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingTop: 20
  },
  row: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 30,
    margin: 25,
    marginRight: 20,
    marginTop: 0
  },
  row: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  driverWrapper: {
    flexDirection:'column',
  },
  driverText: {
    color: '#888',
    marginTop: 10,
    fontSize: 12
  },
  driverSubtext: {
    fontWeight: 'bold',
    color: '#555',
    fontSize: 18
  },
  carpoolInfo: {
    width: '33%',
    alignItems: 'center'
  },
  profileText: {
    color: '#999',
    fontSize: 9,
    marginBottom: 5
  }, 
  profileSubtext: {
    color: '#777',
    width: '70%',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  profileSubtext2: {
    color: '#777',
    width: '70%',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    borderWidth: 1,
    borderColor: '#555',
    width: '40%',
    height: 40,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
    paddingTop: 3
  },
  buttonText: {
    color: '#555',
    fontSize: 11
  },
  up: {
    alignItems: 'center',
    marginTop: 10
  }
})
