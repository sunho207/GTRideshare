import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  carpool: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20
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
  divider:{
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    height: 1,
    width: '80%',
    marginTop: 30,
    marginBottom: 30
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
    fontSize: 18,
    paddingTop: 2
  },
  othersSubtext: {
    color: '#777',
    fontSize: 15,
    paddingTop: 4
  },
  carpoolInfo: {
    width: '33%',
    alignItems: 'center'
  },
  carpoolMoreInfo: {
    width: '50%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  profileText: {
    color: '#999',
    fontSize: 9,
    marginBottom: 5
  },
  profileSubtext: {
    color: '#555',
    width: '70%',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  profileSubtext2: {
    color: '#555',
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
    marginTop: 10,
    marginBottom: 5
  },
  phone: {
    marginTop: 20
  },
  carpoolersText: {
    color: '#555',
    fontSize: 16,
    marginBottom: 15,
    fontWeight: '600',
    textAlign: 'left',
    width: '80%'
  },
  carpoolersContainer: {
    width: '80%',
    alignItems: 'flex-start'
  },
  carpoolerText: {
    color: '#555',
    marginTop: -38,
    marginLeft: 55,
    fontSize: 14,
    fontWeight: 'bold'
  },
  carpoolerSubtext: {
    marginTop: 3,
    marginLeft: 55,
    color: '#888',
    fontSize: 11
  },
  messageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#fff',
    backgroundColor: '#42A5F5',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
