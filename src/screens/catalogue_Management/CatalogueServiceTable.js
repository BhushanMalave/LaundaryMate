import React, { useState } from 'react'
import ActiveInactiveSelect from '../../components/active_inactive_select.js/ActiveInactiveSelect';
import TableFooter from '../../components/location_management_table/TableFooter';
import { useTable } from '../../utils/Functions';
import './CatalogueServiceTable.css'
export const CatalogueServiceTable = ({data,rowsPerPage}) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <div>
      <table className="table-container_sertb">
        <thead>
          <tr className="table-head-row_sertb">
            <th className="table-head-data1_sertb">Service ID &nbsp; &darr;</th>
            <th className="table-head-data_sertb">Service Name / Type</th>
            <th className="table-head-data_sertb">Service icon</th>
            <th className="table-head-data_sertb">Status</th>
            
          </tr>
        </thead>

        {slice.map((data) => (
          <tr className="table-content-row_sertb">
            <td className="table-content-data1_sertb" >{data.ServiceId}</td>
            <td className="table-content-data_sertb">{data.ServiceName}</td>
            <td className="table-image-data_sertb"><img src={data.Serviceicon}/></td>

            <td className="table-content-data_sertb"><ActiveInactiveSelect status={data.status}/></td>
        
          </tr>
        ))}
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      
    </div>
  )
}


