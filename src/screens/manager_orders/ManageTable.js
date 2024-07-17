import React, { useState } from "react";
import CustomerStatusButton from "../../components/customer_status_button/CustomerStatusButton";
import "../manager_orders/ManageTable.css"
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
                key={el.m_orderid}
              >
                <td className={styles.tableCell} style={{ color: "#0074BC",fontWeight:700 }} onClick={() => navigate("/ManageOrderDetails")}>
                  {el.m_orderid}
                </td>
                <td className={styles.tableCell}>{el.m_customerid}</td>
                <td className={styles.tableCell}>{el.m_hubid}</td>
                <td className={styles.tableCell}>{el.m_noofitems}</td>
                <td className={styles.tableCell}>{el.m_orderdate}</td>
                <td className={styles.tableCell}>{el.m_pickup}</td>
                <td className={styles.tableCell}>{el.m_pickupslot}</td>
                <td className={styles.tableCell}>{el.m_delivery}</td>
                <td className={styles.tableCell}>{el.m_delivery_slot}</td>
                <td className={styles.tableCell}>{el.m_ordertotal}</td>
                {/* <td className={styles.tableCell}>{el.m_orderstatus}</td> */}
                <td className="table-customerStatus-data">
                
                   {el.m_orderstatus === "Inprogress" ? (
                        <CustomerStatusButton text="Inprogress" />
                      ) : el.m_orderstatus === "Hold" ? (
                        <CustomerStatusButton text="Hold" />
                      ) : el.m_orderstatus === "Cancelled" ? (
                        <CustomerStatusButton text="Cancelled" />
                      ) : el.m_orderstatus === "Completed" ? (
                        <CustomerStatusButton text="Completed" />
                      ) : null}
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
