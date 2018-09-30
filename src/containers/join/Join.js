import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles/Join'
import DateSelector from '../../components/join/DateSelector'
import GoogleLocationInput from '../../components/join/GoogleLocationInput'
import TimePicker from '../../components/join/TimePicker'

class Join extends React.Component {

  static navigationOptions = {
    title: 'Join Carpool'
  }

  constructor(props) {
    super(props);
    this.state = {
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
      typing: false,
      locationSearch: '',
      lat: '',
      lng: ''
    }
  }

  handleFind = () => {
    this.props.navigation.navigate('Results')
  }

  handleCreate = () => {
    this.props.navigation.navigate('Create')
  }

  handleCancel = () => {
    this.setState({
      typing: false
    })
  }

  handleDateToggle = (date) => {
    const dates = this.state.dates
    dates[date] = !dates[date]
    this.setState({
      dates
    })
  }

  handleLocationSelect = (description, lat, lng) => {
    this.setState({
      locationSearch: description,
      lat,
      lng,
      typing: false
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

  render() {
    if (this.state.typing) {
      return (
        <GoogleLocationInput
          search={this.state.locationSearch}
          handleLocationSelect={this.handleLocationSelect}
          handleCancel={this.handleCancel}
        />
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carpool Schedule</Text>
        <DateSelector dates={this.state.dates} handleDateToggle={this.handleDateToggle} />
        <Text style={styles.title}>Pickup Location</Text>
        <TextInput
          style={styles.locationInput}
          onChangeText={e => this.setState({typing: true, locationSearch: e.toString()})}
          value={this.state.locationSearch}
          placeholder="Type a new location or select from favorites..."
        />
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.handleFind()}
            style={styles.findButton}
          >
            {
              this.state.loading ?
                <ActivityIndicator style={styles.loading} size="small" color="#fff" /> :
                <Text style={styles.findText}>Find Carpools</Text>
            }
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleCreate()}>
            <Text style={styles.createText}>Or create a new carpool</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Join)