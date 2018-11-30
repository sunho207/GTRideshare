import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  chatroom: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width,
    height: 75,
    flexDirection: 'row'
  },
  row: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  profile: {
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
    marginTop: 2,
    fontSize: 14
  },
  message: {
    marginTop: 2,
    fontSize: 12,
    color: '#aaa'
  }
})
