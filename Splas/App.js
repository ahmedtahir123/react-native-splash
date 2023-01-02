import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Providers from './navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Providers />;
};

export default App;
