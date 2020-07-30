import React from 'react';
import { HomeScreenPackage } from 'package-app';
import { ReactReduxContext } from 'react-redux';

const HomeScreen = (props) => {
  const { navigation } = props;

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        return <HomeScreenPackage navigation={navigation} store={store} />;
      }}
    </ReactReduxContext.Consumer>
  );
};

export default HomeScreen;
