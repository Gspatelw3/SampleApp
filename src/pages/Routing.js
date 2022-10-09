import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile';
import About from './About';
import Home from './Home';
import Layout from './Layout';
import { useTheme } from '../context/theme';

const Stack = createNativeStackNavigator();

const Routing = () => {
    const style = useTheme();
    const backgroundStyle = {
        backgroundColor: style.themeType.dark ? style.color.dark : style.color.primary,
    };

    return (
        <NavigationContainer>
            <StatusBar
                barStyle={style.themeType.dark ? 'light-content' : 'light-content'}
                // barStyle={style.themeType.dark ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Stack.Navigator initialRouteName="Layout">
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home" component={Home} />
                <Stack.Screen name="About" component={About} />
                <Stack.Screen name="Layout" options={{ headerShown: false }} component={Layout} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routing;