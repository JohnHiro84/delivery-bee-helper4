import React, { Component } from 'react';
import '../../../assets/stylesheets/accept-order-modal.css';

class ModalMessage extends Component {

  closeModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  render() {
    return (
      <>
        <div id="myModal" className="modal">

          <div className="modal-content">

            <div className="modal-header">
              <span className="close" onClick={this.closeModal}>&times;</span>
              <h2>Commit to carrying out this delivery</h2>
            </div>

            <div className="modal-body">
              <p>By clicking below you are accepting responsibility to complete this delivery.</p>
              <p>If you think you can complete this delivery within 1 hour please accept :)</p>
              <button className="button-large-primary" onClick={this.props.acceptOrder}>Accept Order</button>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default ModalMessage;
