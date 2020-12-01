/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {CommonActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {SDeleteInfo} from '../services/sensitiveStorage';

export default function Logout({navigation}) {
  useEffect(() => {
    SDeleteInfo('auth_token')
      .then(() =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Login'}],
          }),
        ),
      )
      .catch(() => {});
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Logging Out</Text>
    </View>
  );
}
