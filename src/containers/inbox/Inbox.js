import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import Chatkit from "@pusher/chatkit";
import styles from './styles/Inbox';
import { GiftedChat } from "react-native-gifted-chat";




const CHATKIT_TOKEN_PROVIDER_ENDPOINT = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d3ac1342-3bc8-4b05-b682-4cacbfea946e/token";
const CHATKIT_INSTANCE_LOCATOR = "v1:us1:d3ac1342-3bc8-4b05-b682-4cacbfea946e";
const CHATKIT_ROOM_ID = 17318184;
const CHATKIT_USER_NAME = "akhan95@gatech.edu";

class Inbox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

componentDidMount() {
    const tokenProvider = new Chatkit.TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT
    });


    const chatManager = new Chatkit.ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: CHATKIT_USER_NAME,
      tokenProvider: tokenProvider
    });

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