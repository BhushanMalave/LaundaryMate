import React from 'react'
import "../../../src/screens/customer_management/CustomerTrackItem.css"
import TrackItemStepper from './TrackItemStepper';



const CustomerTrackItem = ({trackItem,setTrackItem}) => {
  const divStyle = {
    display: trackItem ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
   setTrackItem(false)
  }
  return (
    <div className="track-item-modal" onClick={closeModal} style={divStyle}>
      <div
        className="track-item-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="track-item-modal-header">
          <span className="track-item-modaltext">Track Item</span>
          <span className="track-item-close" onClick={closeModal}>
            <img
              className="track-item-close-button"
              src={require("../../images/wallet_close.png")}
              alt=""
            />
          </span>
        </div>
        <div className="track-item-content">
            <p className='track-shirt'>Shirt1</p>
            <p className='track-add-ons'>Add-ons: &nbsp;<span className='track-single'>Single Pack + Starch</span></p>
            <div className='track-item-images-container'>
                <img src={require("../../images/track_bag.png")} alt="" />
                <img src={require("../../images/track_rice.png")} alt="" />
                <img src={require("../../images/track_shirt.png")} alt="" />

            </div>
        </div>
<TrackItemStepper/>
     
      </div>
    </div>
  );
}

export default CustomerTrackItem