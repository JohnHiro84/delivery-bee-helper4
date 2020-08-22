import React from 'react';

class CommentCompose extends React.Component {
  constructor(props) {
      super(props);

      this.state = {

        handle: "",
        text: "",
        order_id: "",
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

      this.setState({
        handle: this.props.currentUser.handle,
        order_id: this.props.order_id
      });

    }


  handleSubmit(e) {
    e.preventDefault();

    let new_comment = {
      handle: this.state.handle,
      text: this.state.text,
      order_id: this.props.order_id

    };

    this.props.composeComment(new_comment)
    .then(this.setState({ text: '' }));
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {

    return (
        <div >
            <form onSubmit={this.handleSubmit}>
                <div className="comment-compose">
                    <textarea
                      className="comment-input"
                      type="textarea"
                      value={this.state.text}
                      onChange={this.update('text')}
                      placeholder="submit a new comment"
                    />

                    <button className="comment-button" type="submit">Add Message</button>
                </div>
            </form>
        </div>
    )
  }
}

export default CommentCompose;
