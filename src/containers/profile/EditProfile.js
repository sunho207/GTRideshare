import React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles/EditProfile'
import { updateProfile, updatePhoto } from '../../actions/profile'

class EditProfile extends React.Component {

  static navigationOptions = {
    title: 'Edit Profile'
  }

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      profile_picture: '',
      phone_number: ''
    }
  }

  componentWillMount() {
    const user = this.props.user
    this.setState({
      first_name: user.first_name,
      last_name: user.last_name,
      profile_picture: user.profile_picture != 'https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png' ? user.profile_picture : '',
      phone_number: user.phone_number
    })
  }

  handleUpdate = () => {
    this.props.updateProfile(
      this.props.user.user_id,
      this.state.first_name,
      this.state.last_name,
      this.state.phone_number,
      this.state.profile_picture != '' ? this.state.profile_picture : 'https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.profile_picture != '' &&  this.state.profile_picture != 'placeholder' ?
            <Image
              style={styles.profile}
              source={{uri: this.state.profile_picture}}
            /> :
            <Image
              style={styles.profile}
              source={{uri: 'https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'}}
            />
        }
        
        {/* <TouchableOpacity>
          <Text style={styles.updatePhoto}>Update Photo</Text>
        </TouchableOpacity> */}
        <Text style={styles.title}>Full Name</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.halfInput}
            value={this.state.first_name}
            onChangeText={(e) => {this.setState({ first_name: e })}}
          />
          <TextInput
            style={styles.halfInput}
            value={this.state.last_name}
            onChangeText={(e) => {this.setState({ last_name: e })}}
          />
        </View>
        <Text style={styles.title}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={this.state.phone_number}
          onChangeText={(e) => {this.setState({ phone_number: e })}}
        />
        <Text style={styles.title}>Profile Url</Text>
        <TextInput
          style={styles.input}
          value={this.state.profile_picture}
          onChangeText={(e) => {this.setState({ profile_picture: e })}}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.handleUpdate()}
            style={styles.updateButton}
          >
            <Text style={styles.updateText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (idx, first_name, last_name, phone_number, profile_picture) => dispatch(updateProfile(idx, first_name, last_name, phone_number, profile_picture)),
    // updatePhoto: (url) => dispatch(updatePhoto(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)