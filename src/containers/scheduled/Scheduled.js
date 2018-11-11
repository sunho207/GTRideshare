import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash'
import styles from './styles/Scheduled'
import CalendarView from '../../components/scheduled/CalendarView'
import ScheduledList from '../../components/scheduled/ScheduledList'
import { viewCarpool, getMyCarpools } from '../../actions/scheduled'

class Scheduled extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const title = 'My Carpools'
    // const headerRight = (
    //   <Button
    //     onPress={() => navigation.navigate('ViewAll')}
    //     title="Pending"
    //     color="#007AFF"
    //   />
    // )
  
    return {
      title,
      // headerRight
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }
  }

  componentWillMount() {
    this.props.getMyCarpools()
  }
  
  handleSelect = (date) => {
    this.setState({
      selected: date
    })
  }

  handleView = (carpool) => {
    this.props.viewCarpool(carpool)
    this.props.navigation.navigate('CarpoolView')
  }

  render() {
    if (_.isEqual(this.props.carpools, [])) {
      return (
        <View></View>
      )
    }
    return (
      <View style={styles.container}>
        <CalendarView carpools={this.props.carpools} handleSelect={this.handleSelect} />
        <ScheduledList carpools={this.props.carpools} selected={this.state.selected} handleView={this.handleView} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carpools: state.scheduled.carpools
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewCarpool: (carpool) => dispatch(viewCarpool(carpool)),
    getMyCarpools: () => dispatch(getMyCarpools())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduled)