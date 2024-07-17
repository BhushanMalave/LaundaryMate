import React, { useState } from "react";
import "./CpuCapacityDeatilsInfoTable.css";
import CustomizedProgressBars from "./BorderLinearProgress";
import { useTable } from "../../../../utils/Functions";
import TableFooter from "../../../../components/location_management_table/TableFooter";
import styles from "../../../../components/location_management_table/Table.module.css";
import { v4 as uuid } from "uuid";

export const CpuCapacityDeatilsInfoTable = ({
  data,
  rowsPerPage,
  tableHeader,
}) => {
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
              <tr
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={styles.tableRowItems}
                key={el.date}
              >
                <td className={styles.tableCell} style={{ color: "#0074BC" }}>
                  {el.date}
                </td>
                <td className={styles.tableCell}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        fontFamily: "Regular",
                        fontStyle: "normal",
                        fontSize: "12px",
                        color: "#7C7B7B",
                      }}
                    >
                      <span style={{ color: "#181818" }}>
                        {`${el.shift1}`}{" "}
                      </span>
                      {`%   ${el.shift1}of100items `}
                    </div>
                    <CustomizedProgressBars value={el.shift1} />
                  </div>
                </td>
                <td className={styles.tableCell}>
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        fontFamily: "Regular",
                        fontStyle: "normal",
                        fontSize: "12px",
                        color: "#7C7B7B",
                      }}
                    >
                      <span style={{ color: "#181818" }}>
                        {`${el.shift2}`}{" "}
                      </span>
                      {`%   ${el.shift2}of100items `}
                    </div>
                    <CustomizedProgressBars value={el.shift2} />
                  </div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  );
};
