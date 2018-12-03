import React from 'react';
import { Text, Button, View, FlatList, TouchableOpacity} from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash'

import CarpoolResult from '../../components/join/CarpoolResult'
import CarpoolMap from '../../components/scheduled/CarpoolMap'
import styles from './styles/Results'
import { joinCarpool } from '../../actions/join'

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
        if (carpool.scheduled_arrival >= filters.minArrival &&
          carpool.scheduled_arrival <= filters.maxArrival &&
          carpool.scheduled_departure >= filters.minDeparture &&
          carpool.scheduled_departure <= filters.maxDeparture) {
          filtered.push(carpool)
        }
      })
      if (nextProps.sort == 'Distance') {
        filtered = _.orderBy(filtered, function (e) { return parseFloat(e.route.distance) }, ['asc'])
      } else if (nextProps.sort == 'Arrival Time') {
        filtered = _.orderBy(filtered, function (e) { return e.scheduled_arrival }, ['asc'])
      } else if (nextProps.sort == 'Departure Time') {
        filtered = _.orderBy(filtered, function (e) { return e.scheduled_departure }, ['asc'])
      }
      filtered.push({})
      this.setState({
        filtered,
        selected: filtered.length > 1 ? filtered[0] : null
      })
    }
  }

  handleSelect = (selected) => {
    this.setState({
      selected
    })
  }

  handleCreate = () => {
    this.props.navigation.navigate('Create')
  }

  handleJoin = (carpool) => {
    this.props.joinCarpool(this.props.user.user_id, carpool.carpool_id, carpool.route.origin.lat, carpool.route.origin.lng)
    this.props.navigation.navigate('Join')
  }

  render() {
    return (
      <View style={styles.container}>
        <CarpoolMap carpool={this.state.selected} />
        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <View style={styles.filterIcon}>
              <Icon name="sort" size={18} color='#FFF' />
            </View>
            <Text style={styles.listTitle}>
              Results
            </Text>
          </View>
          <FlatList
            data={this.state.filtered}
            renderItem={({item}) => {
              if (_.isEqual(item, {})) {
                return (
                  <TouchableOpacity style={styles.createContainer} onPress={this.handleCreate}>
                    <Text style={styles.createText}>Didn't find what you were looking for?</Text>
                  </TouchableOpacity>
                )
              } else {
                return (
                  <CarpoolResult data={item} handleSelect={this.handleSelect} handleJoin={this.handleJoin} />
                )
              }
              
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
    user: state.login.user,
    carpools: state.join.carpools,
    sort: state.join.sort,
    filters: state.join.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    joinCarpool: (user_id, carpool_id, user_lat, user_lng) => dispatch(joinCarpool(user_id, carpool_id, user_lat, user_lng))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)