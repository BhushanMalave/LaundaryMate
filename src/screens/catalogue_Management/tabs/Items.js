import React, { useState } from "react";
import SearchButton from "../../../components/search_button/SearchButton";
import SearchInput2 from "../../../components/search_input_2/SearchInput2";
import { SelectDropDown } from "../../../components/select_drop_down/SelectDropDown";
import { CatalogueCatTable } from "../CatalogueCatTable";
import { CatalogueItemTable } from "../CatalogueItemTable";
import { CatalogueServiceTable } from "../CatalogueServiceTable";
import "./Services.css";
export const Items = () => {
  const obj = [
    {
      ServiceId: "IT001",
      ServiceName: "Shirt",
      Serviceicon: require("../../../images/menshirtpng.png"),
      category: "Men",
      service: "Wash+Fold",
      pricing: "₹ 10.00",
      status: "Active",
    },
    {
      ServiceId: "IT002",
      ServiceName: "Shirt",
      Serviceicon: require("../../../images/womenshirt.png"),
      category: "Women",
      service: "Wash+Fold",
      pricing: "₹ 10.00",
      status: "Active",
    },
    {
      ServiceId: "IT003",
      ServiceName: "T-Shirt",
      Serviceicon: require("../../../images/kidsteespng.png"),
      category: "Kids",
      service: "Wash+Fold",
      pricing: "₹ 10.00",
      status: "Active",
    },
    {
      ServiceId: "IT004",
      ServiceName: "T-Shirt",
      Serviceicon: require("../../../images/mentees.png"),
      category: "Men",
      service: "Wash+Fold",
      pricing: "₹ 10.00",
      status: "Active",
    },
  ];
  const services = [
    {
      label: "All Services",
      value: "all Services",
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
    value: services[0].value,
    label: services[0].label,
  });

  const category = [
    {
      label: "All Category",
      value: "all Category",
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
  const [item, setItem] = useState({
    value: category[0].value,
    label: category[0].label,
  });
  const [selectView, setSelectView] = useState(false);
  const [selectView1, setSelectView1] = useState(false);


  return (
    <div className="container_sertb"
    onClick={(e) => {
      e.stopPropagation();
      setSelectView(false);
      setSelectView1(false);

     
    }}
    >
      <div className="innercontainer_sertb">
        <SearchInput2
          placeholderText="Search by Item ID, Item Name"
          style={{ width: "315px", height: "44px" }}
        />
        <SelectDropDown
          select={select}
          setSelect={setSelect}
          options={services}
          view={selectView}
          setView={setSelectView}
          style={{ width: "190px", margin: "0 15px 0 15px" }}
        />

        <SelectDropDown
          select={item}
          setSelect={setItem}
          options={category}
          view={selectView1}
          setView={setSelectView1}
          style={{ width: "190px", margin: "0 15px 0 15px" }}
        />
        <SearchButton text="Search" />
      </div>
    <CatalogueItemTable data={obj} rowsPerPage={4}/>
    
    </div>
  );
};
