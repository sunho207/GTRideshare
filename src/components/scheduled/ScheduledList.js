import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import CarpoolItem from './CarpoolItem'
import _ from 'lodash'
import styles from './styles/ScheduledList'

class ScheduledList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    }
  }

  componentWillReceiveProps(nextProps) {
    let filteredArray = []
    _.forEach(this.props.carpools, carpool => {
      if (Date.parse(carpool.start) <= Date.parse(nextProps.selected) && 
        Date.parse(carpool.end) >= Date.parse(nextProps.selected)) {
          let parsedDate = new Date(nextProps.selected).getDay() == 7 ? 0 : new Date(nextProps.selected).getDay() + 1
          let parsed = carpool.scheduled_days.toString()
          if (parsed.includes(parsedDate)) {
            filteredArray.push(carpool)
          }
      }
    })
    this.setState({
      filtered: filteredArray
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.selected == '' ? this.props.carpools : this.state.filtered}
          renderItem={({item}) => {
            return (
              <CarpoolItem carpool={item} handleView={this.props.handleView} />
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}
export default ScheduledList