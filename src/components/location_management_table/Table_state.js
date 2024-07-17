import React, { useState } from "react";
import { useTable } from "../../utils/Functions";
import TableFooter from "./TableFooter";
import styles from "./Table.module.css";
import { v4 as uuid } from "uuid";
import edit from "../../images/edit.png";
import ActiveInactiveSelect from "../active_inactive_select.js/ActiveInactiveSelect";

function Table_state({
  data,
  rowsPerPage,
  tableHeader,
  setCrumbHeading,
  name,
  setModal2,
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

          {slice.map((el) => (
            <tr
              onClick={(e) => {
                e.stopPropagation();
                if (name === "state") setModal2(true);
                setCrumbHeading(el.name);
              }}
              className={styles.tableRowItems}
              key={el.id}
            >
              <td className={styles.tableCellTd1}>{el.name}</td>
              <td className={styles.tableCell}>{el.capital}</td>
              <td className={styles.tableCell}>{el.language}</td>
              <td className={styles.tableCell}>{el.language}</td>
              <td className={styles.tableCell}>{el.language}</td>
              <td className={styles.tableCell}>{el.language}</td>
              <td className={styles.tableCell}>{el.language}</td>
              <td className={styles.tableCell}>
                <ActiveInactiveSelect status={"active"} />
              </td>
              <td className={styles.tableCell}>
                <img src={edit} alt="edit" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
}

export default Table_state;
