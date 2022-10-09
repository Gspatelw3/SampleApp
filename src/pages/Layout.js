import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../context/theme";

const Layout = () => {
    const [viewHeight, setViewHeight] = useState(0);
    const style = useTheme();
    const styles = StyleSheet.create({
        wrapper: {
            backgroundColor: style.color.primary,
        },
    })
    return (
        <ScrollView style={styles.wrapper} nestedScrollEnabled
        contentContainerStyle={{flexGrow: 1, display: 'flex', justifyContent: 'space-between', padding: 20,}}>
            <View style={styles.inner}>
                <Text>Text {style.size.height}</Text>
            </View>
            <View>
                <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
                </Text>
            </View>
        </ScrollView>
    )
}
export default Layout;