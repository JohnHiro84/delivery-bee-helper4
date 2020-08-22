import React, {useEffect} from 'react';

import { withRouter } from 'react-router-dom';
// import '../../assets/stylesheets/new-styles.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function ToastNotification(props) {

  useEffect(()=> {


    if(props.toast.new === "helper_accepted"){

      props.updateStateNewToast({toast: ""});

      toast.success('You have successfully accepted this delivery! Check the Accepted Tab for more details.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } else if(props.toast.new === "helper_completed"){

          props.updateStateNewToast({toast: ""});

          toast.success('Thank you for completing this delivery! Check the Completed Tab for more details.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

        }

  })

  return (
    <>
      <ToastContainer />
    </>
  );
}

export default withRouter(ToastNotification);
