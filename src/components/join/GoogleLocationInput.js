import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Location } from 'expo'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles/GoogleLocationInput'

class GoogleLocationInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleLocationSelect= (data) => {
    Location.geocodeAsync(data.description)
      .then(result => {
        this.props.handleLocationSelect(data.description, result[0].latitude, result[0].longitude)
      })
    
  }

  handleCancel = () => {
    this.props.handleCancel()
  }

  render() {
    return (
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder='Type a new location or select from favorites...'
          minLength={2}
          autoFocus={true}
          returnKeyType={'search'}
          fetchDetails={true}
          renderDescription={row => row.description}
          onPress={(data) => this.handleLocationSelect(data)}
          getDefaultValue={() => this.props.search}
          query={{
            key: 'AIzaSyA4hZpFc5Kun6R7NKeSD2ES3kIQZAgr9gk',
            language: 'en'
          }}
          styles={{
            textInput: styles.locationInput,
            container: styles.locationContainer,
            textInputContainer: styles.locationInputContainer,
            powered: styles.locationPowered
          }}
          debounce={200}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.handleCancel()} style={styles.cancelButton} >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
export default GoogleLocationInput