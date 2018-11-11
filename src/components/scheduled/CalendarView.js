import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import _ from 'lodash'
import moment from 'moment-weekdaysin'
import styles from './styles/CalendarView'

class CalendarView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dates: {},
      selected: new Date()
    }
  }

  componentWillMount() {
    this.handleNextMonth({ dateString: new Date()})
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

  handleNextMonth = (month) => {
    let dates = {}
    _.forEach(this.props.carpools, carpool => {
      let daysArray = []
      for (var i = 0; i < carpool.days.length; i++) {
        if (carpool.days.charAt(i) == 'S') {
          daysArray.push(0)
        } else if (carpool.days.charAt(i) == 'M') {
          daysArray.push(1)
        } else if (carpool.days.charAt(i) == 'T') {
          daysArray.push(2)
        } else if (carpool.days.charAt(i) == 'W') {
          daysArray.push(3)
        } else if (carpool.days.charAt(i) == 'H') {
          daysArray.push(4)
        } else if (carpool.days.charAt(i) == 'F') {
          daysArray.push(5)
        } else if (carpool.days.charAt(i) == 'T') {
          daysArray.push(6)
        }
      }
      let carpoolStart = new Date(month.dateString)
      let carpoolEnd = new Date(carpoolStart.getFullYear(), carpoolStart.getMonth() + 2, 0)
      carpoolStart = carpoolStart >= new Date(carpool.start) ? carpoolStart : carpool.start
      carpoolEnd = carpoolEnd <= new Date(carpool.end) ? carpoolEnd : carpool.end

      var datesArray = moment(carpoolStart).weekdaysInBetween(carpoolEnd, daysArray);
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
          onMonthChange={(month) => this.handleNextMonth(month)}
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