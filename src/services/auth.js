/* eslint-disable eqeqeq */
import {Login} from './api';
import {SInfoGet, SInfoSet} from './sensitiveStorage';

export const loginUser = (user, pass) => {
  const data = {
    email: user,
    username: user,
    password: pass,
  };

  return Login(data)
    .then(function (response) {
      if (response.status == 200) {
        (async () => await SInfoSet('auth_token', response.data.token))();
        (async () => await SInfoGet('auth_token'))();
        return true;
      }
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};
