import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  days: {
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  day: {
    width: Dimensions.get('window').width * 0.8/7,
  },
  dayTextOff: {
    textAlign: 'center',
    margin: 5,
    marginTop: 12,
    marginBottom: 12,
    fontWeight: '400',
    color: '#ccc',
    fontSize: 11
  },
  dayTextOn: {
    textAlign: 'center',
    margin: 5,
    marginTop: 12,
    marginBottom: 12,
    fontWeight: '600',
    color: '#4FC3F7',
    fontSize: 11
  }
})
