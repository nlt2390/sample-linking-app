import React from 'react';
import { Provider } from 'react-redux';

import store from '../../configureStore';
import { PostList } from './containers';

const HomeScreen = ({ navigation }) => {
  return (
    <Provider store={store}>
      <PostList navigation={navigation} />
    </Provider>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default HomeScreen;
