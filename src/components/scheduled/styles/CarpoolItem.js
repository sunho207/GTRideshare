import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  carpool: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: Dimensions.get('window').width,
    height: 75,
    flexDirection: 'row'
  },
  row: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  mainProfile: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 12.5,
    marginLeft: 20
  },
  infoContainer: {
    flexDirection: 'column',
    marginLeft: 15,
    marginTop: 15
  },
  name: {
    fontWeight: '700',
    color: '#777',
    fontSize: 14
  },
  others: {
    color: '#777',
    fontSize: 14
  },
  distance: {
    fontSize: 11,
    color: '#aaa'
  },
  schedule: {
    fontWeight: '600',
    fontSize: 11,
    color: '#aaa'
  },
  acceptContainer: {
    flexDirection: 'column',
    height: 74,
    width: 60,
    position: 'absolute',
    right: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  acceptIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#fff',
    opacity: 0.8,
    backgroundColor: '#43A047',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rejectContainer: {
    flexDirection: 'column',
    height: 74,
    width: 60,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rejectIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#fff',
    opacity: 0.8,
    backgroundColor: '#e53935',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
