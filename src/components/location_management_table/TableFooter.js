import React, { useEffect, useState } from "react";
import styles from "./TableFooter.module.css";
import up from "../../images/arrow_drop_up.png";
import down from "../../images/arrow_drop_down.png";
import {
  AiFillStepBackward,
  AiFillCaretRight,
  AiFillStepForward,
} from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

function TableFooter({ range, setPage, page, slice,style }) {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div style={style} className={styles.tableFooter}>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
      >
        <p
          style={{
            fontFamily: "Regular",
            fontSize: "12px",
            lineHeight: "16px",
          }}
        >
          Showing&nbsp;&nbsp;{page}
        </p>
        <span>
          <div className={styles.tableFooterText}>
            <img src={up} alt="arrowUp" />
            <img style={{ marginTop: "2px" }} src={down} alt="arrowDown" />
          </div>
        </span>
        <p
          style={{
            marginLeft: "10px",
            fontFamily: "Regular",
            fontSize: "12px",
            lineHeight: "16px",
          }}
        >
          of&nbsp;&nbsp;{range.length}&nbsp;&nbsp;entries
        </p>
      </div>
      <div className={styles.tableRemote}>
        <AiFillStepBackward
          color={page > 1 ? "#0074BC" : "grey"}
          height={12}
          style={{ cursor: "pointer" }}
          width={12}
          onClick={() => {
            if (page > 1) {
              setPage(1);
            }
          }}
        />
        <IoIosArrowBack
          style={{ cursor: "pointer" }}
          color={page > 1 ? "#0074BC" : "grey"}
          height={12}
          width={12}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        />
        <button className={`${styles.button} ${styles.activeButton}`}>
          {page}
        </button>
        <AiFillCaretRight
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (page < range.length) setPage(page + 1);
          }}
          color={page < range.length ? "#0074BC" : "grey"}
          height={12}
          width={12}
        />
        <AiFillStepForward
          style={{ cursor: "pointer" }}
          onClick={() => {
            if (page < range.length) {
              setPage(range.length);
            }
          }}
          color={page < range.length ? "#0074BC" : "grey"}
          height={12}
          width={12}
        />
      </div>
    </div>
  );
}

export default TableFooter;
