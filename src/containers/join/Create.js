import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import styles from './styles/Join'

class Create extends React.Component {

  static navigationOptions = {
    title: 'Create New Carpool'
  }

  constructor(props) {
    super(props);
    this.inputRefs = {};
    this.state = {
      minTime: '',
      maxTime: '',
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      items: [
        {
          label: '1 seat',
          value: 1,
        },
        {
          label: '2 seats',
          value: 2,
        },
        {
          label: '3 seats',
          value: 3,
        },
        {
          label: '4 seats',
          value: 4,
        }
      ]
    }
  }

  handleFind = () => {
    this.props.navigation.navigate('Results')
  }

  handleCreate = () => {
    this.props.navigation.navigate('Create')
  }

  showMinTimePicker = () => this.setState({ minTimePicker: true });

  hideMinTimePicker = () => this.setState({ minTimePicker: false });

  handleMinTimePicked = (time) => {
    this.setState({
      minTime: time
    })
    this.hideMinTimePicker();
  };

  showMaxTimePicker = () => this.setState({ maxTimePicker: true });

  hideMaxTimePicker = () => this.setState({ maxTimePicker: false });

  handleMaxTimePicked = (time) => {
    this.setState({
      maxTime: time
    })
    this.hideMaxTimePicker();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Carpool Schedule</Text>
        <View style={styles.days}>
          <TouchableOpacity style={styles.day} onPress={() => this.setState({sun: !this.state.sun})}>
            <Text style={this.state.sun ? styles.dayTextOn : styles.dayTextOff}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.day} onPress={() => this.setState({mon: !this.state.mon})}>
            <Text style={this.state.mon ? styles.dayTextOn : styles.dayTextOff}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.day} onPress={() => this.setState({tue: !this.state.tue})}>
            <Text style={this.state.tue ? styles.dayTextOn : styles.dayTextOff}>T</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.day} onPress={() => this.setState({wed: !this.state.wed})}>
            <Text style={this.state.wed ? styles.dayTextOn : styles.dayTextOff}>W</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.day} onPress={() => this.setState({thu: !this.state.thu})}>
            <Text style={this.state.thu ? styles.dayTextOn : styles.dayTextOff}>Th</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.day} onPress={() => this.setState({fri: !this.state.fri})}>
            <Text style={this.state.fri ? styles.dayTextOn : styles.dayTextOff}>F</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.day} onPress={() => this.setState({sat: !this.state.sat})}>
            <Text style={this.state.sat ? styles.dayTextOn : styles.dayTextOff}>S</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>My Address</Text>
        <TextInput
          style={styles.locationInput}
          onChangeText={e => this.setState({ pickup: e.toString()})}
          value={this.state.pickup}
          spellCheck={false}
          autoCapitalize="none"
          placeholder="Type a new location or select from favorites..."
        />
        <Text style={styles.title}>Seats Available</Text>
        <View style={styles.timeContainer}>
          <RNPickerSelect
            placeholder={{
                label: 'Select # of additional seats...',
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
          <TouchableOpacity style={styles.timePickerFull} onPress={this.showMinTimePicker}>
            <Text style={styles.timePickerText}>12:00 PM</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Departure Time</Text>
        <View style={styles.timeContainer}>
          <TouchableOpacity style={styles.timePickerFull} onPress={this.showMinTimePicker}>
            <Text style={styles.timePickerText}>12:00 PM</Text>
          </TouchableOpacity>
        </View>
        <DateTimePicker
          isVisible={this.state.minTimePicker}
          onConfirm={this.handleMinTimePicked}
          onCancel={this.hideMinTimePicker}
          mode='time'
          titleIOS="Earliest time you can arrive"
        />
        <DateTimePicker
          isVisible={this.state.maxTimePicker}
          onConfirm={this.handleMaxTimePicked}
          onCancel={this.hideMaxTimePicker}
          mode='time'
          titleIOS="Latest time you can arrive"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.handleFind()}
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
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)