import React from 'react';
import { Text, View, Button, List, FlatList, ListItem } from 'react-native';
import { connect } from 'react-redux';
import Chatkit from "@pusher/chatkit";
import styles from './styles/Inbox';
import { tokenUrl, instanceLocator } from './config';
import RoomList from './RoomList';
import { GiftedChat } from 'react-native-gifted-chat'

var ds;

class Inbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: [],
      //dataSource: ds,
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getRooms = this.getRooms.bind(this);
    this.createRoom = this.createRoom.bind(this);

    //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    
  }

  componentDidMount() {
      
      

      const tokenProvider = new Chatkit.TokenProvider({
        url: tokenUrl,
      });

      const chatManager = new Chatkit.ChatManager({
        instanceLocator: instanceLocator,
        userId: 'akhan95@gatech.edu',
        tokenProvider: tokenProvider,
      });

      chatManager
        .connect()
        .then(currentUser => {
          this.currentUser = currentUser;
          this.getRooms();
        })
        .catch(err => console.log('got an error connecting: ', err));

        ds = null;


    }

  getRooms() {
    this.currentUser
      .getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms,
        });
      })
      .catch(err => console.log('got an error with the rooms: ', err));
  }

  subscribeToRoom(roomId) {
    this.setState({ messages: [] });
    this.currentUser
      .subscribeToRoom({
        roomId: roomId,
        hooks: {
          onNewMessage: message => {
            this.setState({
              messages: [...this.state.messages, message],
            });
          },
        },
      })
      .then(room => {
        this.setState({
          roomId: room.id,
        });
        this.getRooms();
      })
      .catch(err => console.log('got an error subscribing to the room: ', err));
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId,
    });
  }

  createRoom(roomName) {
    this.currentUser
      .createRoom({
        name: roomName,
      })
      .then(room => this.subscribeToRoom(room.id))
      .catch(err => console.log('got an error creating the room: ', err));
  }

  renderRow(data) {
    return (
      <Text>{`\u2022 ${data}`}</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
            dataSource={this.state.joinedRooms}
            renderRow={this.renderRow}
            />
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




export default connect(mapStateToProps, mapDispatchToProps)(Inbox)