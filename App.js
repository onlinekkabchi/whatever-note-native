/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
