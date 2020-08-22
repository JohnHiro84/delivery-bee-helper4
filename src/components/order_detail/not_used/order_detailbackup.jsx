// import React, { Component } from 'react';
//
//
// import { withRouter } from 'react-router-dom';
// import '../../assets/stylesheets/new-styles.css';
//
// import OrderDetailMap from "./order_detail_map";
// import OrderInformation from "../order_detail/order_information";
//
// import moment from 'moment';
// import TimeElapsed from "../order_index/time_elapsed";
//
// import ModalMessage from "./modal_message";
//
//
// import LocationInformation from "../order_detail/location_information";
//
//
// import CommentListContainer from '../comment/comment_list_container';
// import CommentComposeContainer2 from '../comment/comment_compose_container2';
//
//
//
//
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
//
// class OrderDetail extends Component {
//
//   constructor(props){
//
//     super(props);
//     this.state = {
//                 order: {
//                   _id: "",
//                 },
//                 comments: {}
//               };
//               this.acceptNotification = this.acceptNotification.bind(this);
//               this.acceptOrder = this.acceptOrder.bind(this);
//               this.completeOrder = this.completeOrder.bind(this);
//
//   }
//
//   componentDidMount() {
//
//     this.props.fetchSingleOrder(this.props.match.params.orderId)
//     .then(res =>  this.setState({'order': res.order.data}));
//
//     // this.props.fetchEventComments(this.props.match.params.eventId);
//   }
//
//   componentDidUpdate(prevProps) {
//     if (prevProps.match.params.orderId !== this.props.match.params.orderId) {
//       this.props.fetchSingleOrder(this.props.match.params.orderId)
//       .then(res => this.setState({ 'order': res.order.data }));
//     }
//   }
//
//
//   acceptNotification(e){
//     e.preventDefault();
//     console.log(this.props.currentUser.id);
//     var modal = document.getElementById("myModal");
//     modal.style.display = "block";
//   }
//
//
//
//   acceptOrder(e){
//     e.preventDefault();
//
//     ////close modal window
//     var modal = document.getElementById("myModal");
//     modal.style.display = "none";
//
//     //update the order in the database
//     this.props.updateOrder(this.props.match.params.orderId, this.props.currentUser.id, this.props.currentUser.handle)
//     .then(res => this.props.fetchHelperOrdersAccepted(this.props.currentUser.id))
//     .then(res =>  this.props.updateStateNewToast({toast: "helper_accepted"}));
//
//     //push to accepted orders
//     setTimeout(() => {
//       this.props.history.push('/accepted');
//     }, 3500);
//
//   }
//
//   completeOrder(e){
//     e.preventDefault();
//     this.props.updateOrderCompleted(this.props.match.params.orderId)
//     .then(res => this.props.updateStateNewToast({toast: "helper_completed"}));
//
//     setTimeout(() => {
//       this.props.history.push('/completed')
//     }, 3500);
//   }
//
//   render() {
//     // console.log(this.state);
//
//     const {
//       _id,
//       helper,
//       distance,
//       cost,
//       instructions,
//       pick_up_address,
//       drop_off_address,
//       createdAt,
//       time_accepted,
//       time_completed,
//       order_completed,
//       user_handle
//     } = this.state.order;
//
//
//
//     //// new setup
//
//     let locationInformation = (
//       <LocationInformation
//         distance={distance}
//         pick_up_address={pick_up_address}
//         drop_off_address={drop_off_address}
//       />
//     )
//
//
//     let orderDetailMap = (_id !== "") ? (<OrderDetailMap order={this.state.order} />) : (<></>);
//
//     let acceptButton = (helper) ? (<></>): (<button onClick={this.acceptNotification}>Accept This Order</button>);
//
//     let completeButton;
//
//      // = (helper && order_completed) ? (<h3 className="green-text">Completed</h3>): (<button onClick={this.completeOrder}>Order Completed</button>);
//
//     if(helper && !order_completed){
//       completeButton = (<button onClick={this.completeOrder}>Order Completed</button>);
//     } else if (!helper){
//       completeButton = "";
//     } else if (helper && order_completed){
//       completeButton = (<h3 className="green-text">Completed</h3>);
//     }
//
//     if(_id){
//
//           return (
//             <section className="order-details">
//
//
//               {orderDetailMap}
//
//               <ModalMessage acceptOrder={this.acceptOrder.bind(this)}/>
//
//               <OrderInformation
//                 distance={distance}
//                 cost={cost}
//                 instructions={instructions}
//                 pick_up_address={pick_up_address}
//                 drop_off_address={drop_off_address}
//               />
//
//               <h3>Amount you get paid for doing this order:</h3>
//               <p>${(cost * .75)}</p>
//
//               <h3>Placed by:</h3>
//               <p>{ user_handle }</p>
//
//               <h3>Date Created:</h3>
//               <p>{ moment(createdAt).format('MMMM Do YYYY, h:mma') }</p>
//
//               {(time_accepted)? (<h3>Date Accepted:</h3>): (<></>)}
//               {(time_accepted)? (<p>{ moment(time_accepted).format('MMMM Do YYYY, h:mma') }</p>): (<></>)}
//
//
//               <TimeElapsed time_accepted={time_accepted} time_completed={time_completed}/>
//
//               {acceptButton}
//               {completeButton}
//
//               <CommentListContainer />
//               <CommentComposeContainer2 />
//
//             </section>
//           );
//
//     } else {
//       return (<></>);
//     }
//
//   }
// }
//
// export default withRouter(OrderDetail);
// // <CommentListContainer />
// // <CommentComposeContainer2 />
