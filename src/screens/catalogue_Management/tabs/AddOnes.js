import React, { useState } from "react";
import SearchButton from "../../../components/search_button/SearchButton";
import SearchInput2 from "../../../components/search_input_2/SearchInput2";
import { SelectDropDown } from "../../../components/select_drop_down/SelectDropDown";
import { CatalogueCatTable } from "../CatalogueCatTable";
import { CatalogueItemTable } from "../CatalogueItemTable";
import { CatalogueServiceTable } from "../CatalogueServiceTable";
import {CatalogueAddOnesTable} from '../CatalogueAddOnesTable'
import "./Services.css";
export const AddOnes = () => {
  const obj = [
    {
      AddOnId: "AD001",
      addoneName: "Single Pack",
      Serviceicon: require('../../../images/food-pack.png'),
      addonetype:'Packaging',

      pricing:'₹ 10.00',
      status: "Active",


    },
    {
        AddOnId: "AD002",
        addoneName: "Hanger",
        Serviceicon: require('../../../images/towel-hanger.png'),
        addonetype:'Packaging',
    
        pricing:'₹ 10.00',
        status: "Active",
      
   
    },
    {
        AddOnId: "AD003",
        addoneName: "Starch",
        Serviceicon: require('../../../images/fried-rice.png'),
        addonetype:'Extras',

        pricing:'₹ 10.00',
        status: "Active",
      
    
    },
    {
        AddOnId: "AD004",
        addoneName: "Multipack",
        Serviceicon: require('../../../images/multipack.png'),
        addonetype:'Packaging',
   
        pricing:'₹ 10.00',
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
          placeholderText="Search by Add-On ID, Add-On Name"
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
    <CatalogueAddOnesTable data={obj} rowsPerPage={4}/>

    </div>
  );
};
