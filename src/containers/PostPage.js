import React, {Component, PropTypes} from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import PostList from '../components/posts/PostList';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class PostPage extends Component {
    componentWillMount() {
      this.props.fetchPosts();
    }

    render() {
      const {posts} = this.props;

      return (
          <Card className="container">
              <CardTitle title="Posts Page" />
              <PostList posts={posts} />
          </Card>
      );
    }
}

PostPage.propTypes = {
  posts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.allposts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
