import SInfo from 'react-native-sensitive-info';

export const SInfoSet = async (key, val) => {
  const savingFirstData = await SInfo.setItem(key, val, {
    sharedPreferencesName: 'FantsayLeague',
    keychainService: 'FantsayLeagueKeychanin',
  });
  return savingFirstData;
};

export const SInfoGet = async (key) => {
  const gettingFirstData = await SInfo.getItem(key, {
    sharedPreferencesName: 'FantsayLeague',
    keychainService: 'FantsayLeagueKeychanin',
  });
  return gettingFirstData;
};

export const SDeleteInfo = async (key) => {
  return SInfo.deleteItem(key, {
    sharedPreferencesName: 'FantsayLeague',
    keychainService: 'FantsayLeagueKeychanin',
  });
};
