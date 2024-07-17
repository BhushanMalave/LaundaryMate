
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import TableFooter from "../../components/location_management_table/TableFooter";
import { useTable } from "../../utils/Functions";
import ServicePlace from "../service_Bag_Management/ServicePlace";
import ServiceBagManagement from "./ServiceBagManagement";
import "./ServiceTable.css";

export default function ServiceTable({data,rowsPerPage}) {

    const navigate=useNavigate()
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <div>
      <table className="table-container">
        <thead>
          <tr className="table-head-row">
            <th className="table-head-data1">Hub ID &nbsp; &darr;</th>
            <th className="table-head-data">Hub Name</th>
            <th className="table-head-data">No of Bags</th>
            <th className="table-head-data">Last Upload Date</th>
            <th className="table-head-data">Uploaded By</th> 
          </tr>
        </thead>

        {slice.map((data) => (
          <tr className="table-content-row">
            <td className="table-content-data1" onClick={()=>{navigate('/ServicePlace')}}>{data.HubId}</td>
            <td className="table-content-data">{data.HubName}</td>
            <td className="table-content-data">{data.Bags}</td>
            <td className="table-content-data">{data.UploadDate}</td>
            <td className="table-content-data">{data.uploadedBy}</td>

            {/* <td className="table-image-data">
              <img src={require("../../../images/edit.png")} alt="edit" />
              <img src={require("../../../images/delete.png")} alt="edit" />
            </td> */}
          </tr>
        ))}
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      
      
    </div>
  );
}


