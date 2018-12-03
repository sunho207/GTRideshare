import React from 'react';
import { connect } from 'react-redux';
import { Text, Image, View, FlatList, TouchableOpacity} from 'react-native';
import moment from 'moment'

import DateSelector from '../../components/join/DateSelector'
import TimePicker from '../../components/join/TimePicker'
import RNPickerSelect from 'react-native-picker-select';

import styles from './styles/Results'
import { searchCarpools, filterCarpools } from '../../actions/join'

class Filter extends React.Component {

  static navigationOptions = () => {
    const title = 'Filter'
  
    return {
      title
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
      items: [
        {
            label: 'Arrival Time',
            value: 'Arrival Time',
        },
        {
            label: 'Departure Time',
            value: 'Departure Time',
        },
    ],
    }
  }

  componentWillMount() {
    if (this.props.filters) {
      this.setState({
        dates: this.props.filters.dates,
        minArrival: moment(this.props.filters.minArrival, "HH:mm").format("hh:mm a"),
        maxArrival: moment(this.props.filters.maxArrival, "HH:mm").format("hh:mm a"),
        minDeparture: moment(this.props.filters.minDeparture, "HH:mm").format("hh:mm a"),
        maxDeparture: moment(this.props.filters.maxDeparture, "HH:mm").format("hh:mm a"),
      })
    }
  }

  handleDateToggle = (date) => {
    const dates = this.state.dates
    dates[date] = !dates[date]
    this.setState({
      dates
    })
  }

  handleMinArrival = (time) => {
    this.setState({
      minArrival: time
    })
  }

  handleMaxArrival = (time) => {
    this.setState({
      maxArrival: time
    })
  }

  handleMinDeparture = (time) => {
    this.setState({
      minDeparture: time
    })
  }

  handleMaxDeparture = (time) => {
    this.setState({
      maxDeparture: time
    })
  }

  handleFilter = () => {
    this.props.filterCarpools(this.state.selected, {
      dates: this.state.dates,
      minArrival: moment(this.state.minArrival, "hh:mm a").format("HH:mm"),
      maxArrival: moment(this.state.maxArrival, "hh:mm a").format("HH:mm"),
      minDeparture: moment(this.state.minDeparture, "hh:mm a").format("HH:mm"),
      maxDeparture: moment(this.state.maxDeparture, "hh:mm a").format("HH:mm"),
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listContainerFiltering}>
          <View style={styles.filterContainer}>
            <Text style={styles.sortTitle}>Sort By</Text>
            <RNPickerSelect
              placeholder={{
                label: 'Distance',
                value: 0,
              }}
              items={this.state.items}
              onValueChange={(value) => {
                this.setState({
                    selected: value,
                })
              }}
              style={{inputIOS: styles.sortInput}}
              hideIcon
              value={this.state.selected}
            />
            <Text style={styles.filterTitle}>Filters</Text>
            <Text style={styles.title}>Carpool Schedule</Text>
            <DateSelector dates={this.state.dates} handleDateToggle={this.handleDateToggle} />
            <Text style={styles.title}>Arrival Time</Text>
            <View style={styles.timeContainer}>
              <TimePicker time={this.state.minArrival} handleTime={this.handleMinArrival} />
              <Text style={styles.timeToText}>to</Text>
              <TimePicker time={this.state.maxArrival} handleTime={this.handleMaxArrival} />
            </View>
            <Text style={styles.title}>Departure Time</Text>
            <View style={styles.timeContainer}>
              <TimePicker time={this.state.minDeparture} handleTime={this.handleMinDeparture} />
              <Text style={styles.timeToText}>to</Text>
              <TimePicker time={this.state.maxDeparture} handleTime={this.handleMaxDeparture} />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.handleFilter()}
            style={styles.filterButton}
          >
            {
              this.state.loading ?
                <ActivityIndicator style={styles.loading} size="small" color="#fff" /> :
                <Text style={styles.filterText}>Filter</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.join.filters,
    sort: state.join.sort
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterCarpools: (sort, filters) => dispatch(filterCarpools(sort, filters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)