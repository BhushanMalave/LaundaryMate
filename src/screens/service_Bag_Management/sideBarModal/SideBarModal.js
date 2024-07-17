
import React from "react";
import "./SideBarModal.css";
import { Button, FilledButton, OutlineButton } from "../../../components/buttons/Button";
import { useNavigate } from "react-router-dom";


export const SideBarModal = ({toggle,setToggle}) => {
  const divStyle = {
    display: toggle ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    setToggle(false);
  }

  const navigate=useNavigate()
  const obj = [
    {
      BagName: "Blue1",
      Barcode: "12345678",
    

    },
    {
      BagName: "Blue1",
      Barcode: "12345678",
     
    },
    {
      BagName: "Blue1",
      Barcode: "12345678",
 
    
    },
    {
      BagName: "Blue1",
      Barcode: "12345678",
    
    
    },
    {
      BagName: "Blue1",
      Barcode: "12345678",

   
    },
    {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },
     {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },
     {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },
     {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },
     {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },
     {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },
     {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },
     {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },
     {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },
     {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },
     {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },
     {
        BagName: "Blue1",
        Barcode: "12345678",
 
     },


  ];
  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
        <div className="modal-header">
        <span className="modaltext">Wash + Fold Bag Details(50 bags)</span>
        <span className="close" onClick={closeModal}>
        <img
            className="close-button"
            src={require("../../../images/close.png")}
            alt=""
          />
        </span>
        </div>
        <div className="modal-innercontent" >
        
      <table className="table-containermodal">
        <thead>
          <tr className="table-head-rowmodal">
            <th className="table-head-data1modal">Bag Name</th>
            <th className="table-head-datamodal">Barcode</th>
          </tr>
        </thead>

        {obj.map((data) => (
          <tr className="table-content-rowmodal">
            <td className="table-content-data1modal">{data.BagName}</td>
            <td className="table-content-datamodal">{data.Barcode}</td>

            {/* <td className="table-image-data">
              <img src={require("../../../images/edit.png")} alt="edit" />
              <img src={require("../../../images/delete.png")} alt="edit" />
            </td> */}
          </tr>
        ))}
      </table>
        </div>
      </div>
    </div>
  );
};

