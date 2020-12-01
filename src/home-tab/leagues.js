/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {getJoinedLeagues} from '../services/api';
import {Row} from './leaderboard';

export default function Leagues() {
  const [league,setleague] = React.useState([]);
  React.useEffect(() => {
    getJoinedLeagues().then(x => {
      setleague(x);
    })
  },[])
  return (
    <View style={{flex: 1, alignItems: 'center',padding:10}}>
      <View style={{flexDirection: 'row',marginBottom:20}}>
        <Text style={{flex: 1}}>SNO</Text>
        <Text style={{flex: 1}}>League</Text>
        <Text style={{flex: 1, textAlign: 'right'}}>Max Participants</Text>
      </View>
      {league.map((x,i) =>  <Row index={i+1} name={x.name} points={x.maxParticipants} />)}
    </View>
  );
}
