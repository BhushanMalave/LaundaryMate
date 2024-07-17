import "../customer_management/CustomerPaymentSelectionModal.css";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import SearchButton from "../../components/search_button/SearchButton";

export const CustomerPaymentSelectionModal = ({ modal, setModal }) => {
  const [text, setText] = React.useState("");
  const divStyle = {
    display: modal ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    setModal(false);
  }

  return (
    <div className="credit-debit-modal" onClick={closeModal} style={divStyle}>
      <div
        className="credit-debit-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="credit-debit-modal-header">
          <span className="credit-debit-modaltext">Credit or Debit Wallet</span>
          <span className="credit-debit-close" onClick={closeModal}>
            <img
              className="credit-debit-close-button"
              src={require("../../images/wallet_close.png")}
              alt=""
            />
          </span>
        </div>
        <div className="radio-button-container">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="credit"
                control={<Radio />}
                label="Credit"
              />

              <FormControlLabel
                value="debit"
                control={<Radio />}
                label="Debit"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="input-text-area-container">
          <input
            type="text"
            className="credit-input"
            placeholder="Enter Amount"
          />
          <div className="textarea-count-content">
            <textarea
              maxlength="200"
              placeholder="Description"
              className="credit-text-area"
              onChange={(e) => {
                setText(e.target.value);
              }}
            ></textarea>
            <p className="word-count">{text.length}/200</p>
          </div>
          <div className="bottom-container">
            <button className="button-credit">Credit Wallet</button>
            <SearchButton text="Cancel" onClick={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};
