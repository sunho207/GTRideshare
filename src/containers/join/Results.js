import React from 'react';
import { Text, Image, View, FlatList, TouchableOpacity} from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/Results'

class Results extends React.Component {

  static navigationOptions = {
    title: 'Search Results'
  }

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
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
        <View style={styles.listContainer}>
          <View style={styles.listHeader}>
            <TouchableOpacity style={styles.filterIcon}>
              <Icon name="sort" size={18} color='#FFF' />
            </TouchableOpacity>
            <Text style={styles.listTitle}>
              Results
            </Text>
          </View>
          <FlatList
            data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}]}
            renderItem={({item}) => (
              <View style={styles.carpool}>
                <Image
                  style={styles.mainProfile}
                  source={{uri: 'https://www.billboard.com/files/styles/article_main_image/public/media/jack-dorsey-twitter-headshot-2015-billboard-650.jpg'}}
                />
                <View style={styles.infoContainer}>
                  <Text style={styles.name}>
                    John Doe
                  </Text>
                  <Text style={styles.schedule}>
                    MWF 11:00AM to 4:00PM
                  </Text>
                  <Text style={styles.distance}>
                    8.3 miles away
                  </Text>
                </View>
                <TouchableOpacity style={styles.messageContainer}>
                  <View style={styles.messageIcon}>
                    <Icon name="envelope" size={16} color='#FFF' />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(Results)