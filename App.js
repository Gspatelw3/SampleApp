/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Routing from './src/pages/Routing';
import ThemeProvider from './src/context/theme';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
  // const isDarkMode = useColorScheme() === 'dark';
  // return (
  //   <View style={styles.sectionContainer}>
  //     <Text
  //       style={[
  //         styles.sectionTitle,
  //         {
  //           color: isDarkMode ? Colors.white : Colors.black,
  //         },
  //       ]}>
  //       {title}
  //     </Text>
  //     <Text
  //       style={[
  //         styles.sectionDescription,
  //         {
  //           color: isDarkMode ? Colors.light : Colors.dark,
  //         },
  //       ]}>
  //       {children}
  //     </Text>
  //   </View>
  // );


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (    
    <ThemeProvider>
      <Routing/>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
