/* eslint-disable react-native/no-inline-styles */
import {CommonActions} from '@react-navigation/native';
import {Button, Input, Text} from 'galio-framework';
import React, {useState} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLOR} from '../../colors';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text size={25}>Login</Text>
      <Input
        type="email-address"
        placeholder="Email"
        placeholderTextColor={COLOR.APP_GREY}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        password
        viewPass
        placeholder="Password"
        placeholderTextColor={COLOR.APP_GREY}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        color="info"
        onPress={() =>
          //hit login api
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'HomeTabNav'}],
            }),
          )
        }>
        Login
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text size={10}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}
