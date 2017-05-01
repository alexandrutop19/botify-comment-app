import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './CommentList';
import Belle from 'belle';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    var commentsStorage = JSON.parse(localStorage.getItem('comments')) || [];
    this.state = { comments: [] };
    this.state.comments = commentsStorage;
  }

  render() {
    return (
      <div className='col-lg-4 col-md-6 col-sm-8'>
        <h3>Comments ({this.state.comments.length})</h3>
        <CommentList comments={this.state.comments} />
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className='form-control' ref='username' placeholder='Username*' />
          </div>
          <div className="form-group">
            <input className='form-control' ref='email' placeholder='Email' />
          </div>
          <div className="form-group">
            <textarea className='form-control' ref='content' placeholder='Comment*' />
          </div>
          <button className='btn btn-sm btn-primary pull-right'>Send Comment</button>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    var commentUsername = ReactDOM.findDOMNode(this.refs.username).value.trim();
    var commentEmail = ReactDOM.findDOMNode(this.refs.email).value.trim();
    var commentContent = ReactDOM.findDOMNode(this.refs.content).value.trim();

    // min form validation
    if (commentUsername === '' || commentContent === '') return;

    var newComment = {
      username: commentUsername,
      email: commentEmail,
      content: commentContent,
      creationDate: Date.now()
    }

    this.setState((prevState) => ({
      comments: prevState.comments.concat(newComment)
    }));

    localStorage.setItem('comments', JSON.stringify(this.state.comments.concat(newComment)));

    // clear out form
    ReactDOM.findDOMNode(this.refs.username).value = '';
    ReactDOM.findDOMNode(this.refs.email).value = '';
    ReactDOM.findDOMNode(this.refs.content).value = '';
  }
}

var TextInput = Belle.TextInput;

export default App;