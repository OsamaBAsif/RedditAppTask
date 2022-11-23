import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigations/StackNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
