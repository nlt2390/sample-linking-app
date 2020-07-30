import React from 'react';
import { Text } from 'react-native';
import { HomeScreenPackage } from 'package-app';

const HomeScreen = ({ navigation }) => {
  return <HomeScreenPackage navigation={navigation} />;
};

export default HomeScreen;
