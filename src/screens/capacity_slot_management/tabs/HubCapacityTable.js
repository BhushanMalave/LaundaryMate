import { useNavigate } from "react-router-dom";
import CustomerStatusButton from "../../../components/customer_status_button/CustomerStatusButton";
import React, { useState } from "react";
import { useTable } from "../../../utils/Functions";
import TableFooter from "../../../components/location_management_table/TableFooter";
import styles from "../../../components/location_management_table/Table.module.css";
import { v4 as uuid } from "uuid";

export default function HubCapacityTable({ data, rowsPerPage, tableHeader }) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <div>
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
              <tr className={styles.tableRowItems} key={el.cpuId}>
                <td
                  className={styles.tableCell}
                  style={{ color: "#0074BC" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/HubCapacityDetails", {
                      state: { cpuId: data.cpuId },
                    });
                  }}
                >
                  {el.cpuId}
                </td>
                <td className={styles.tableCell}>{el.hubName}</td>
                <td className={styles.tableCell}>{el.city}</td>
                <td className={styles.tableCell}>{el.slot}</td>
                <td className={styles.tableCell}>
                  <CustomerStatusButton text={el.status} />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
}
