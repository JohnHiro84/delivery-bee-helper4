// src/components/tweets/tweet_compose.js

import React from 'react';
// import EventBox from './event_box';
// import '../../assets/stylesheets/event-compose.css';

class CommentCompose2 extends React.Component {
  constructor(props) {
      super(props);

      this.state = {

        handle: "",
        text: "",
        event_id: "",
        old_comments: {},
        fresh_new_comment: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("componentWillReceiveProps");
  //   console.log(nextProps.newComment);
  //     this.setState({newComment: nextProps.newComment});
  // }

    componentDidMount() {
      let eve = this.props.event_id;
      this.setState({
        handle: this.props.currentUser.handle,
        event_id: this.props.event_id});
      // console.log(this.state);

      this.setState({ event_id: eve});
      //
      // this.props.fetchEvent(this.props.match.params.eventId)
      //
      // .then(res => this.setState({ 'event': res.event.data }));
      // // .then(res => console.log(res.event.data));
      // this.props.fetchEventComments(this.props.match.params.eventId);

    }


  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props.currentUser);
    // console.log(this.props.params.match.eventId);
    // let new_handle = this.props.currentUser.handle;
    // let text = this.state.text;
    // let event_id = this.props.event_id;
    //
    let new_comment = {
      handle: this.state.handle,
      text: this.state.text,
      event_id: this.props.event_id

    };
    // console.log(new_comment);
    // console.log(this.state);
    this.props.composeComment(new_comment)
    .then(this.setState({ text: '' })
    );
  }
  update(property) {
  return e => this.setState({ [property]: e.target.value });
}

  render() {
    // console.log(this.props.event_id);

    // console.log(this.props.composeComment());
  // console.log(this.state);
    // console.log(this.props)
    // console.log(this.props.params.match.eventId);
    return (
        <div >


            <form onSubmit={this.handleSubmit}>
                <div className="event-compose">
                    <input type="textarea"
                        value={this.state.text}
                        onChange={this.update('text')}
                        placeholder="submit a new comment"
                    />

                    <input className="attending-button" type="submit" value="Submit Comment" />
                </div>
            </form>


        </div>
    )
  }
}

export default CommentCompose2;
