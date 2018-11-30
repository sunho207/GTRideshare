import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash'
import styles from './styles/Scheduled'
import PendingList from '../../components/scheduled/PendingList'
import { getPending, acceptUserToCarpool, deleteUserFromCarpool } from '../../actions/scheduled'

class Pending extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const title = 'Pending'
  
    return {
      title
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }
  }

  componentWillMount() {
    this.props.getPending(this.props.user.user_id)
  }

  handleAccept = (user_id, carpool_id) => {
    this.props.acceptUserToCarpool(user_id, carpool_id)
  }

  handleReject = (user_id, carpool_id) => {
    this.props.rejectUserFromCarpool(user_id, carpool_id)
  }

  render() {
    return (
      <View style={styles.container}>
        <PendingList users={this.props.pending} handleAccept={this.handleAccept} handleReject={this.handleReject} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    pending: state.scheduled.pending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPending: (user_id) => dispatch(getPending(user_id)),
    acceptUserToCarpool: (user_id, carpool_id) => dispatch(acceptUserToCarpool(user_id, carpool_id)),
    rejectUserFromCarpool: (user_id, carpool_id) => dispatch(rejectUserFromCarpool(user_id, carpool_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pending)