import React, { useState } from "react";
import { useTable } from "../../utils/Functions";
import TableFooter from "../../components/location_management_table/TableFooter";
import styles from "../../components/location_management_table/Table.module.css";
import { v4 as uuid } from "uuid";
import edit from "../../images/edit.png";
import remove from "../../images/delete.png";
import ActiveInactiveSelect from "../../components/active_inactive_select.js/ActiveInactiveSelect";
import { useNavigate } from "react-router-dom";

function VehicleTable({ data, rowsPerPage, tableHeader }) {
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
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/vehicledetails');
                }}
                className={styles.tableRowItems}
                key={el.vehicleId}
              >
                <td className={styles.tableCell} style={{ color: "#0074BC" }}>
                  {el.vehicleId}
                </td>
                <td className={styles.tableCell}>{el.regNo}</td>
                <td className={styles.tableCell}>{el.hubId}</td>
                <td className={styles.tableCell}>{el.vehicleType}</td>
                <td className={styles.tableCell}>{el.weight}</td>
                <td className={styles.tableCell}>{el.volume}</td>
                <td className={styles.tableCell}>
                  <ActiveInactiveSelect status={el.vehicleStatus} />
                </td>
                <td className={styles.tableCell}>
                  <img src={edit} alt="edit" />
                </td>
                <td className={styles.tableCell}>
                  <img src={remove} alt="delete" />
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

export default VehicleTable;
