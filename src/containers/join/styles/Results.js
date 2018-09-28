import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  },
  listContainer: {
    top: Dimensions.get('window').height / 2.5,
    backgroundColor: '#fff',
  },
  listHeader: {
    height: 45,
    backgroundColor: '#4FC3F7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700'
  },
  filterIcon: {
    position: 'absolute',
    left: 15
  },
  carpool: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: Dimensions.get('window').width,
    height: 75,
    flexDirection: 'row'
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
    color: '#4FC3F7',
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
  messageContainer: {
    flexDirection: 'column',
    height: 74,
    width: 60,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  messageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#fff',
    backgroundColor: '#4FC3F7',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
