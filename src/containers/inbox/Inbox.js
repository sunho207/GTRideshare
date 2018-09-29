import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import ChatKit from "@pusher/chatkit";
import styles from './styles/Inbox'


const CHATKIT_TOKEN_PROVIDER_ENDPOINT = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d3ac1342-3bc8-4b05-b682-4cacbfea946e/token";
const CHATKIT_INSTANCE_LOCATOR = "v1:us1:d3ac1342-3bc8-4b05-b682-4cacbfea946e";
const CHATKIT_ROOM_ID = "17318184";
const CHATKIT_USER_NAME = "Anas Khan"; // Let's chat as "Dave" for this tutorial

class Inbox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

componentDidMount() {
    // This will create a `tokenProvider` object. This object will be later used to make a Chatkit Manager instance.
    const tokenProvider = new Chatkit.TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT
    });

    // This will instantiate a `chatManager` object. This object can be used to subscribe to any number of rooms and users and corresponding messages.
    // For the purpose of this example we will use single room-user pair.
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: CHATKIT_USER_NAME,
      tokenProvider: tokenProvider
    });

    // In order to subscribe to the messages this user is receiving in this room, we need to `connect()` the `chatManager` and have a hook on `onNewMessage`. There are several other hooks that you can use for various scenarios. A comprehensive list can be found [here](https://docs.pusher.com/chatkit/reference/javascript#connection-hooks).
    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser;
      this.currentUser.subscribeToRoom({
        roomId: CHATKIT_ROOM_ID,
        hooks: {
          onNewMessage: this.onReceive.bind(this)
        }
      });
    });
  }

  onReceive(data) {
    const { id, senderId, text, createdAt } = data;
    const incomingMessage = {
      _id: id,
      text: text,
      createdAt: new Date(createdAt),
      user: {
        _id: senderId,
        name: senderId,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXGGuS_PrRhQt73sGzdZvnkQrPXvtA-9cjcPxJLhLo8rW-sVA"
      }
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, incomingMessage)
    }));
  }

  onSend([message]) {
      this.currentUser.sendMessage({
        text: message.text,
        roomId: CHATKIT_ROOM_ID
      });
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: CHATKIT_USER_NAME,
        }}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox)