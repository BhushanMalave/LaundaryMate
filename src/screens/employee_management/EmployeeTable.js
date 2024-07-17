import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActiveInactiveSelect from "../../components/active_inactive_select.js/ActiveInactiveSelect";
import CustomerStatusButton from "../../components/customer_status_button/CustomerStatusButton";
import TableFooter from "../../components/location_management_table/TableFooter";
import { useTable } from "../../utils/Functions";
import AddRoleModal from "./add_role_modal/AddRoleModal";
import "./EmployeeTable.css";
const EmployeeTable = ({ data, rowsPerPage }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const [addRole, setAddRole] = useState(false);
  const [employeeDetails, setEmployeeDetails] = useState({
    employeeId: "",
    employeeName: "",
  });
  return (
    <div>
      <table className="employee-management-table-container">
        <thead className="employee-management-table-head-main">
          <tr className="employee-management-table-head-row">
            <th className="employee-management-table-head-data1">
              Employee ID
              <img
                src={require("../../images/DownArrow.png")}
                className={"employee-management-down-arrow"}
              />
            </th>
            <th className="employee-management-table-head-data">
              Employee Name
            </th>
            <th className="employee-management-table-head-data">
              Employee Type
            </th>
            <th className="employee-management-table-head-data">
              Mobile Number
            </th>
            <th className="table-head-data">Work Location</th>
            <th className="employee-management-table-head-data">
              Employee Role(s)
            </th>
            <th className="employee-management-table-head-data">
              Employee Status
            </th>
          </tr>
        </thead>

        {slice.map((data) => (
          <tr
            className="employee-management-table-content-row"
            key={data.employeeid}
          >
            <td
              className="employee-management-table-content-data1"
              onClick={() => navigate("/EmployeeDetails", { state: data })}
            >
              {data.employeeid}
            </td>
            <td className="employee-management-table-content-data">
              {data.employeename}
            </td>
            <td className="employee-management-table-content-data">
              {data.employeetype}
            </td>
            <td className="employee-management-table-content-data">
              {data.mblno}
            </td>
            <td className="employee-management-table-content-data">
              {data.worklocation}
            </td>
            {Array.isArray(data.employeerole) ? (
              <>
                {data.employeerole.length ? (
                  <>
                    <td className="employee-management-table-content-data">
                      {data.employeerole[0]}{" "}
                      {data.employeerole.length > 1 ? (
                        <>+{data.employeerole.length}</>
                      ) : null}
                      <img
                        src={require("../../images/edit.png")}
                        className={
                          "employee-management-table-content-edit-icon"
                        }
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="employee-management-table-content-add-role">
                      <p
                        onClick={() => {
                          setAddRole(true);
                          setEmployeeDetails({
                            employeeId: data.employeeid,
                            employeeName: data.employeename,
                          });
                        }}
                      >
                        {" "}
                        Add Role
                      </p>
                    </td>
                  </>
                )}
              </>
            ) : (
              <>
                {data.employeerole ? (
                  <>
                    <td className="employee-management-table-content-data">
                      {data.employeerole}
                      <img
                        src={require("../../images/edit.png")}
                        className={
                          "employee-management-table-content-edit-icon"
                        }
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="employee-management-table-content-add-role">
                      <p
                        onClick={() => {
                          setAddRole(true);
                          setEmployeeDetails({
                            employeeId: data.employeeid,
                            employeeName: data.employeename,
                          });
                        }}
                      >
                        Add Role
                      </p>
                    </td>
                  </>
                )}
              </>
            )}

            <td className="employee-management-table-customerStatus-data">
              <ActiveInactiveSelect status={data.employeestatus} />
            </td>
          </tr>
        ))}
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      <AddRoleModal
        toggle={addRole}
        setToggle={setAddRole}
        employeeId={employeeDetails.employeeId}
        employeeName={employeeDetails.employeeName}
      />
    </div>
  );
};

export default EmployeeTable;
