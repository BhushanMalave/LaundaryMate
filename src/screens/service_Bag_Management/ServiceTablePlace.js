
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SideBarModal } from "./sideBarModal/SideBarModal";
import ServicePlace from "../service_Bag_Management/ServicePlace";
import ServiceBagManagement from "./ServiceBagManagement";
import "./ServiceTable.css";
import { useTable } from "../../utils/Functions";
import TableFooter from "../../components/location_management_table/TableFooter";

export default function ServiceTablePlace({data,rowsPerPage}) {

    const navigate=useNavigate()
    const [toggle, setToggle] = useState(false);
    const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const obj = [
    {
      Service:'Wash + Fold',
      Bags: "100",
     

    },
    {
      Service:'Wash + Iron',
      Bags: "100",
    
   
    },
    {
      Service:'SteamIron',
      Bags: "100",
    
    
    },
    {
      Service:'DryClean + Iron',
      Bags: "100",
  
    
    },
   
  ];
  return (
    <div>
      <table className="table-container">
        <thead>
          <tr className="table-head-row">
            <th className="table-head-data1">Services &nbsp; &darr;</th>
         
            <th className="table-head-data">No of Bags</th>
    
          </tr>
        </thead>

        {slice.map((data) => (
          <tr className="table-content-row">
            <td className="table-content-data1" onClick={()=>{setToggle(true)}}>{data.Service}</td>
         
            <td className="table-content-data">{data.Bags}</td>
       

            {/* <td className="table-image-data">
              <img src={require("../../../images/edit.png")} alt="edit" />
              <img src={require("../../../images/delete.png")} alt="edit" />
            </td> */}
          </tr>
        ))}
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      
      <SideBarModal toggle={toggle} setToggle={setToggle}/>
    </div>
  );
}


