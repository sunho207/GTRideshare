import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    backgroundColor: '#fff',
    height: '100%'
  },
  listContainerFiltering: {
    top: 0,
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
  cancelButton: {
    position: 'absolute',
    left: 15
  },
  cancelText: {
    color: '#fff',
    fontWeight: '500'
  },
  createText: {
    color: '#42A5F5',
    fontWeight: '500',
    fontSize: 13,
    textAlign: 'center',
    margin: 5
  },
  createContainer:{
    marginTop: 10
  },
  doneIcon: {
    position: 'absolute',
    right: 15
  },
  filterContainer: {
    paddingTop: 5,
    paddingBottom: 15,
    alignItems: 'center'
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  timeToText: {
    marginLeft: 5,
    marginRight: 5,
    padding: 8,
    color: '#777'
  },
  title: {
    color: '#777',
    fontSize: 12,
    marginTop: 7.5,
    marginBottom: 7.5
  },
  sortTitle: {
    color: '#777',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 7.5,
    marginBottom: 7.5
  },
  filterTitle: {
    color: '#777',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 22.5,
    marginBottom: 7.5
  },
  buttonContainer: {
    bottom: 15,
    position: 'absolute',
    alignItems: 'center',
    left: Dimensions.get('window').width * 0.1,
  },
  filterButton: {
    backgroundColor: '#4FC3F7',
    borderRadius: 5,
    padding: 12,
    marginTop: 30,
    width: Dimensions.get('window').width * 0.8,
    margin: 5
  },
  filterText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 13,
    textAlign: 'center'
  },
  sortInput: {
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    height: 35,
    textAlign: 'center',
    width: Dimensions.get('window').width * 0.8,
    left: Dimensions.get('window').width * 0.1,
    alignItems: 'center'
  }
})
