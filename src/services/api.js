import axios from 'axios';

const BASE_URL = 'http://182.189.94.159:27019/api';

export function addLeague(payload) {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + '/add', payload)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function getLeague() {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + '/getleagues')
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function postJoinLeague(id) {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + '/join/' + id, {})
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function getMyLeagues() {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + '/getmyleagues')
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function getJoinedLeagues() {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + '/getjoinedleagues')
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function addPoints(data) {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + '/Points/addBatch', data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function getLeaderboard(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + 'getPoints/' + id)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function Register(payload) {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + '/Register/add', payload)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function Login(payload) {
  return new Promise((resolve, reject) => {
    axios
      .post(BASE_URL + '/Register/login', payload)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}

export function GetAllPlayers() {
  return new Promise((resolve, reject) => {
    axios
      .get(BASE_URL + '/Player/getall')
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
