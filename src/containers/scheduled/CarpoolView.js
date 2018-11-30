import React from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import openMap from 'react-native-open-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash'
import call from 'react-native-phone-call'
import { connect } from 'react-redux';
import moment from 'moment'
import styles from './styles/CarpoolView'
import CarpoolMap from '../../components/scheduled/CarpoolMap'
import Carpooler from '../../components/home/Carpooler'

class CarpoolView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      up: true
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
    if (this.state.selected.phone) {
      call({
        number: this.state.selected.phone,
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

  convertDates = (number) => {
    let days = ""
    numberDays = number.toString()
    if (numberDays.includes("0")) {
      days += "Sun, "
    }
    if (numberDays.includes("1")) {
      days += "Mon, "
    } 
    if (numberDays.includes("2")) {
      days += "Tue, "
    }
    if (numberDays.includes("3")) {
      days += "Wed, "
    }
    if (numberDays.includes("4")) {
      days += "Thu, "
    }
    if (numberDays.includes("5")) {
      days += "Fri, "
    }
    if (numberDays.includes("6")) {
      days += "Sat, "
    }
    return days.substring(0, days.length - 2)
  }

  render() {
    const carpool = this.props.carpool
    const carpoolers = this.props.carpool && this.props.carpool.carpoolers
    const route = this.props.carpool && this.props.carpool.route
    const arrival = moment(carpool.scheduled_arrival, "HH:mm:ss").format("hh:mm a")
    const departure = moment(carpool.scheduled_departure, "HH:mm:ss").format("hh:mm a")
    const days = this.convertDates(carpool.scheduled_days)
    return (
      <ScrollView style={styles.container}>
        <CarpoolMap carpool={carpool} />
        <View style={styles.carpool}>
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

          <View style={styles.divider} />
          <Text style={styles.carpoolersText}>
            Carpool Details
          </Text>
          <View style={styles.row}>
            <View style={styles.carpoolMoreInfo}>
              <Text style={styles.profileText}>Arrival at Tech</Text>
              <Text style={styles.profileSubtext2}>{arrival}</Text>
            </View>
            <View style={styles.carpoolMoreInfo}>
              <Text style={styles.profileText}>Departure from Tech</Text>
              <Text style={styles.profileSubtext2}>{departure}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.carpoolMoreInfo}>
              <Text style={styles.profileText}>Carpool Schedule</Text>
              <Text style={styles.profileSubtext2}>{carpool && days}</Text>
            </View>
            <View style={styles.carpoolMoreInfo}>
              <Text style={styles.profileText}>Seats Filled</Text>
              <Text style={styles.profileSubtext2}>{carpoolers.length}/{carpool.seats} Seats</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.carpoolMoreInfo}>
              <Text style={styles.profileText}>Start Address</Text>
              <Text style={styles.profileSubtext}>{this.cleanedRoute(route.origin.address)}</Text>
            </View>
            <View style={styles.carpoolMoreInfo}>
              <Text style={styles.profileText}>End Address</Text>
              <Text style={styles.profileSubtext}>{this.cleanedRoute(route.destination.address)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carpool: state.scheduled.carpool
  }
}

const mapDispatchToProps = (dispatch) => {
}

export default connect(mapStateToProps, mapDispatchToProps)(CarpoolView)