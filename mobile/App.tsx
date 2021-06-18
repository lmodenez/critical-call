import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import OpenTicket from './src/screens/openTicketScreen/openTicketScreen';

export default function App() {
  return (
    <NavigationContainer>
      <OpenTicket />
    </NavigationContainer>
  );
}
