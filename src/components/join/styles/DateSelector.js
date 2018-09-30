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
    margin: 8,
    fontWeight: '900',
    color: '#ccc'
  },
  dayTextOn: {
    textAlign: 'center',
    margin: 8,
    fontWeight: '900',
    color: '#4FC3F7'
  }
})
