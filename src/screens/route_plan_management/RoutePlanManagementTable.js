import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActiveInactiveSelect from "../../components/active_inactive_select.js/ActiveInactiveSelect";
import CustomerStatusButton from "../../components/customer_status_button/CustomerStatusButton";
import TableFooter from "../../components/location_management_table/TableFooter";
import { useTable } from "../../utils/Functions";
import "./RoutePlanManagementTable.css";
const RoutePlanManagementTable = ({data,rowsPerPage}) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  
  return (
    <div >
    <table className="route-plan-management-table-container" >
      <thead className="route-plan-management-table-head-main">
        <tr className="route-plan-management-table-head-row">
          <th className="route-plan-management-table-head-data1">
          Route Name
            <img
              src={require("../../images/DownArrow.png")}
              className={"route-plan-management-down-arrow"}
            />
          </th>
          <th className="route-plan-management-table-head-data " >Hub ID</th>
          <th className="route-plan-management-table-head-data">Hub Name</th>
          <th className="route-plan-management-table-head-data">Delivery Date</th>
          <th className="route-plan-management-table-head-data">Delivery Slot</th>
          <th className="route-plan-management-table-head-data">Vehicle Number</th>
          <th className="route-plan-management-table-head-data">Driver Name</th>
          <th className="route-plan-management-table-head-data">Driver Number</th>
        </tr>
      </thead>

      {slice.map((data) => (
        <tr className="route-plan-management-table-content-row"
        onClick={() => navigate("/RoutePlanDetails",{state:data})}
        >
          <td
            className="route-plan-management-table-content-data1"
            // onClick={() => navigate("/RoutePlanManagemet/RoutePlanDetails",{state:data})}
          >
            {data.routeName}
          </td>
          <td className="route-plan-management-table-content-data route-plan-management-table-hubid-width" >{data.hubId}</td>
          <td className="route-plan-management-table-content-data">{data.hubName}</td>
          <td className="route-plan-management-table-content-data">{data.deliveryDate}</td>
          <td className="route-plan-management-table-content-data">{data.deliverySlot}</td>
          <td className="route-plan-management-table-content-data">{data.vehicleNumber}</td>
          <td className="route-plan-management-table-content-data">{data.driverName}</td>
          <td className="route-plan-management-table-content-data route-plan-management-table-mobilenumber-width">+91{data.driverNumber}</td>
        </tr>
      ))}
    </table>
    <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      </div>
  );
};

export default RoutePlanManagementTable;
