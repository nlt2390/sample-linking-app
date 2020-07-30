import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { PostListContainer } from '../../containers';
import postReducer from '../../state/post';

class HomeScreen extends React.Component {
  constructor(props) {
    super();
    const { store } = props;
    if (store) {
      store.injectReducer('PACKAGE_APP', postReducer);
    }
  }

  render() {
    const { navigation } = this.props;

    return <PostListContainer navigation={navigation} />;
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default HomeScreen;
