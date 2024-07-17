import React, { useEffect, useState } from "react";
import { NavLink, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import "./CatalogueManagement.css";
import {AddOnes} from "./tabs/AddOnes";
import { Categories } from "./tabs/Categories";
import {Items} from "./tabs/Items";
import { Services } from "./tabs/Services";
import AddItem from "./tabs/AddItem";
const CatalogueManagement = () => {


  const navigate = useNavigate()
  const [active, setActive] = useState(false);
  const [services, setServices] = useState(true);
  const [category, setCategory] = useState(false);
  const [items, setItems] = useState(false);
  const [addones, setAddones] = useState(false);

  const handleActive = () => {
    if (window.location.pathname === "/CatalogueManagement") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    handleActive();
  }, []);
  

  return (
    <div className="maincontainer_cat">
      <BreadCrumb title="Catalogue Management" />
      <div className="Container_cat">
        {services == true && (category || items || addones == false) ? (
          <div className="Header_cat">
            <span className="headername_cat">Catalogue Management</span>
            <img src={require("../../images/exportServices.png")}></img>
          </div>
        ) : (
          <></>
        )}

        {category == true && (services || items || addones == false) ? (
          <div className="Header_cat">
            <span className="headername_cat">Catalogue Management</span>
            <img src={require("../../images/category.png")}></img>
          </div>
        ) : (
          <></>
        )}

      {items == true && (services || category || addones == false) ? (
          <div className="Header_cat">
            <span className="headername_cat">Catalogue Management</span>
            <div>
            <img src={require("../../images/exportItem.png")}></img>
            <img src={require("../../images/AddItem.png")} style={{marginLeft:'25px'}} onClick={()=>{navigate('/AddItem')}}></img>

            </div>
          </div>
        ) : (
          <></>
        )}

    {addones == true && (services || category || items == false) ? (
          <div className="Header_cat">
            <span className="headername_cat">Catalogue Management</span>
            <div>
            <img src={require("../../images/addOneExport.png")}></img>
            <img src={require("../../images/addAddone.png")} style={{marginLeft:'25px'}} onClick={()=>{navigate('/AddAddones')}}></img>

            </div>
          </div>
        ) : (
          <></>
        )}

        <nav className="top-bar-container_cat">
          <div className="navlink-container_cat">
            <NavLink
              className={({ isActive }) =>
                active ? "active-link" : "inactive-link"
              }
              // id="deliveryvehicle"
              to="/CatalogueManagement"
              onClick={() => {
                setActive(true);
                setServices(true)
                setCategory(false)
                setItems(false)
                setAddones(false)
                
              }}
            >
              Services
              <p className="number-count">4</p>
            </NavLink>
          </div>
          <div className="navlink-container_cat">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              to="categories"
              onClick={() => {
                setActive(false);
                setServices(false)
                setCategory(true);
                setItems(false)
                setAddones(false)
              }}
            >
              Categories
              <p className="number-count">4</p>
            </NavLink>
          </div>
          <div className="navlink-container">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              to="items"
              onClick={() => {
                setActive(false);
                setServices(false)
                setCategory(false);
                setItems(true)
                setAddones(false)
              }}
            >
              Items
              <p className="number-count_cat">1</p>
            </NavLink>
          </div>
          <div className="navlink-container_cat">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              to="AddOnes"
              onClick={() => {
                setActive(false);
                setServices(false)
                setCategory(false);
                setItems(false)
                setAddones(true)
              }}
            >
              Add Ones
              <p className="number-count_cat">1</p>
            </NavLink>
          </div>
        </nav>

        <div className="content-container_cat">
          <Routes>
            <Route index element={<Services />} />
            <Route path="categories" element={<Categories />} />
            <Route path="items" element={<Items />} />
            <Route path="AddOnes" element={<AddOnes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default CatalogueManagement;
