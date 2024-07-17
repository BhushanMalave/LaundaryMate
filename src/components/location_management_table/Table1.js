import React,{useState} from 'react'
import TableFooter from './TableFooter';
import { v4 as uuid } from "uuid";
import styles from "./Table.module.css";
import { useTable } from "../../utils/Functions";
import ActiveInactiveSelect from '../active_inactive_select.js/ActiveInactiveSelect';

function Table1({ data, rowsPerPage, tableHeader }) {
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
  
            {slice.map((el) => (
              <tr onClick={(e)=>{
                    e.stopPropagation()
              }} className={styles.tableRowItems} key={el.id}>
                <td className={styles.tableCell}>{el.name}</td>
                <td className={styles.tableCell}>{el.capital}</td>
                <td className={styles.tableCell}>{el.language}</td>
                <td className={styles.tableCell}><ActiveInactiveSelect status={el.vehicleStatus} /></td>
                <td className={styles.tableCellDetail}>Details</td>
      
              </tr>
            ))}
          </tbody>
        </table>
        <TableFooter style={{width:"97%"}} range={range} slice={slice} setPage={setPage} page={page} />
      </>
    );
}

export default Table1