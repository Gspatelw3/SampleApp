import React from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useTheme } from '../context/theme';

const About = () => {
    const style = useTheme();
    const styles = StyleSheet.create({
        wrapper: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: style.color.primary
        },
        text: {
            fontSize: 18,
        },
        scroll:{
            padding: style.space.x
        }
    })
    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.text}>
                    About
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default About;