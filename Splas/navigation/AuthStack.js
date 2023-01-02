import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import {GoogleSignin} from '@react-native-community/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {
  let routeName;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '433891150241-fbs8j3fs2saqc10ahbj6c3non87nmul4.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
