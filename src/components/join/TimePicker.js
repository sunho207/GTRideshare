import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
import styles from './styles/TimePicker'

class TimePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTimePicker: false
    }
  }

  showTimePicker = () => this.setState({ showTimePicker: true });

  hideTimePicker = () => this.setState({ showTimePicker: false });

  handleTimePicked = (time) => {
    this.props.handleTime(moment(time).format('hh:mm a'))
    this.hideTimePicker()
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.timePicker} onPress={this.showTimePicker}>
          <Text style={styles.timePickerText}>{this.props.time}</Text>
        </TouchableOpacity>>
        <DateTimePicker
          isVisible={this.state.showTimePicker}
          onConfirm={this.handleTimePicked}
          onCancel={this.hideTimePicker}
          mode='time'
          titleIOS="Please pick a time"
        />
      </View>
    )
  }
}
export default TimePicker