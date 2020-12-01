/* eslint-disable react-native/no-inline-styles */
import {Button, Input, Text} from 'galio-framework';
import React, {useState} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLOR} from '../../colors';
import {Register} from '../services/api';

export default function Signup({navigation}) {
  const [name, setName] = useState('');
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
      <Input
        placeholder="Name"
        placeholderTextColor={COLOR.APP_GREY}
        value={name}
        onChangeText={setName}
      />
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
      <Button onPress={() => Register({
        Email:email,
        Password:password,
        FullName:name
      })} color="info">Signup</Button>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text size={10}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}
