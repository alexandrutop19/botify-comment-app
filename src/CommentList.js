import React from 'react';
import Comment from './Comment';
import './CommentList.css';

class CommentList extends React.Component {
  render() {
    return (
      <div>
        {this.props.comments.map(comment => (
          <Comment comment={comment} key={comment.creationDate} />
        ))}
      </div>
    );
  }
}

export default CommentList;