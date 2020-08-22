import React from 'react';
import { withRouter } from 'react-router-dom';
import OrderIndexItem from './order_index_item';

import '../../assets/stylesheets/order-index.css';


class OrderIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      indexOrders: ""
    }
  }
  componentDidMount() {

    const {id} = this.props.currentUser;
    const {indexType} = this.props;

    if(indexType === "Available"){
      this.props.fetchOrders()
      .then(res => this.setState({indexOrders: res.orders.data }))
    } else if(indexType === "Accepted"  || indexType === "Completed"){
      this.props.fetchOrders(id)
      .then(res => this.setState({indexOrders: res.orders.data }))
    }

  }

  render() {

    const {indexOrders} = this.state;
    const {indexType} = this.props;

    let orders;
    if(indexOrders){
      orders = indexOrders.reverse().map(order => (
        <OrderIndexItem key={order._id} order={order} />
      ))
    }

    return (
      <div className="order-index-container">
        <h1>{indexType}</h1>
        {orders}
      </div>
    );
  }

}

export default withRouter(OrderIndex);
