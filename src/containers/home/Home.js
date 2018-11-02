import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MapRoutes from '../../components/home/MapRoutes'
import HomeSlider from '../../components/home/HomeSlider'
import styles from './styles/Home'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: {
        route: {
          destination: {
            address: "2173 Lawrenceville-Suwanee Rd, Suwanee, GA 30024, USA",
            lat: 34.0054825,
            lng: -84.0409682,
          },
          directions: "alknEfqg`OZkBZHrBd@\\HDWf@iDX}B`@wDJkBNwBLiCR}GDoF?}Ag@DaLlA_Ef@wAFy@@yBK{ASm@O}Bs@qEcBgOoFcBk@]AMBo@YuAk@{Aq@aDoA{CsAoDgBuD_CwJiH}L_JmCkBAQAIEGmCcCkE}Dc@g@qAyBk@_BaCaJc@oAWc@a@e@c@]{@a@{A]n@wE`AaHNiB?{@KaBSgAGWg@yAu@mAmFyFqCyCkA{AuA{BgAgB~@{@`D}Cn@o@bAcA`AsAp@mARk@Pw@RuAVcDvAkVXeERaCFoCK{Aq@kE{@oISkBGwBi@kM_@yJyAiUI}AM[}@Zu@Pm@H_ERi@@wANaATi@PcAd@",
          origin: {
            address: "2148 Duluth Hwy, Duluth, GA 30097, USA",
            lat: 33.9784149,
            lng: -84.0937998,
          },
        }
      }
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <MapRoutes carpool={this.state.selected} />
        <HomeSlider />
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