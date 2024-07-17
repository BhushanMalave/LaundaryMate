import "./Dashboard.css";
import React, { useState } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { SelectDropDown } from "../../components/select_drop_down/SelectDropDown";
import { ApplyButton } from "../../components/buttons/Button";
import { ExportButton } from "../../components/buttons/Button";
import PieChart from "../../components/piechart/PieChart";
import { DateRangePicker } from "react-date-range";
import MultipleDatePicker from "../../components/multiple_date_picker/MultipleDatePicker";

function DashBoard() {
  const options1 = [
    {
      label: "Hub 1 - Jayanagar",
      value: "Hub 1 - Jayanagar",
    },
    {
      label: "Hub 2 - Jayanagar",
      value: "Hub 2 - Jayanagar",
    },
    {
      label: "Hub 3 - Jayanagar",
      value: "Hub 3 - Jayanagar",
    },
    {
      label: "Hub 4 - Jayanagar",
      value: "Hub 4 - Jayanagar",
    },
  ];
  const [select1, setSelect1] = useState({
    value: options1[0].value,
    label: options1[0].label,
  });

  const options2 = [
    {
      label: "Slot 1  :    10AM - 12PM",
      value: "Slot 1  :    10AM - 12PM",
    },
    {
      label: "Slot 2  :    2PM - 4PM",
      value: "Slot 2  :    2PM - 4PM",
    },
    {
      label: "Slot 3  :    6PM - 8PM",
      value: "Slot 3  :    6PM - 8PM",
    },
  ];
  const [select2, setSelect2] = useState({
    value: options2[0].value,
    label: options2[0].label,
  });
  const [select1view, setSelect1view] = useState(false);
  const [select2view, setSelect2view] = useState(false);
  const data1 = [30, 40, 15, 15];
  const data2 = [20, 50, 20, 10],
    subTitle1 = "Quantity",
    subTitle2 = "Order Value",
    showLabel = false,
    colors = ["#4184BB", "#CA65A8", "#61B2B6", "#826DC0"],
    radius = 110,
    hole = 65,
    stroke = 5,
    strokeWidth = 15;

  const handleSelect = (ranges) => {
    console.log(ranges);
  };
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  return (
    <div
      className="dashboard_container"
      onClick={(e) => {
        e.stopPropagation();
        setSelect1view(false);
        setSelect2view(false);
      }}
    >
      <BreadCrumb />
      <div className="dashboard_topheading">
        <div className="dashboard_text">Dashboard</div>
        <div className="dashboard_topheadingin">
          <SelectDropDown
            select={select1}
            view={select1view}
            setView={setSelect1view}
            setSelect={setSelect1}
            options={options1}
            style={{ width: "241px", color: "#181818" }}
          />
          <SelectDropDown
            select={select2}
            view={select2view}
            setView={setSelect2view}
            setSelect={setSelect2}
            options={options2}
            style={{ width: "209px", color: "#181818" }}
          />
          <MultipleDatePicker />
          <ApplyButton text={"Apply"} />
        </div>
        <img src={require("../../images/export.png")} alt="export_button" />
      </div>
      <div className="dashboard_detailsdiv">
        <div className="dashboard_details_comp">
          <div className="dashboard_details_comp_text">No. of Orders</div>
          <div className="dashboard_details_comp_no">120</div>
        </div>
        <div className="dashboard_details_comp">
          <div className="dashboard_details_comp_text">
            Average Order Quantity
          </div>
          <div className="dashboard_details_comp_no">06</div>
        </div>
        <div className="dashboard_details_comp">
          <div className="dashboard_details_comp_text">
            Average Orders per Day
          </div>
          <div className="dashboard_details_comp_no">100</div>
        </div>
        <div className="dashboard_details_comp">
          <div className="dashboard_details_comp_text">
            Average Price per Item
          </div>
          <div className="dashboard_details_comp_no"> ₹0.120</div>
        </div>
        <div className="dashboard_details_comp1">
          <div className="dashboard_details_comp_text">Average Order Value</div>
          <div className="dashboard_details_comp_no">₹200.00</div>
        </div>
        <div className="dashboard_details_comp1">
          <div className="dashboard_details_comp_text">
            Slot Closed (Before Cut-off time)
          </div>
          <div className="dashboard_details_comp_no">120m</div>
        </div>
      </div>
      <div className="dashboard_mapdetailsdiv">
        <div className="dashboard_mapheadtext">
          Services by % Quantity and Order Value
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="dashboard_piedetailsdiv">
            <PieChart
              data={data1}
              subTitle1={subTitle1}
              colors={colors}
              radius={radius}
              hole={hole}
              stroke={stroke}
              strokeWidth={strokeWidth}
              showLabel={showLabel}
            />
            <div className="dashboard_piedetailsindiv">
              <div className="dashboard_piedetailsin">
                <div className="dashboard_piedetailsindot1" />
                <div className="dashboard_piedetailsintext1">Wash + Fold</div>
                <div className="dashboard_piedetailsintext2">{data1[0]}%</div>
              </div>
              <div className="dashboard_piedetailsin">
                <div className="dashboard_piedetailsindot2" />
                <div className="dashboard_piedetailsintext1">Wash + Iron</div>
                <div className="dashboard_piedetailsintext2">{data1[1]}%</div>
              </div>
              <div className="dashboard_piedetailsin">
                <div className="dashboard_piedetailsindot3" />
                <div className="dashboard_piedetailsintext1">Steam Iron</div>
                <div className="dashboard_piedetailsintext2">{data1[2]}%</div>
              </div>
              <div className="dashboard_piedetailsin">
                <div className="dashboard_piedetailsindot4" />
                <div className="dashboard_piedetailsintext1">
                  Dry clean + Iron
                </div>
                <div className="dashboard_piedetailsintext2">{data1[3]}%</div>
              </div>
            </div>
          </div>
          <div className="dashboard_piedetailsdiv">
            <PieChart
              data={data2}
              subTitle1={subTitle2}
              colors={colors}
              radius={radius}
              hole={hole}
              stroke={stroke}
              strokeWidth={strokeWidth}
              showLabel={showLabel}
            />
            <div className="dashboard_piedetailsindiv">
              <div className="dashboard_piedetailsin">
                <div className="dashboard_piedetailsindot1" />
                <div className="dashboard_piedetailsintext1">Wash + Fold</div>
                <div className="dashboard_piedetailsintext2">{data2[0]}%</div>
              </div>
              <div className="dashboard_piedetailsin">
                <div className="dashboard_piedetailsindot2" />
                <div className="dashboard_piedetailsintext1">Wash + Iron</div>
                <div className="dashboard_piedetailsintext2">{data2[1]}%</div>
              </div>
              <div className="dashboard_piedetailsin">
                <div className="dashboard_piedetailsindot3" />
                <div className="dashboard_piedetailsintext1">Steam Iron</div>
                <div className="dashboard_piedetailsintext2">{data2[2]}%</div>
              </div>
              <div className="dashboard_piedetailsin">
                <div className="dashboard_piedetailsindot4" />
                <div className="dashboard_piedetailsintext1">
                  Dry clean + Iron
                </div>
                <div className="dashboard_piedetailsintext2">{data2[3]}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
