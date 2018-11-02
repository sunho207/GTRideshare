import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment'
import RNPickerSelect from 'react-native-picker-select';
import DateSelector from '../../components/join/DateSelector'
import GoogleLocationInput from '../../components/join/GoogleLocationInput'
import TimePicker from '../../components/join/TimePicker'
import styles from './styles/Join'
import { createCarpool } from '../../actions/join'

class Create extends React.Component {

  static navigationOptions = {
    title: 'Create New Carpool'
  }

  constructor(props) {
    super(props);
    this.inputRefs = {};
    this.state = {
      arrival: '12:00 pm',
      departure: '12:00 pm',
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
        { label: '1 seat',
          value: 1, },
        { label: '2 seats',
          value: 2, },
        { label: '3 seats',
          value: 3, },
        { label: '4 seats',
          value: 4, }
      ],
      typing: false,
      locationSearch: '',
      lat: '',
      lng: ''
    }
  }
  
  handleCreate = () => {
    let dates = ""
    if (this.state.dates.sun) {
      dates += "S"
    }
    if (this.state.dates.mon) {
      dates += "M"
    }
    if (this.state.dates.tue) {
      dates += "T"
    }
    if (this.state.dates.wed) {
      dates += "W"
    }
    if (this.state.dates.thu) {
      dates += "T"
    }
    if (this.state.dates.fri) {
      dates += "F"
    }
    if (this.state.dates.sat) {
      dates += "S"
    }
    if (this.state.lat == '' || this.state.lng == '') {
      alert("Please enter an address")
    } else if (dates == '') {
      alert("Please select a carpool schedule")
    } else {
      const user = JSON.parse(this.props.user)
      this.props.createCarpool(
        user.user_id,
        this.state.lat,
        this.state.lng,
        moment(this.state.arrival, "hh:mm a").format("HH:mm"),
        moment(this.state.departure, "hh:mm a").format("HH:mm"),
        dates
      )
      this.props.navigation.navigate('Scheduled')
    }
  }

  handleCancel = () => {
    this.setState({
      typing: false
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

  handleDateToggle = (date) => {
    const dates = this.state.dates
    dates[date] = !dates[date]
    this.setState({
      dates
    })
  }

  handleArrival = (time) => {
    this.setState({
      arrival: time
    })
  }

  handleDeparture = (time) => {
    this.setState({
      departure: time
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
        <Text style={styles.title}>My Address</Text>
        <TextInput
          style={styles.locationInput}
          onChangeText={e => this.setState({typing: true, locationSearch: e.toString()})}
          value={this.state.locationSearch}
          placeholder="Type a new location or select from favorites..."
        />
        <Text style={styles.title}>Additional Seats</Text>
        <View style={styles.timeContainer}>
          <RNPickerSelect
            placeholder={{
                label: '# of seats...',
                value: null,
            }}
            items={this.state.items}
            onValueChange={(value) => {
                this.setState({
                    seats: value,
                });
            }}
            hideIcon
            value={this.state.seats}
            ref={(el) => {
                this.inputRefs.picker = el;
            }}
            style={{inputIOS: styles.seatInput}}
          />
        </View>
        <Text style={styles.title}>Arrival Time</Text>
        <View style={styles.timeContainer}>
          <TimePicker time={this.state.arrival} handleTime={this.handleArrival} />
        </View>
        <Text style={styles.title}>Departure Time</Text>
        <View style={styles.timeContainer}>
          <TimePicker time={this.state.departure} handleTime={this.handleDeparture} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.handleCreate()}
            style={styles.findButton}
          >
            {
              this.state.loading ?
                <ActivityIndicator style={styles.loading} size="small" color="#fff" /> :
                <Text style={styles.findText}>Create New Carpool</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCarpool: (user_id, lat, lng, arrival, departure, days) => {
      dispatch(createCarpool(user_id, lat, lng, arrival, departure, days)
    )}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)