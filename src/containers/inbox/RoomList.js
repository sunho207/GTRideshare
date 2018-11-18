import React from 'react';
import { Text, FlatList, View } from 'react-native';


function RoomList (props) {
  const orderedRooms = [...props.rooms].sort((a, b) => a.id - b.id);
  return (
    <View className="room-list">
      <ListView>
        <Text>Messages</Text>
        {orderedRooms.map(room => {
          const active = props.roomId === room.id ? 'active' : '';
            <li key={room.id} className={'room ' + active}>
              <a onClick={() => props.subscribeToRoom(room.id)} href="#">
                {room.name}
              </a>
            </li>
        })}
      </ListView>
    </View>
  );
}

export default RoomList;