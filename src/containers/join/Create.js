import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
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
      stage: 1,
      arrival: '10:00 am',
      departure: '2:00 pm',
      start: '',
      end: '',
      seats: '',
      semester: '',
      year: '',
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
      semesters: [
        { label: 'Fall',
          value: {start: '-08-01', end: '-12-31' }},
        { label: 'Spring',
          value: {start: '-01-01', end: '-05-31' }},
        { label: 'Summer',
          value: {start: '-06-01', end: '-07-31' }},
      ],
      typing: false,
      locationSearch: '',
      lat: '',
      lng: ''
    }
  }
  
  handleCreate = () => {
    let dates = ""
    if (this.state.semester == '' || this.state.year == '') {
      alert("Please select the semester and year")
    } else {
      if (this.state.dates.sun) {
        dates += "0"
      }
      if (this.state.dates.mon) {
        dates += "1"
      }
      if (this.state.dates.tue) {
        dates += "2"
      }
      if (this.state.dates.wed) {
        dates += "3"
      }
      if (this.state.dates.thu) {
        dates += "4"
      }
      if (this.state.dates.fri) {
        dates += "5"
      }
      if (this.state.dates.sat) {
        dates += "6"
      }
      const user = this.props.user
      const start = this.state.year + this.state.semester.start
      const end = this.state.year + this.state.semester.end
      this.props.createCarpool(
        user.user_id,
        this.state.lat,
        this.state.lng,
        moment(this.state.arrival, "hh:mm a").format("HH:mm"),
        moment(this.state.departure, "hh:mm a").format("HH:mm"),
        dates,
        start,
        end,
        this.state.seats + 1,
        this.state.locationSearch
      )
      this.props.navigation.navigate('Scheduled')
    }
  }

  handleNext = () => {
    if (this.state.stage == 1 && this.state.lat == '' || this.state.lng == '') {
      alert("Please enter an address")
    } else if (this.state.stage == 2 && !this.state.dates.sun && !this.state.dates.mon
        && !this.state.dates.tue && !this.state.dates.wed && !this.state.dates.thu
        && !this.state.dates.fri && !this.state.dates.sat) {
      alert("Please select a carpool schedule")
    } else if (this.state.stage == 5 && this.state.seats == '') {
      alert("Please select a number of seats")
    } else {
      this.setState({
        stage: this.state.stage + 1
      })
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
        <Image
          style={styles.bgImage}
          source={require('../../resources/create-carpool.jpg')}
        />
        {
          this.state.stage == 1 && 
            <View>
              <Text style={styles.description}>Please enter in the address that you will depart from.</Text>
              <TextInput
                style={styles.locationInput}
                onChangeText={e => this.setState({typing: true, locationSearch: e.toString()})}
                value={this.state.locationSearch}
                placeholder="Type a new location or select from favorites..."
              />
            </View>
        }

        {
          this.state.stage == 2 && (
            <View>
              <Text style={styles.description}>Which days are you looking to carpool on?</Text>
              <DateSelector dates={this.state.dates} handleDateToggle={this.handleDateToggle} />
            </View>
          )
        }

        {
          this.state.stage == 3 && (
            <View>
              <Text style={styles.description}>What time will you plan on arriving at Georgia Tech?</Text>
              <View style={styles.timeContainer}>
                <TimePicker time={this.state.arrival} handleTime={this.handleArrival} />
              </View>
            </View>
          )
        }

        {
          this.state.stage == 4 && (
            <View>
              <Text style={styles.description}>What time will you plan on departing from Georgia Tech?</Text>
              <View style={styles.timeContainer}>
                <TimePicker time={this.state.departure} handleTime={this.handleDeparture} />
              </View>
            </View>
          )
        }

        {
          this.state.stage == 5 && (
            <View>
              <Text style={styles.description}>How many additional carpoolers can fit in your car?</Text>
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
            </View>
          )
        }

        {
          this.state.stage == 6 && (
            <View>
              <Text style={styles.description}>Which semester will you be carpooling?</Text>
              <View style={styles.timeContainer}>
                <RNPickerSelect
                  placeholder={{
                      label: 'Semester...',
                      value: null,
                  }}
                  items={this.state.semesters}
                  onValueChange={(value) => {
                    this.setState({
                        semester: value,
                    });
                  }}
                  hideIcon
                  value={this.state.semester}
                  ref={(el) => {
                      this.inputRefs.picker = el;
                  }}
                  style={{inputIOS: styles.semesterInput}}
                />
                <RNPickerSelect
                  placeholder={{
                      label: 'Year...',
                      value: null,
                  }}
                  items={
                    [
                      {
                        label: '2019',
                        value: '2019'
                      },
                      {
                        label: '2020',
                        value: '2020'
                      },
                      {
                        label: '2021',
                        value: '2021'
                      },
                      {
                        label: '2022',
                        value: '2022'
                      },
                      {
                        label: '2023',
                        value: '2023'
                      }
                    ]
                  }
                  onValueChange={(value) => {
                    this.setState({
                        year: value,
                    });
                  }}
                  hideIcon
                  value={this.state.year}
                  ref={(el) => {
                      this.inputRefs.picker = el;
                  }}
                  style={{inputIOS: styles.semesterInput}}
                />
              </View>
            </View>
          )
        }

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={
              this.state.stage == 6 ?
              () => this.handleCreate() :
              () => this.handleNext()
            }
            style={styles.findButton}
          >
            {
              this.state.stage == 6 ?
                <Text style={styles.findText}>Create New Carpool</Text> :
                <Text style={styles.findText}>Next</Text>
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
    createCarpool: (user_id, lat, lng, arrival, departure, days, start, end, seats, address) => {
      dispatch(createCarpool(user_id, lat, lng, arrival, departure, days, start, end, seats, address)
    )}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)