import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: "Friend #1", age: 14},
    {name: "Friend #2", age: 27},
    {name: "Friend #4", age: 54},
    {name: "Friend #5", age: 23},
    {name: "Friend #6", age: 11},
    {name: "Friend #7", age: 19},
    {name: "Friend #8", age: 30}
  ];
  return (
          <FlatList
              keyExtractor={friend => friend.name}
              data={friends}
              renderItem={({item}) => {
                return <Text>{item.name} - Age {item.age} </Text>
              }}/>
          );
};

const styles = StyleSheet.create({});

export default ListScreen;
