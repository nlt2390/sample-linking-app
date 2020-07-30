import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { postActions } from '../../state/post';

const PostListContainer = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Post List screen</Text>
    </View>
  );
};

PostListContainer.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchData: PropTypes.func,
};

PostListContainer.defaultProps = {
  fetchData: () => null,
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(postActions.actionFetchPosts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
