import React, { useState } from "react";
import "./EditModal.css";

import { vehicleNumber, DriverName } from "../RoutePlanData";
import { AddButton } from "../../../components/buttons/Button";
import SearchButton from "../../../components/search_button/SearchButton";
import SelectLabelEdit from "../../../components/select_label_edit/SelectLabelEdit";
const EditModal = ({ toggle, setToggle }) => {
  const divStyle = {
    display: toggle ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    setTimeout(500);
    setToggle(false);
  }
  const [vehicleNo, setVehivleNo] = useState({
    label: "KA01-AD556",
    value: "KA01-AD556",
  });

  const [driver, setDriver] = useState({
    label: "Mahesh Kumar",
    value: "Mahesh Kumar",
  });
  return (
    <div
      className="route-plan-edit-modal-main-container"
      style={divStyle}
      onClick={closeModal}
    >
      <div
        className="route-plan-edit-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="route-plan-edit-modal-header">
          <div className="route-plan-edit-modal-text">
            Edit Vehicle and Driver info
          </div>
          <div className="route-plan-edit-modal-close" onClick={closeModal}>
            <img
              className="route-plan-edit-modal-close-button"
              src={require("../../../images/close.png")}
              alt=""
            />
          </div>
        </div>
        <div className="route-plan-edit-modal-inner-content">
          <div className="route-plan-edit-modal-route-name-div">
            <p className="route-plan-edit-modal-route-name-placeholder">
              Route Name
            </p>
            <p className="route-plan-edit-modal-route-name-text">Route001</p>
          </div>
          <div className="route-plan-edit-modal-margin-top">
            <SelectLabelEdit
              placeholder="Select Vehicle Number"
              options={vehicleNumber}
              styles={{
                width: "400px",
                height: " 58px",
                backgroundColor: "white",
                borderColor: "#C1C1C1",
                borderWidth: "1px",
                borderRadius: "8px",
                paddingTop: "5px",
                textAlign: "justify",
              }}
              containerStyles={{
                width: "400px",
                marginTop: "0px",
              }}
              disable={false}
              getValue={setVehivleNo}
              value={vehicleNo}
            />
          </div>

          <div className="route-plan-edit-modal-margin-top">
            <SelectLabelEdit
              placeholder="Select Driver Name"
              options={DriverName}
              styles={{
                width: "400px",
                height: " 58px",
                backgroundColor: "white",
                borderColor: "#C1C1C1",
                borderWidth: "1px",
                borderRadius: "8px",
                paddingTop: "5px",
                textAlign: "justify",
              }}
              containerStyles={{
                marginTop: "0px",
              }}
              disable={false}
              getValue={setDriver}
              value={driver}
            />
          </div>
          <div className="route-plan-edit-modal-route-name-div route-plan-edit-modal-margin-top">
            <p className="route-plan-edit-modal-route-name-placeholder">
              Driver Number
            </p>
            <p className="route-plan-edit-modal-route-name-text">
              +919532425560
            </p>
          </div>

          <div className="route-plan-edit-modal-route-bottom-container">
            <AddButton
              text={"Update"}
              style={{
                width: "110px",
                height: "44px",
                borderRadius: "8px",
                marginRight: "30px",
              }}
            />
            <SearchButton
              text={"Cancel"}
              style={{
                width: "110px",
                height: "44px",
                borderRadius: "8px",
              }}
              onClick={closeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
