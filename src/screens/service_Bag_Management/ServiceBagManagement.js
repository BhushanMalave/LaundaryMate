import React from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import SearchButton from "../../components/search_button/SearchButton";
import SearchInput from "../../components/search_input/SearchInput";
import "../service_Bag_Management/ServiceTable";
import Example from "./ServiceTable";
import "./ServiceBagManagement.css";
import ServiceTable from "../service_Bag_Management/ServiceTable";


const ServiceBagManagement = () => {
  const obj = [
    {
      HubId: "HB001",
      HubName: "Jayanagar",
      Bags: "100",
      UploadDate: "15 Feb 2023",
      uploadedBy: "VijayKumar(LM2021)",

    },
    {
      HubId: "HB002",
      HubName: "Gandhinagar",
      Bags: "100",
      UploadDate: "15 Feb 2023",
      uploadedBy: "VijayKumar(LM2021)",
   
    },
    {
      HubId: "HB003",
      HubName: "Rajajinagar",
      Bags: "100",
      UploadDate: "15 Feb 2023",
      uploadedBy: "VijayKumar(LM2021)",
    
    },
    {
      HubId: "HB004",
      HubName: "Ashoknagar",
      Bags: "100",
      UploadDate: "15 Feb 2023",
      uploadedBy: "VijayKumar(LM2021)",
    
    },
    {
      HubId: "HB005",
      HubName: "Banashankari",
      Bags: "100",
      UploadDate: "15 Feb 2023",
      uploadedBy: "VijayKumar(LM2021)",
   
    },
    {
        HubId: "HB006",
        HubName: "Basavanagudi",
        Bags: "100",
        UploadDate: "15 Feb 2023",
        uploadedBy: "VijayKumar(LM2021)",
     
      },
  ];
  return (
    <div className="mainContainer_ser">
        <BreadCrumb title="Service Bag Management" />
      <div className="Container_ser">
        <div style={{marginBottom:'60px'}}>
          <span className="headerText_ser">Service Bag Management</span>
        </div>
          <div className="searchComponents_ser">
            <SearchInput
              placeholderText="Search by Hub ID,Name"
              style={{
                width: "315px",
                height: "48px",
                border: "1px solid #C1C1C1",
                borderRadius: "8px",
                marginRight:'25px',
              }}
            />
            <SearchButton text='Search'/>
          </div>
         <ServiceTable data={obj} rowsPerPage={4}/>
        </div>
     
    </div>
  );
};

export default ServiceBagManagement;
