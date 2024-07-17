import React, { useState } from 'react'
import ActiveInactiveSelect from '../../components/active_inactive_select.js/ActiveInactiveSelect';
import './CatalogueServiceTable.css'
import { useNavigate } from "react-router-dom";
import { useTable } from '../../utils/Functions';
import TableFooter from '../../components/location_management_table/TableFooter';
export const CatalogueAddOnesTable = ({data,rowsPerPage}) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

    
  return (
    <div>
      <table className="table-container_sertb">
        <thead>
          <tr className="table-head-row_sertb">
            <th className="table-head-data1_sertb">Add-On ID &nbsp; &darr;</th>
            <th className="table-head-data_sertb">Add-On Name</th>
            <th className="table-head-data_sertb">Add-On Image</th>
            <th className="table-head-data_sertb">Add-On Type</th>

            <th className="table-head-data_sertb">Pricing(INR)</th>
            <th className="table-head-data_sertb">Status</th>
          </tr>
        </thead>

        {slice.map((data) => (
          <tr className="table-content-row_sertb">
            <td
              className="table-content-data1_sertb"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/AddONDetails", {
                  state: { AddOnId: data.AddOnId },
                });
              }}
            >
              {data.AddOnId}
            </td>
            <td className="table-content-data_sertb">{data.addoneName}</td>
            <td className="table-image-data_sertb">
              <img src={data.Serviceicon} />
            </td>
            <td className="table-content-data_sertb">{data.addonetype}</td>

            <td className="table-content-data_sertb">{data.pricing}</td>

            <td className="table-content-data_sertb">
              <ActiveInactiveSelect status={data.status} />
            </td>
          </tr>
        ))}
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />

    </div>
  );
}


