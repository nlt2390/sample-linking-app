import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actions as postActions } from '../../state/post';

const PostDetailsContainer = (props) => {
  const {
    post,
  } = props;

  return (
    <View>
      <View>
        <Text>{post.id}</Text>
      </View>
      <View>
        <Text>
          {post.title}
        </Text>
      </View>
      <View>
        <Text>
          {post.body}
        </Text>
      </View>
    </View>
  );
}


PostDetailsContainer.propTypes = {
  post: PropTypes.shape({}),
};

PostDetailsContainer.defaultProps = {
  post: {},
};

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    post: state.PACKAGE_APP.posts.filter((post) => post.id === props.route.params.postID)[0],
  };
};

export default connect(mapStateToProps, {

})(PostDetailsContainer);
