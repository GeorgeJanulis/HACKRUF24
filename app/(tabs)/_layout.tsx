import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerStyle: {
            backgroundColor: '#25292e',
        },
        headerShadowVisible: false,        
        headerTintColor: '#fff',
        tabBarStyle: {
            backgroundColor: '#25292e',
        },

        }}>

      <Tabs.Screen 
        name="index" 
        options={{ 
            title: 'Home', 
            tabBarIcon: ({ color,focused}) => (
                <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
            ),
            }} 
        />
      <Tabs.Screen 
        name="about" 
        options={{ 
            title: 'About',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'person-outline' : 'person-outline'} color={color} size={24}/>
            ),
            }} 
        />
      <Tabs.Screen 
        name="info" 
        options={{ 
            title: 'Destination',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'map-sharp' : 'map'} color={color} size={24}/>
            ),
            }} 
        />
      <Tabs.Screen 
        name="info2" 
        options={{ 
            title: 'Origin',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'location-sharp' : 'location'} color={color} size={24}/>
            ),
            }} 
        />
    </Tabs>
  );
}
