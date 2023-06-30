import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/Dashboard';
import CreateInvoice from './src/CreateInvoice';
import { StatusBar } from 'expo-status-bar';

import { Image, Pressable } from 'react-native';

const Stack = createNativeStackNavigator();

//Custom Back Btn for header of Screen Create invoice
const CustomHeaderBackBtn = (props) => {
  const navigation = useNavigation();
  if (props.canGoBack) {
    return (
      <Pressable onPress={() => navigation.goBack()} >
        <Image source={require('./src/Assets/backBtn.png')} />
      </Pressable>
    )
  }
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="CreateInvoice" component={CreateInvoice} options={{
          headerTitle: "Invoice",
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerStyle: { backgroundColor: '#1C85E8' },
          headerTitleStyle: { fontSize: 16, fontWeight: '800' },
          headerLeft: CustomHeaderBackBtn,
          headerRight: (props) => (
            <Pressable >
              <Image source={require('./src/Assets/user.png')} />
            </Pressable>
          )
        }} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  )
}
