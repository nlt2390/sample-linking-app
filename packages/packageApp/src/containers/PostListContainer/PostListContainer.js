import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actions as postActions } from '../../state/post';

class PostListContainer extends React.Component {
  componentDidMount() {
    const { fetchPosts } = this.props;

    fetchPosts();
  }

  render() {
    const {
      posts,
      navigation
    } = this.props;

    return (
      <View>
        {posts.map((post) => {
          return (
            <TouchableOpacity
              key={post.id}
              onPress={() => navigation.push('PostDetails', {
                postID: post.id,
              })}
            >
              <Text>{post.id}  {post.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

PostListContainer.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  fetchPosts: PropTypes.func,
  posts: PropTypes.arrayOf(PropTypes.shape({})),
};

PostListContainer.defaultProps = {
  fetchPosts: () => null,
  posts: [],
};

const mapStateToProps = (state) => {
  return {
    posts: state.PACKAGE_APP.posts,
  };
};

export default connect(mapStateToProps, {
  fetchPosts: postActions.actionFetchPosts,
})(PostListContainer);
