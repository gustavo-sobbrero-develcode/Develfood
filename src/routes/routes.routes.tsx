import React, {useEffect} from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from '../screens/Inicio/Inicio';
import Historico from '../screens/Historico/Historico';
import Favoritos from '../screens/Favoritos/Favoritos';
import Perfil from '../screens/Perfil/Perfil';

import RNBootSplash from 'react-native-bootsplash';


export default function Routes() {

  const Tab = createBottomTabNavigator();
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
      options={{ headerShown: false}}
      name="Início"
      component={Inicio}
      />
      <Tab.Screen
      options={{ headerShown: false}}
      name="Favoritos"
      component={Favoritos}
      />
      <Tab.Screen
      options={{ headerShown: false}}
      name="Histórico"
      component={Historico}
      />
      <Tab.Screen
      options={{ headerShown: false}}
      name="Perfil"
      component={Perfil}
      />
    </Tab.Navigator>
  )
};
