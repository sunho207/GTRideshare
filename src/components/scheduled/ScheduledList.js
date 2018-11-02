import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Carpool from '../../components/scheduled/Carpool'
import _ from 'lodash'
import styles from './styles/ScheduledList'

class ScheduledList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carpools: [
        {
          name: 'Andy Kim',
          start: '2018-07-01',
          end: '2018-11-01',
          days: 'MWF'
        },
        {
          name: 'Anas Khan',
          start: '2018-09-01',
          end: '2018-12-01',
          days: 'T'
        }
      ],
      filtered: []
    }
  }

  componentWillReceiveProps(nextProps) {
    let filteredArray = []
    _.forEach(this.state.carpools, carpool => {
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
          data={this.state.filtered}
          renderItem={({item}) => {
            return (
              <Carpool data={item} />
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}
export default ScheduledList