import React, { useState } from "react";
import "./Button.css";
import { MdArrowUpward } from "react-icons/md";
import { RxDividerHorizontal } from "react-icons/rx";

export const ContentBox = ({ heading, content, style = {} }) => {
  return (
    <div className="content-box-container" container={{ ...style }}>
      <p className="content-box-heading">{heading}</p>
      <p className="content-box-content" style={{ ...style }}>
        {content}
      </p>
    </div>
  );
};

export const ExportButton = () => {
  return (
    <div className="container_export">
      <span>Export</span>
    </div>
  );
};

export const ApplyButton = ({ text }) => {
  return (
    <div className="applybtn_div">
      <span className="applybtn_text">{text}</span>
    </div>
  );
};

export const LocationExportButton = ({ text }) => {
  return (
    <div className="locationExport">
      <div className="exportImg">
        <MdArrowUpward
          style={{
            height: "20px",
            width: "20px",
            color: "#0074BC",
            fontWeight: "bold",
          }}
        />
        <RxDividerHorizontal
          style={{ height: "12px", width: "12px", color: "#0074BC" }}
        />
      </div>
      <p className="locationExportText">{text}</p>
    </div>
  );
};

export const AddButton = ({ text, style, onClick }) => {
  return (
    <div onClick={onClick} style={style} className="addBut">
      <span className="addButText">{text}</span>
    </div>
  );
};

export const SyncButton = (props) => {
  const [rotate, setRotate] = useState(false);
  const handleClick = () => {
    setRotate(!rotate);
    setTimeout(() => {
      setRotate(false);
    }, 500);
  };

  return (
    <div
      className="sync-btn"
      onClick={() => {
        handleClick();
        props.onClick();
      }}
    >
      <img
        className={rotate ? "rotate" : ""}
        src={require("../../images/Icn_sync.png")}
      />
      <img src={require("../../images/Sync.png")} />
    </div>
  );
};
