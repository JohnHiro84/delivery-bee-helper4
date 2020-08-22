import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../assets/stylesheets/comments.css';
import moment from 'moment';

class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: ""
    }
  }

  componentDidMount() {

    this.props.fetchOrderComments(this.props.match.params.orderId)
    .then(res => this.setState({ 'comments': res.comments.data }));

  }

  componentWillReceiveProps(newState) {
    this.setState({ comments: newState.comments });
  }

  render() {

    const {handle} = this.props;

    if (this.state.comments.length === 0) {
      return (<div className="comments-container"><h3>There are no messages yet</h3></div>)
    } else {
      return (
        <div className="comments-container">

          <h2>Chat:</h2>

          <ul>
          {this.state.comments.map(comment => (
            <li key={comment._id} className={(handle === comment.handle) ? "your-chat-comment":"thier-chat-comment"}>

              <div className="comment-text-box">
                <span className="comment-text"> {comment.text}</span>
              </div>
              <span className="comment-date">{ moment(comment.date_created).format('h:mma MMMM Do') }</span>
              <span className="comment-handle">{comment.handle}</span>

            </li>
          ))}
          </ul>

        </div>
      );
    }
  }
}

export default withRouter(CommentList);
