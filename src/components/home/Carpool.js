import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import openMap from 'react-native-open-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash'
import call from 'react-native-phone-call'
import styles from './styles/Carpool'
import Carpooler from './Carpooler'

class Carpool extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }
  }

  componentWillMount() {
    this.props.carpool &&
      this.setState({
        selected: this.props.carpool.carpoolers[0]
      })
  }

  openDirections = () => {
    const start = this.props.carpool.route.origin
    const end = this.props.carpool.route.destination

    openMap({ 
      start: start.lat + ", " + start.lng,
      end: end.lat + ", " + end.lng,
      provider: "google",
      travelType: "drive"
    })
  }

  openPhone = () => {
    if (this.state.selected.phone_number) {
      call({
        number: this.state.selected.phone_number,
        prompt: false
      }).catch(console.error)
    } else {
      alert("No phone number on record")
    }
  }

  cleanedRoute = (address) => {
    return address.split(",")[0]
  }

  handleSelect = (carpooler) => {
    this.setState({
      selected: carpooler
    })
  }

  render() {
    const carpool = this.props.carpool
    const carpoolers = this.props.carpool && this.props.carpool.carpoolers
    const route = this.props.carpool && this.props.carpool.route
    return (
      <View style={styles.slider}>
        <View style={styles.up}>
          {
            this.props.up ?
              <Icon name="chevron-up" size={14} color='#ddd' /> :
              <Icon name="chevron-down" size={14} color='#ddd' />
          }
        </View>
        <View style={styles.row}>
          <Image
            style={styles.profile}
            source={{uri: carpool.captain.profile_picture }}
          />
          <View style={styles.driverWrapper}>
            <Text style={styles.driverText}>
              Driving With
            </Text>
            <View style={styles.row}>
              <Text style={styles.driverSubtext}>
                { carpool.captain.first_name + " " + carpool.captain.last_name + " "}
              </Text>
              <Text style={styles.othersSubtext}>
                {
                  carpoolers.length - 1 > 1 &&
                    `+ ${carpoolers.length - 2} ${carpoolers.length - 2 == 1 ? 'other' : 'others'}`
                }
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.carpoolInfo}>
              <Text style={styles.profileText}>Start Address</Text>
              <Text style={styles.profileSubtext}>{this.cleanedRoute(route.origin.address)}</Text>
            </View>
            <View style={styles.carpoolInfo}>
              <Text style={styles.profileText}>Captain</Text>
              <Text style={styles.profileSubtext}>{carpool.captain.first_name} {carpool.captain.last_name}</Text>
            </View>
            <View style={styles.carpoolInfo}>
              <Text style={styles.profileText}>End Address</Text>
              <Text style={styles.profileSubtext}>{this.cleanedRoute(route.destination.address)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Icon.Button name="comment" size={14} color='#555' backgroundColor='rgba(0,0,0,0)' disabled>
              <Text style={styles.buttonText}>
                Message Carpool
              </Text>
            </Icon.Button>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.openDirections()}>
            <Icon.Button name="map" size={14} color='#555' backgroundColor='rgba(0,0,0,0)' disabled>
              <Text style={styles.buttonText}>
                Open in Maps
              </Text>
            </Icon.Button>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <View style={styles.carpoolMoreInfo}>
            <Text style={styles.profileText}>Arrival at Tech</Text>
            <Text style={styles.profileSubtext2}>{carpool.scheduled_arrival}</Text>
          </View>
          <View style={styles.carpoolMoreInfo}>
            <Text style={styles.profileText}>Departure from Tech</Text>
            <Text style={styles.profileSubtext2}>{carpool.scheduled_departure}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.carpoolMoreInfo}>
            <Text style={styles.profileText}>Carpool Schedule</Text>
            <Text style={styles.profileSubtext2}>{carpool && carpool.days}</Text>
          </View>
          <View style={styles.carpoolMoreInfo}>
            <Text style={styles.profileText}>Seats Filled</Text>
            <Text style={styles.profileSubtext2}>{carpoolers.length}/{carpool.seats} Seats</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.carpoolersText}>
          All Carpoolers
        </Text>
        <View style={styles.carpoolersContainer}>
          <View style={styles.row}>
          {
            _.map(carpoolers, carpooler => {
              return (
                <Carpooler
                  handleSelect={this.handleSelect}
                  carpooler={carpooler}
                  selected={carpooler == this.state.selected}
                />
              )
            })
          }
          </View>

          <TouchableOpacity style={styles.phone} onPress={() => this.openPhone()}>
            <View style={styles.messageIcon}>
              <Icon name="phone" size={24} color='#FFF' />
            </View>
          </TouchableOpacity>
          
          <Text style={styles.carpoolerText}>
            {
              this.state.selected &&
              this.state.selected.first_name + " " + this.state.selected.last_name
            }
            {
              _.isEqual(this.state.selected, carpool.captain) && " (Captain)"
            }
          </Text>
          <Text style={styles.carpoolerSubtext}>
            {
              this.state.selected && this.state.selected.address
            }
          </Text>
          
        </View>
      </View>
    )
  }
}

export default Carpool