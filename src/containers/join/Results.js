import React from 'react';
import { Text, Button, View, FlatList, TouchableOpacity} from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash'

import CarpoolResult from '../../components/join/CarpoolResult'
import MapRoutes from '../../components/home/MapRoutes'
import styles from './styles/Results'

class Results extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const title = 'Search Results'
    const headerRight = (
      <Button
        onPress={() => navigation.navigate('Filter')}
        title="Filter"
        color="#007AFF"
      />
    )
  
    return {
      title,
      headerRight
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      filtering: false,
      minArrival: '12:00 pm',
      maxArrival: '12:00 pm',
      minDeparture: '12:00 pm',
      maxDeparture: '12:00 pm',
      dates: {
        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
      },
      filtered: [],
      selected: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.carpools) {
      let filtered = []
      const filters = nextProps.filters
      _.forEach(nextProps.carpools, carpool => {
        // if (carpool.scheduled_arrival >= filters.minArrival &&
        //   carpool.scheduled_arrival <= filters.maxArrival &&
        //   carpool.scheduled_departure >= filters.minDeparture &&
        //   carpool.scheduled_departure <= filters.maxDeparture) {
        // carpool.scheduled_days
          filtered.push(carpool)
        // }
      })
      if (nextProps.sort == 'Distance') {
        filtered = _.orderBy(filtered, function (e) { return parseFloat(e.route.distance) }, ['asc'])
      } else if (nextProps.sort == 'Arrival Time') {
        filtered = _.orderBy(filtered, function (e) { return e.scheduled_arrival }, ['asc'])
      } else if (nextProps.sort == 'Departure Time') {
        filtered = _.orderBy(filtered, function (e) { return e.scheduled_departure }, ['asc'])
      }
      this.setState({
        filtered,
        selected: filtered.length > 0 ? filtered[0] : null
      })
    }
  }

  handleSelect = (selected) => {
    this.setState({
      selected
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapRoutes carpool={this.state.selected} />
        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <TouchableOpacity style={styles.filterIcon} onPress={() => this.setState({filtering: !this.state.filtering})}>
              <Icon name="sort" size={18} color='#FFF' />
            </TouchableOpacity>
            <Text style={styles.listTitle}>
              Results
            </Text>
          </View>
          <FlatList
            data={this.state.filtered}
            renderItem={({item}) => {
              return (
                <CarpoolResult data={item} handleSelect={this.handleSelect} />
              )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carpools: state.join.carpools,
    sort: state.join.sort,
    filters: state.join.filters
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)