import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import _ from 'lodash'
import moment from 'moment-weekdaysin'
import styles from './styles/CalendarView'
import ScheduledList from './styles/ScheduledList';

class CalendarView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dates: {},
      selected: new Date()
    }
  }

  componentWillMount() {
    let dates = {}
    _.forEach(this.props.carpools, carpool => {
      let daysArray = []
      let numberDays = carpool.scheduled_days.toString()
      _.forEach(numberDays, n => {
        daysArray.push(n)
      })
      var datesArray = moment(carpool.start).weekdaysInBetween(carpool.end, daysArray);
      _.forEach(datesArray, date => {
        dates[date.format('YYYY-MM-DD')] = {
          marked: true
        }
      })
      this.setState({
        dates
      })
    })
  }

  handleSelect = (day) => {
    if (this.state.selected == day.dateString) {
      this.setState({
        selected: ''
      })
      this.props.handleSelect('')
    } else {
      this.setState({
        selected: day.dateString
      })
      this.props.handleSelect(day.dateString)
    }
  }

  render() {
    const dates = _.merge({
      [this.state.selected]: {selected: true}
    }, this.state.dates)
    return (
      <View style={styles.container}>
        <Calendar
          minDate={'2018-01-01'}
          maxDate={'2022-12-31'}
          monthFormat={'MMMM yyyy'}
          onDayPress={(day) => this.handleSelect(day)}
          style={styles.calendar}
          markedDates={dates}
          hideExtraDays={true}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#aaa',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            monthTextColor: '#888',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 13
          }}
        />
      </View>
    )
  }
}
export default CalendarView