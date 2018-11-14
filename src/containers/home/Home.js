import React from 'react';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel'
import MapRoutes from '../../components/home/MapRoutes'
import Carpool from '../../components/home/Carpool'
import styles from './styles/Home'
import _ from 'lodash'
import { getMyCarpools } from '../../actions/scheduled'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      up: true
    }
  }

  componentWillMount() {
    const { height, width } = Dimensions.get('window')
    this.setState({
      height,
      width
    })
    this.props.getMyCarpools(this.props.user.user_id)
  }

  handleDrag = (position) => {
    if (position > (this.state.height * 2)/3) {
      this.setState({
        up: false
      })
    } else {
      this.setState({
        up: true
      })
    }
  }

  render() {
    if (_.isEqual(this.props.carpool, {})) {
      return (
        <View></View>
      )
    }
    return (
      <View style={styles.container}>
        <MapRoutes carpool={this.props.carpool} />
        <SlidingUpPanel
          visible
          startCollapsed
          showBackdrop={false}
          allowMomentum
          onDrag={(position) => this.handleDrag(position)}
          draggableRange={{
            top: this.state.height - 40,
            bottom: 288 + (Platform.OS === 'ios' && (this.state.height === 812 || this.state.width === 812)
              ? 34 : 0)
          }}
        >
          <Carpool carpool={this.props.carpool} up={this.state.up}/>
        </SlidingUpPanel>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    carpool: state.home.carpool
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMyCarpools: (user_id) => dispatch(getMyCarpools(user_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)