import React, { useState } from "react";
import "./CpuCapacityDetails.css";
import BreadCrumb from "../../../../components/breadcrumb/BreadCrumb";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";
import { SelectDropDown } from "../../../../components/select_drop_down/SelectDropDown";
import CpuCapacityDetailsTable from "./CpuCapacityDetailsTable";
import { useNavigate } from "react-router-dom";

export const CpuCapacityDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const options = [
    {
      label: "2023",
      value: "2023",
    },
    {
      label: "2022",
      value: "2022",
    },
    {
      label: "2021",
      value: "2021",
    },
  ];
  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });

  const obj = [
    {
      duration: "May 2022",
      uploadDate: "24 Apr 2022",
      uploadedBy: "Vijay Kumar (LM01816)",
    },
    {
      duration: "April 2022",
      uploadDate: "24 Mar 2022",
      uploadedBy: "Vijay Kumar (LM01816)",
    },
    {
      duration: "March 2022",
      uploadDate: "24 feb 2022",
      uploadedBy: "Krishnamurty Shanbhag (LM02212)",
    },
    {
      duration: "February 2022",
      uploadDate: "24 Jan 2022",
      uploadedBy: "Vijay Kumar (LM01816)",
    },
    {
      duration: "Janauary 2022",
      uploadDate: "24 Dec 2022",
      uploadedBy: "Krishnamurty Shanbhag (LM02212)",
    },
  ];

  const [cpuCapacityDetailData, setcpuCapacityDetailData] = useState(obj);
  const [uploadState, setUploadState] = useState(true);
  const [newUpdateState, setNewUpdateState] = useState(false);
  const [selectview, setSelectview] = useState(false);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setSelectview(false);
      }}
    >
      <BreadCrumb title={state?.cpuId}>
        <Link
          underline="none"
          color="#0074BC"
          href="/CapacitySlotManagement"
          className="bread-crumb-link"
        >
          Capacity and Slot Management
        </Link>
      </BreadCrumb>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "28px 45px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img
            src={require("../../../../images/inc_back.png")}
            alt="back_icon"
            onClick={() => {
              navigate("/CapacitySlotManagement");
            }}
            height="15px"
            width="25px"
          />
          <div
            style={{
              fontFamily: "Bold",
              fontStyle: "normal",
              fontSize: "32px",
              lineHeight: " 40px",
              color: "#181818",
              marginLeft: "10px",
            }}
          >
            {state?.cpuId}
          </div>
        </div>
        <img
          src={require("../../../../images/UploadNew.png")}
          alt="back_icon"
          onClick={() => {
            setNewUpdateState(true);
          }}
        />
      </div>
      <SelectDropDown
        select={select}
        view={selectview}
        setView={setSelectview}
        setSelect={setSelect}
        options={options}
        style={{
          width: "125px",
          marginLeft: "45px",
          fontFamily: "Regular",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "18px",
          color: "#808080",
        }}
      />
      <div style={{ padding: "10px 45px" }}>
        <CpuCapacityDetailsTable
          tableHeader={[
            `Duration`,
            "Upload Date",
            "Uploaded By",
            "    ",
            "   ",
          ]}
          data={cpuCapacityDetailData}
          rowsPerPage={5}
          cpuId={state?.cpuId}
        />
      </div>
      {newUpdateState && (
        <div className="cpuUpdate_main">
          <div className="cpuUpdate_maindiv">
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
                Update CPU Capacity
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
              Please select the file containing the CPU capcaity to be uploaded
            </div>
            {uploadState ? (
              <>
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
                        cpu_files.xlsx
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
                        cpu_files.xlsx
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
