import React, { useState } from "react";
import { useTable } from "../../utils/Functions";
import TableFooter from "./TableFooter";
import styles from "./Table.module.css";
import { v4 as uuid } from "uuid";
import edit from "../../images/edit.png";
import remove from "../../images/delete.png";
import ActiveInactiveSelect from "../active_inactive_select.js/ActiveInactiveSelect";

function TableCity({
  data,
  rowsPerPage,
  tableHeader,
  setCrumbHeading,
  setModal4,
  setModal5,
  name,
}) {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

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

          {slice.map((el) =>
            // console.log("deliveryVehicle",el),
            name === "city" ? (
              <tr
                onClick={(e) => {
                  e.stopPropagation();
                  if (name === "city") setModal4(true);
                  setCrumbHeading(el.name);
                }}
                className={styles.tableRowItems}
                key={uuid()}
              >
                <td className={styles.tableCell}>{el.name}</td>
                <td className={styles.tableCell}>{el.capital}</td>
                <td className={styles.tableCell}>{el.language}</td>
                <td className={styles.tableCell}>{el.language}</td>
                <td className={styles.tableCell}>{el.language}</td>
                <td className={styles.tableCell}>{el.language}</td>
                <td className={styles.tableCell}>{el.language}</td>
                <td className={styles.tableCell}>{el.language}</td>
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
            ) : name === "cpu" || name === "process" ? (
              <tr
                onClick={(e) => {
                  e.stopPropagation();
                  if (name === "cpu") setModal5(true);
                  setCrumbHeading(el.name);
                }}
                className={styles.tableRowItems}
                key={uuid()}
              >
                <td className={styles.tableCell}>{el.name}</td>
                <td className={styles.tableCell}>{el.capital}</td>
                <td className={styles.tableCell}>{el.language}</td>
                <td className={styles.tableCell}>{el.language}</td>
                <td className={styles.tableCell}>{el.language}</td>
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
            ) : null
          )}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
}

export default TableCity;
