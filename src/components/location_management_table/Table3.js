import React, { useState } from "react";
import TableFooter from "./TableFooter";
import { v4 as uuid } from "uuid";
import styles from "./Table.module.css";
import { useTable } from "../../utils/Functions";
import ActiveInactiveSelect from "../active_inactive_select.js/ActiveInactiveSelect";
import edit from "../../images/edit.png";
import remove from "../../images/delete.png";

function Table3({
  data,
  rowsPerPage,
  tableHeader,
  name,
  setModal7,
  setCrumbHeading,
}) {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <>
      <table className={styles.table1}>
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
            name === "cityHub" ? (
              <tr
                onClick={(e) => {
                  e.stopPropagation();
                  setModal7(true);
                  console.log("hello");
                  setCrumbHeading(el.name);
                }}
                className={styles.tableRowItems}
                key={el.id}
              >
                <td className={styles.tableCell}>{el.name}</td>
                <td className={styles.tableCell}>{el.capital}</td>
                <td className={styles.tableCell}>{el.capital}</td>
                <td className={styles.tableCell}>{el.capital}</td>
                <td className={styles.tableCell}>{el.language}</td>
                <td className={styles.tableCell}>
                  <ActiveInactiveSelect status={el.vehicleStatus} />
                </td>
                <td
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className={styles.tableCell}
                >
                  Details
                </td>
              </tr>
            ) : name === "shift" ? (
              <tr className={styles.tableRowItems} key={el.id}>
                <td className={styles.tableCell}>{el.shiftType}</td>
                <td className={styles.tableCell}>{el.shiftName}</td>
                <td className={styles.tableCell}>{el.shiftDuration}</td>
                <td className={styles.tableCell}>
                  <img src={edit} alt="edit" />
                </td>
                <td className={styles.tableCell}>
                  <img src={remove} alt="delete" />
                </td>
              </tr>
            ) : name === "slot" ? (
              <tr className={styles.tableRowItems} key={el.id}>
                <td className={styles.tableCell}>{el.slotType}</td>
                <td className={styles.tableCell}>{el.slotName}</td>
                <td className={styles.tableCell}>{el.slotDuration}</td>
                <td className={styles.tableCell}>
                  <img src={edit} alt="edit" />
                </td>
                <td className={styles.tableCell}>
                  <img src={remove} alt="delete" />
                </td>
              </tr>
            ) : name === "cpuShift" ? (
              <tr className={styles.tableRowItems} key={el.id}>
                <td className={styles.tableCell}>{el.name}</td>
                <td className={styles.tableCell}>{el.language}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
      <TableFooter
        style={{ width: "97%" }}
        range={range}
        slice={slice}
        setPage={setPage}
        page={page}
      />
    </>
  );
}

export default Table3;
