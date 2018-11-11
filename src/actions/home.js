export function receiveUpcomingCarpool(carpool) {
  return {
    type: 'RECEIVE_UPCOMING_CARPOOL',
    carpool
  }
}

export function getUpcomingCarpool() {
  return async dispatch => {
    const dummy = {
      start: '2018-07-01',
      end: '2018-11-01',
      days: 'MWF',
      seats: 5,
      scheduled_arrival: '9:00 AM',
      scheduled_departure: '2:00 PM',
      captain: {
        first_name: "Jeremy",
        last_name: "Jang",
        photoUrl: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/17492504_1482079301802482_8055650996347254419_o.jpg?_nc_cat=105&_nc_ht=scontent-atl3-1.xx&oh=b700230aa353704df296fc3b8ad5dddc&oe=5C6BB358",
        address: "848 Spring Street NW, Atlanta, GA 30308"
      },
      driver: {
        first_name: "Jeremy",
        last_name: "Jang",
        photoUrl: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/17492504_1482079301802482_8055650996347254419_o.jpg?_nc_cat=105&_nc_ht=scontent-atl3-1.xx&oh=b700230aa353704df296fc3b8ad5dddc&oe=5C6BB358",
        address: "848 Spring Street NW, Atlanta, GA 30308"
      },
      route: {
        destination: {
          address: "2173 Lawrenceville Rd, Suwanee, GA 30024, USA",
          lat: 34.0054825,
          lng: -84.0409682,
        },
        directions: "alknEfqg`OZkBZHrBd@\\HDWf@iDX}B`@wDJkBNwBLiCR}GDoF?}Ag@DaLlA_Ef@wAFy@@yBK{ASm@O}Bs@qEcBgOoFcBk@]AMBo@YuAk@{Aq@aDoA{CsAoDgBuD_CwJiH}L_JmCkBAQAIEGmCcCkE}Dc@g@qAyBk@_BaCaJc@oAWc@a@e@c@]{@a@{A]n@wE`AaHNiB?{@KaBSgAGWg@yAu@mAmFyFqCyCkA{AuA{BgAgB~@{@`D}Cn@o@bAcA`AsAp@mARk@Pw@RuAVcDvAkVXeERaCFoCK{Aq@kE{@oISkBGwBi@kM_@yJyAiUI}AM[}@Zu@Pm@H_ERi@@wANaATi@PcAd@",
        origin: {
          address: "2148 Duluth Hwy, Duluth, GA 30097, USA",
          lat: 33.9784149,
          lng: -84.0937998,
        },
      },
      carpoolers: [
        {
          first_name: "Jeremy",
          last_name: "Jang",
          photoUrl: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/17492504_1482079301802482_8055650996347254419_o.jpg?_nc_cat=105&_nc_ht=scontent-atl3-1.xx&oh=b700230aa353704df296fc3b8ad5dddc&oe=5C6BB358",
          address: "848 Spring Street NW, Atlanta, GA 30308"
        },
        {
          first_name: "Themiya",
          last_name: "Chandraratna",
          photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8hyb2Itjea1832NWtf5TZ5Ls0wUvqhFcgFsgCwZqzOPBtW_8",
          address: "422 Northside Drive, Atlanta, GA 30308"
        },
        {
          first_name: "Anas",
          last_name: "Khan",
          photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxw0AI_awnzh6bhqnPElVxA_K49tt4OdqN-_LEbCSAQ_z_7KGcyA",
          address: "912 Peachtree Street, Atlanta, GA 30308"
        },
        {
          first_name: "Joey",
          last_name: "Kilpatrick",
          photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHH4Mjq71IVE3A2yHbgol7nToV6MHP_ljeYeqi44-rYVqRBUZ1",
          address: "2148 Duluth Hwy, Duluth, GA 30097, USA"
        }
      ]
    }
    dispatch(receiveUpcomingCarpool(dummy))
    // fetch(``, {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json'
    //   }
    // })
    // .then(res => res.json())
    // .then(json => {
    //   dispatch(receiveUpcomingCarpool(json))
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }
}
