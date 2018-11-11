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
          let parsedDate = new Date(nextProps.selected).getDay()
          if (parsedDate == 0 && carpool.days.includes('M') ||
            parsedDate == 1 && carpool.days.includes('T') ||
            parsedDate == 2 && carpool.days.includes('W') ||
            parsedDate == 3 && carpool.days.includes('H') ||
            parsedDate == 4 && carpool.days.includes('F') ||
            parsedDate == 5 && carpool.days.includes('T') ||
            parsedDate == 6 && carpool.days.includes('S')
          ) {
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