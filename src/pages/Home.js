import React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/theme';

const Home = () => {
    const style = useTheme();
    const styles = StyleSheet.create({
        wrapper: {
            height: '100%',
            justifyContent: 'center',
            backgroundColor: style.themeType.dark ? style.color.dark : style.color.primary,
        },
        text: {
            fontSize: 18,
        },
        scroll: {
            padding: style.space.x
        },
        statusBarBg: {
            backgroundColor: 'red'    
        }
    })

    const backgroundStyle = {
        backgroundColor: style.themeType.dark ? style.color.dark : style.color.primary,
    };
    
    return (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar
                barStyle={style.themeType.dark ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />

            <ScrollView style={styles.scroll}>
                <Text style={styles.text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    wewew
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;