/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Text} from 'galio-framework';

const LeaderRow = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{flex: 1}}>{props.index}</Text>
      <Text style={{flex: 1}}>{props.name}</Text>
      <Text style={{flex: 1, textAlign: 'right'}}>{props.points}</Text>
    </View>
  );
};

export default function Leaderboard() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <LeaderRow index="1" name="Qasim" points="23" />
    </View>
  );
}
