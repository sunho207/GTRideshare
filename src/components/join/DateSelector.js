import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles/DateSelector'

class DateSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
    }
  }

  handleDateToggle = (date) => {
    this.props.handleDateToggle(date)
  }

  render() {
    const dates = this.props.dates
    return (
      <View style={styles.days}>
        <TouchableOpacity style={styles.day} onPress={() => this.handleDateToggle('sun')}>
          <Text style={dates.sun ? styles.dayTextOn : styles.dayTextOff}>Sun</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.day} onPress={() => this.handleDateToggle('mon')}>
          <Text style={dates.mon ? styles.dayTextOn : styles.dayTextOff}>Mon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.day} onPress={() => this.handleDateToggle('tue')}>
          <Text style={dates.tue ? styles.dayTextOn : styles.dayTextOff}>Tue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.day} onPress={() => this.handleDateToggle('wed')}>
          <Text style={dates.wed ? styles.dayTextOn : styles.dayTextOff}>Wed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.day} onPress={() => this.handleDateToggle('thu')}>
          <Text style={dates.thu ? styles.dayTextOn : styles.dayTextOff}>Thu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.day} onPress={() => this.handleDateToggle('fri')}>
          <Text style={dates.fri ? styles.dayTextOn : styles.dayTextOff}>Fri</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.day} onPress={() => this.handleDateToggle('sat')}>
          <Text style={dates.sat ? styles.dayTextOn : styles.dayTextOff}>Sat</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default DateSelector