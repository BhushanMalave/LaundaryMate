import React, { useState } from "react";
import CustomerStatusButton from "../../components/customer_status_button/CustomerStatusButton";
import "../customer_management/Customer_Table.css";
import { useNavigate } from "react-router-dom";
import TableFooter from "../../components/location_management_table/TableFooter";
import { useTable } from "../../utils/Functions";
import styles from "../../components/location_management_table/Table.module.css";
import { v4 as uuid } from "uuid";


export default function Table({ data, rowsPerPage, tableHeader }) {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const navigate = useNavigate();

  return (
    // <div>
    //   <table className="customer-table-container">
    //     <thead className="customer-table-head-main">
    //       <tr className="customer-table-head-row">
    //         <th className="customer-table-head-data1">
    //           Customer Id &nbsp; &darr;
    //         </th>
    //         <th className="customer-table-head-data">Customer Type</th>
    //         <th className="customer-table-head-data">Name</th>
    //         <th className="customer-table-head-data">Primary Mobile Number</th>
    //         <th className="customer-table-head-data">Subscription Type</th>
    //         <th className="customer-table-head-data">Customer Status</th>
    //       </tr>
    //     </thead>

    //     {obj.map((data) => (
    //       <tr className="customer-table-content-row">
    //         <td
    //           className="customer-table-content-data1"
    //           onClick={() => navigate("/CustomerDetails")}
    //         >
    //           {data.customerid}
    //         </td>
    //         <td className="customer-table-content-data">{data.customertype}</td>
    //         <td className="customer-table-content-data">{data.name}</td>
    //         <td className="customer-table-content-data">{data.mblno}</td>
    //         <td className="customer-table-content-data">
    //           {data.subscriptiontype}
    //         </td>
    //         {/* <td className="table-content-data">{data.customerstatus}</td> */}
    //         <td className="table-customerStatus-data">
    //           {data.customerstatus === "Active" ? (
    //             <CustomerStatusButton text="Active" />
    //           ) : (
    //             <CustomerStatusButton text="Inactive" />
    //           )}
    //         </td>
    //       </tr>
    //     ))}
    //   </table>
    // </div>
    <>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tableHeadingRow}>
            {tableHeader.map((ele) => {
              return (
                <th key={uuid()} className={styles.tableHeader}>
                  {ele}
                </th>
              );
            })}
          </tr>

          {slice.map((el) => (
            <>
              <tr
                //   onClick={(e) => {
                //     e.stopPropagation();
                //   }}
                className={styles.tableRowItems}
                key={el.customerid}
              >
                <td className={styles.tableCell} style={{ color: "#0074BC",fontWeight:700 }} onClick={() => navigate("/CustomerDetails")}>
                  {el.customerid}
                </td>
                <td className={styles.tableCell}>{el.customertype}</td>
                <td className={styles.tableCell}>{el.name}</td>
                <td className={styles.tableCell}>{el.mblno}</td>
                <td className={styles.tableCell}>{el.subscriptiontype}</td>
                {/* <td className={styles.tableCell}>{el.customerstatus}</td> */}
             
                <td className="table-customerStatus-data">
                  {el.customerstatus === "Active" ? (
                    <CustomerStatusButton text="Active" />
                  ) : (
                    <CustomerStatusButton text="Inactive" />
                  )}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
}
