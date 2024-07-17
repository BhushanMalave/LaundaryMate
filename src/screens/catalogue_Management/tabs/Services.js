import React, { useState } from "react";
import SearchButton from "../../../components/search_button/SearchButton";
import SearchInput2 from "../../../components/search_input_2/SearchInput2";
import { SelectDropDown } from "../../../components/select_drop_down/SelectDropDown";
import { CatalogueServiceTable } from "../CatalogueServiceTable";
import "./Services.css";
export const Services = () => {
  const obj = [
    {
      ServiceId: "SR001",
      ServiceName: "Wash + Fold",
      Serviceicon: require('../../../images/wash.png'),
      status: "Active",


    },
    {
        ServiceId: "SR002",
        ServiceName: "Wash + Iron",
        Serviceicon: require('../../../images/iron.png'),
        status: "Active",
      
   
    },
    {
        ServiceId: "SR003",
        ServiceName: "Steam Iron",
        Serviceicon: require('../../../images/steamiron.png'),
        status: "inactive",
      
    
    },
    {
        ServiceId: "SR004",
        ServiceName: "Dry Clean + Iron",
        Serviceicon: require('../../../images/dryclean.png'),
        status: "Active",
    
    
    },
   
  ];
  const options = [
    {
      label: "All Status",
      value: "all Status",
    },
    {
      label: "Wash + Fold",
      value: "wash+fold",
    },
    {
      label: "Wash + Iron",
      value: "wash+iron",
    },
    {
      label: "Steam Iron",
      value: "steamIron",
    },
    {
      label: "DryClean + Iron",
      value: "dryclean+iron",
    },
  ];
  const [select, setSelect] = useState({
    value: options[0].value,
    label: options[0].label,
  });
  const [selectView, setSelectView] = useState(false);

  return (
    <div className="container_sertb"
    onClick={(e) => {
      e.stopPropagation();
      setSelectView(false);
    }}
    >
      <div className="innercontainer_sertb">
        <SearchInput2
          placeholderText="Search by service"
          style={{ width: "315px", height: "44px" }}
        />
        <SelectDropDown
          select={select}
          setSelect={setSelect}
          options={options}
          view={selectView}
          setView={setSelectView}
          style={{ width: "190px", margin: "0 15px 0 15px" }}
        />
        <SearchButton text="Search" />
      </div>
    <CatalogueServiceTable data={obj} rowsPerPage={4}/>

    </div>
  );
};
