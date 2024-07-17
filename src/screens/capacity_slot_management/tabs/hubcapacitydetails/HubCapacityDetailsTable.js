import React, { useState } from "react";
import "./HubCapacityDetailsTable.css";
import { useNavigate } from "react-router-dom";
import { useTable } from "../../../../utils/Functions";
import TableFooter from "../../../../components/location_management_table/TableFooter";
import styles from "../../../../components/location_management_table/Table.module.css";
import { v4 as uuid } from "uuid";

export const HubCapacityDetailsTable = ({
  data,
  rowsPerPage,
  tableHeader,
  cpuId,
}) => {
  const navigate = useNavigate();
  const [uploadState, setUploadState] = useState(true);
  const [newUpdateState, setNewUpdateState] = useState(false);
  const [duration, setDuration] = useState();
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
                key={el.duration}
              >
                <td
                  className={styles.tableCell}
                  style={{ color: "#0074BC" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/HubCapacityDetailsInfo", {
                      state: { cpuId: cpuId, duration: data.duration },
                    });
                  }}
                >
                  {el.duration}
                </td>
                <td className={styles.tableCell}>{el.uploadDate}</td>
                <td className={styles.tableCell}>{el.uploadedBy}</td>
                <td
                  className={styles.tableCell}
                  style={{ color: "#0074BC" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setNewUpdateState(true);
                    setDuration(data.duration);
                  }}
                >
                  Update
                </td>
                <td className={styles.tableCell} style={{ color: "#0074BC" }}>
                  Export
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />

      {newUpdateState && (
        <div className="cpuUpdate_main">
          <div className="cpuUpdate_maindiv2">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "40px 40px 20px  40px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Bold",
                  fontStyle: "normal",

                  fontSize: "18px",
                  lineHeight: "24px",

                  color: " #181818",
                }}
              >
                Update HUB Capacity
              </div>
              <img
                src={require("../../../../images/cancle.png")}
                alt="cancle_icn"
                width={16}
                height={16}
                onClick={() => {
                  setNewUpdateState(false);
                  setUploadState(true);
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "Regular",
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "20px",
                padding: "10px 40px 10px  40px",
                color: " #181818",
              }}
            >
              Please select the file containing the HUB capcaity to be uploaded
            </div>

            {uploadState ? (
              <>
                <div
                  style={{
                    fontFamily: "Bold",
                    fontStyle: "normal",
                    fontSize: "12px",
                    lineHeight: "16px",
                    padding: "10px 40px 10px  40px",
                    color: " #181818",
                  }}
                >
                  Duration
                </div>
                <div
                  style={{
                    fontFamily: "Regular",
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "24px",
                    padding: "10px 40px 10px  40px",
                    color: " #181818",
                  }}
                >
                  01 {duration} - 31 {duration} 2022
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "400px",
                    height: "58px",
                    background: "#FFFFFF",
                  }}
                  className="cpuUpdate_input"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "400px",
                    }}
                  >
                    <div style={{ marginLeft: "-30px" }}>
                      <div
                        style={{
                          fontFamily: "Bold",
                          fontStyle: "normal",
                          fontSize: "12px",
                          lineHeight: "16px",
                          color: " #808080",
                        }}
                      >
                        File Name
                      </div>
                      <div
                        style={{
                          fontFamily: "Regular",
                          fontStyle: "normal",
                          fontSize: "14px",
                          lineHeight: "18px",
                          color: " #181818",
                        }}
                      >
                        hub_files.xlsx
                      </div>
                    </div>
                    <img
                      src={require("../../../../images/choosefile.png")}
                      alt="choosefile"
                      style={{ marginRight: "-30px" }}
                    />
                  </div>
                </div>
                <img
                  src={require("../../../../images/upload_btn.png")}
                  alt="choosefile"
                  style={{ padding: "10px 40px" }}
                  onClick={() => {
                    setUploadState(false);
                  }}
                />
                <img
                  src={require("../../../../images/cancle_btn.png")}
                  alt="choosefile"
                  style={{ padding: "10px 40px" }}
                  onClick={() => {
                    setNewUpdateState(false);
                    setUploadState(true);
                  }}
                />
              </>
            ) : (
              <>
                <div
                  style={{
                    fontFamily: "Regular",
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "20px",
                    padding: "0px 40px 10px  40px",
                    color: " #FF3030",
                  }}
                >
                  Error in file upload. Please download and re upload the file.
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "400px",
                    height: "58px",
                    background: "#FFECE1",
                  }}
                  className="cpuUpdate_input2"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "400px",
                    }}
                  >
                    <div style={{ marginLeft: "-30px" }}>
                      <div
                        style={{
                          fontFamily: "Bold",
                          fontStyle: "normal",
                          fontSize: "12px",
                          lineHeight: "16px",
                          color: " #808080",
                        }}
                      >
                        File Name
                      </div>
                      <div
                        style={{
                          fontFamily: "Regular",
                          fontStyle: "normal",
                          fontSize: "14px",
                          lineHeight: "18px",
                          color: " #FF3030",
                        }}
                      >
                        hub_files.xlsx
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={require("../../../../images/download_btn.png")}
                  alt="choosefile"
                  style={{ padding: "10px 40px" }}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
