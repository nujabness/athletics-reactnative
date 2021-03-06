import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Splash: 'splash',
        Login: 'login',
        Home: 'home',
        Links: 'links',
      },
    },
  },
};
