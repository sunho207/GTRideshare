import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/Scheduled'
import CalendarView from '../../components/scheduled/CalendarView'
import ScheduledList from '../../components/scheduled/ScheduledList'

class Scheduled extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const title = 'My Carpools'
    const headerRight = (
      <Button
        onPress={() => navigation.navigate('ViewAll')}
        title="View All"
        color="#007AFF"
      />
    )
  
    return {
      title,
      headerRight
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      carpools: [
        {
          start: '2018-07-01',
          end: '2018-11-01',
          days: 'MWF'
        },
        {
          start: '2018-09-01',
          end: '2018-12-01',
          days: 'T'
        }
      ],
      selected: ''
    }
  }
  
  handleSelect = (date) => {
    this.setState({
      selected: date
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <CalendarView carpools={this.state.carpools} handleSelect={this.handleSelect} />
        <ScheduledList selected={this.state.selected} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carpools: state.join.carpools
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduled)