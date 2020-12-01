/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Text} from 'galio-framework';
import {getLeaderboard} from '../services/api';

export const Row = (props) => {

  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{flex: 1}}>{props.index}</Text>
      <Text style={{flex: 1}}>{props.name}</Text>
      <Text style={{flex: 1, textAlign: 'right'}}>{props.points}</Text>
    </View>
  );
};

export default function Leaderboard() {
  const [points, setpoint] = React.useState([]);
  React.useEffect(() => {
    getLeaderboard("").then((x) => {
      setpoint(x);
    });
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center',padding:10}}>
      <View style={{flexDirection: 'row',marginBottom:20}}>
        <Text style={{flex: 1}}>SNO</Text>
        <Text style={{flex: 1}}>Name</Text>
        <Text style={{flex: 1, textAlign: 'right'}}>Points</Text>
      </View>
      {points.map((x,i) =>  <Row index={i+1} name={x.userName} points={x.totalPoints} />)}

    </View>
  );
}
