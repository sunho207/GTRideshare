import React from 'react';
import { Image } from 'react-native';
import { MapView } from 'expo'
import _ from 'lodash'
import styles from './styles/MapRoutes'

class MapRoutes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: null
    }
  }

  componentDidMount() {
    this.initializeMap(this.props.carpool)
  }

  componentWillReceiveProps(nextProps) {
    this.initializeMap(nextProps.carpool)
  }

  decode = (t, e) => {
		for (var n, o, u = 0, l = 0, r = 0, d = [], h = 0, i = 0, a = null, c = Math.pow(10, e || 5); u < t.length;) {
			a = null, h = 0, i = 0;
			do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32);
			n = 1 & i ? ~(i >> 1) : i >> 1, h = i = 0;
			do a = t.charCodeAt(u++) - 63, i |= (31 & a) << h, h += 5; while (a >= 32);
			o = 1 & i ? ~(i >> 1) : i >> 1, l += n, r += o, d.push([l / c, r / c])
		}

		return d = d.map(function(t) {
			return {
				latitude: t[0],
				longitude: t[1],
			}
		})
  }
  
  fitMarkers = (markers) => {
    if (markers) {
      this.map.fitToCoordinates(markers, {
        edgePadding: { top: 100, right: 100, bottom: 300, left: 100 }
      })
    }
  }

  createMarker = (lat, lng) => {
    return {
      latitude: lat,
      longitude: lng,
    };
  }
  
  initializeMap = (selected) => {
    if (selected) {
      let markers = []
      markers.push(this.createMarker(selected.route.destination.lat, selected.route.destination.lng))
      _.forEach(selected.carpoolers, c => {
        markers.push(this.createMarker(c.carpooler_lat, c.carpooler_lng))
      })
      this.setState({
        coordinates: this.decode(selected.route.directions),
        markers
      })
      this.fitMarkers(markers)
    }
  }

  render() {
    return (
      <MapView
        style={styles.map}
        provider={MapView.PROVIDER_GOOGLE}
        ref={ref => { this.map = ref; }}
        onLayout = {() => this.fitMarkers(this.state.markers)}
      >
        <MapView.Polyline
          coordinates={this.state.coordinates}
          strokeWidth={5}
          strokeColor="#4FC3F7"
        />
        {this.state.markers && this.state.markers.map(marker => (
          <MapView.Marker
            key={marker.latitude + marker.longitude}
            coordinate={marker}
          />
        ))}
      </MapView>
    )
  }
}

export default MapRoutes