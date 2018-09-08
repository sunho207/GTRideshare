import React from 'react';
import { Text, View, Button } from 'react-native';
import { MapView } from 'expo';
import MapViewDirections from 'react-native-maps-directions';
import { connect } from 'react-redux';
import styles from './styles/Home'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    // const origin = {latitude: 37.3318456, longitude: -122.0296002};
    // const destination = {latitude: 37.771707, longitude: -122.4053769};
    // const GOOGLE_MAPS_APIKEY = 'AIzaSyCbKtXYrYUnKnJeOFdAmdZGQ5wI5ogD2gc';

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
          /> */}
        </MapView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)