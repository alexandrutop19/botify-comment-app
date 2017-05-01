import React from 'react';
import Moment from 'moment';
import './Comment.css';

class Comment extends React.Component {
  render() {
    const creationDate = Moment(this.props.comment.creationDate).toString();
    return (
      <div className='Comment-card'>
        <span className='Comment-username'>{this.props.comment.username}</span><span className='Comment-creationDate pull-right'>{creationDate}</span>
        <p>{this.props.comment.content}</p>
      </div>
    );
  }
}

export default Comment;