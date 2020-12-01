/* eslint-disable dot-notation */
/* eslint-disable react-hooks/exhaustive-deps */
import {CommonActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {SInfoGet} from './services/sensitiveStorage';
import Loading from './SplashScreen';
import axios from 'axios';

const StartupScreen = ({navigation}) => {
  useEffect(() => {
    SInfoGet('auth_token')
      .then((resp) => {
        console.log('token', resp);
        if (resp != null) {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + resp;
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'HomeTabNav'}],
            }),
          );
        } else {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Login'}],
            }),
          );
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Loading />
    </View>
  );
};
export default StartupScreen;
