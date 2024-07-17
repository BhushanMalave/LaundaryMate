import React, { useState } from "react";
import SearchButton from "../../../components/search_button/SearchButton";
import SearchInput2 from "../../../components/search_input_2/SearchInput2";
import { SelectDropDown } from "../../../components/select_drop_down/SelectDropDown";
import { CatalogueCatTable } from "../CatalogueCatTable";
import { CatalogueServiceTable } from "../CatalogueServiceTable";
import "./Services.css";
export const Categories = () => {
  const obj = [
    {
      CategoryId: "CR001",
      CategoryName: "Men",
      status: "Active",


    },
    {
        CategoryId: "CR002",
        CategoryName: "Women",
        status: "Active",
      
   
    },
    {
        CategoryId: "CR003",
        CategoryName: "Kids",
        status: "Active",
      
    
    },
    {
        CategoryId: "CR004",
        CategoryName: "Household",

        status: "Active",
    
    
    },
   
  ];
  const options = [
    {
      label: "All Status",
      value: "all Status",
    },
    {
      label: "Men",
      value: "Men",
    },
    {
      label: "Women",
      value: "Women",
    },
    {
      label: "Kids",
      value: "Kids",
    },
    {
      label: "Household",
      value: "Household",
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
    <CatalogueCatTable data={obj} rowsPerPage={4}/>

    </div>
  );
};
