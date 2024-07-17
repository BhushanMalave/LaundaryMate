import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerTrackItem from "../customer_management/CustomerTrackItem";

const ManageOrderDressTable = () => {
  const navigate = useNavigate();
  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show2");
  }
  function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show3");
  }
  const [wash, setWash] = useState(false);
  const [steamshow, setSteamshow] = useState(false);
  const [dryshow, setDryshow] = useState(false);

  const [trackItem, setTrackItem] = useState(false);

  const menorders = [
    {
      itemid: "SH00M001",
      itemname: "Shirt1*",
      itemimage: "xxx",
      tagid: "-",
      cpustatus: "Receivng",
      addons: "Hanger, Starch",
      qty: "1",
      rate: "₹ 40.00",
      action: "Track Item",
    },
    {
      itemid: "SH00M001",
      itemname: "Shirt2",
      itemimage: "xxx",
      tagid: "-",
      cpustatus: "Tagging",
      addons: "-",
      qty: "1",
      rate: "₹ 40.00",
      action: "Track Item",
    },
    {
      itemid: "SH00M001",
      itemname: "Shirt3",
      itemimage: "xxx",
      tagid: "WT002201",
      cpustatus: "Inspecting",
      addons: "-",
      qty: "1",
      rate: "₹ 40.00",
      action: "Track Item",
    },
  ];
  const womenorders = [
    {
      itemid: "DR00W001",
      itemname: "Dress",
      itemimage: "xxx",
      tagid: "-",
      cpustatus: "Receivng",
      addons: "Hanger, Starch",
      qty: "1",
      rate: "₹ 40.00",
      action: "Track Item",
    },
    {
      itemid: "KU00W001",
      itemname: "Kurti 1*",
      itemimage: "xxx",
      tagid: "WT002201",
      cpustatus: "Tagging",
      addons: "-",
      qty: "1",
      rate: "₹ 40.00",
      action: "Track Item",
    },
  ];
  return (
    <>
      <div className="wash-fold-container">
        <div className="wash-fold-left-content">
          <p className="wash-fold-heading">Wash + Fold</p>
          <p className="wash-fold-item-number">
            <span id="wash-fold-number">5</span>
            {"   "}items &nbsp;
          </p>
          <p className="no-of-bags">
            No. of Bags <span id="no-of-bags-number"> &nbsp; &nbsp;2</span>
          </p>
          <img
            className="i"
            src={require("../../images/i.png")}
            alt=""
            onClick={() => myFunction()}
          />

          <div className="popup">
            <p className="popuptext" id="myPopup">
              Bag0001 <p>Bag0002</p>
            </p>
          </div>
        </div>
        <div className="wash-fold-right-content">
          <p className="wash-fold-money">₹ 240.00</p>

          <img
            className={!wash ? "chevron" : "chevronup"}
            src={require("../../images/chevron.png")}
            alt=""
            onClick={() => {
              setWash(!wash);
            }}
          />
        </div>
      </div>
      {wash && (
        <>
          <div className="wash-fold-table1">
            <table className="wash-fold-table-container">
              <thead>
                <tr className="wash-fold-table-head-row">
                  <th className="wash-fold-table-head-data1">Item ID</th>
                  <th className="wash-fold-table-head-data">
                    Item Name <span className="wash-fold-men-women">(Men)</span>
                  </th>
                  <th className="wash-fold-table-head-data">Item Image</th>
                  <th className="wash-fold-table-head-data">Tag ID</th>
                  <th className="wash-fold-table-head-data">CPU Status</th>
                  <th className="wash-fold-table-head-data">Add-ons</th>
                  <th className="wash-fold-table-head-data"> Qty</th>
                  <th className="wash-fold-table-head-data">Rate</th>
                  <th className="wash-fold-table-head-data">Action</th>
                </tr>
              </thead>

              {menorders.map((data) => (
                <tr className="wash-fold-table-content-row">
                  <td
                    className="wash-fold-table-content-data"
                    onClick={() => navigate("/OrderDetails")}
                  >
                    {data.itemid}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemname}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemimage}
                  </td>
                  <td className="wash-fold-table-content-data">{data.tagid}</td>
                  <td className="wash-fold-table-content-data">
                    {data.cpustatus}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.addons}
                  </td>
                  <td className="wash-fold-table-content-data">{data.qty}</td>
                  <td className="wash-fold-table-content-data">{data.rate}</td>
                  <td
                    className="wash-fold-table-content-data1"
                    onClick={() => setTrackItem(true)}
                  >
                    {data.action}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="wash-fold-table1">
            <table className="wash-fold-table-container">
              <thead>
                <tr className="wash-fold-table-head-row">
                  <th className="wash-fold-table-head-data1">Item ID</th>
                  <th className="wash-fold-table-head-data2">
                    Item Name{" "}
                    <span className="wash-fold-men-women">(women)</span>
                  </th>
                  <th className="wash-fold-table-head-data">Item Image</th>
                  <th className="wash-fold-table-head-data">Tag ID</th>
                  <th className="wash-fold-table-head-data">CPU Status</th>
                  <th className="wash-fold-table-head-data">Add-ons</th>
                  <th className="wash-fold-table-head-data"> Qty</th>
                  <th className="wash-fold-table-head-data">Rate</th>
                  <th className="wash-fold-table-head-data">Action</th>
                </tr>
              </thead>

              {womenorders.map((data) => (
                <tr className="wash-fold-table-content-row">
                  <td
                    className="wash-fold-table-content-data"
                    onClick={() => navigate("/OrderDetails")}
                  >
                    {data.itemid}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemname}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemimage}
                  </td>
                  <td className="wash-fold-table-content-data">{data.tagid}</td>
                  <td className="wash-fold-table-content-data">
                    {data.cpustatus}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.addons}
                  </td>
                  <td className="wash-fold-table-content-data">{data.qty}</td>
                  <td className="wash-fold-table-content-data">{data.rate}</td>
                  <td className="wash-fold-table-content-data1">
                    {data.action}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </>
      )}
       <div className="wash-fold-container">
        <div className="wash-fold-left-content">
          <p className="wash-fold-heading">Steam Iron</p>
          <p className="wash-fold-item-number">
            <span id="wash-fold-number">8</span>
            {"   "}items &nbsp;
          </p>
          <p className="no-of-bags">
            No. of Bags <span id="no-of-bags-number"> &nbsp; &nbsp;2</span>
          </p>
          <img
            className="i"
            src={require("../../images/i.png")}
            alt=""
            onClick={() => myFunction2()}
          />

          <div className="popup2">
            <p className="popuptext2" id="myPopup2">
              Bag0001 <p>Bag0002</p>
            </p>
          </div>
        </div>
        <div className="wash-fold-right-content">
          <p className="wash-fold-money">₹ 600.00</p>

          <img
            className={!steamshow ? "chevron" : "chevronup"}
            src={require("../../images/chevron.png")}
            alt=""
            onClick={() => {
              setSteamshow(!steamshow);
            }}
          />
        </div>
      </div>
      {steamshow && (
        <>
          <div className="wash-fold-table1">
            <table className="wash-fold-table-container">
              <thead>
                <tr className="wash-fold-table-head-row">
                  <th className="wash-fold-table-head-data1">Item ID</th>
                  <th className="wash-fold-table-head-data">
                    Item Name <span className="wash-fold-men-women">(Men)</span>
                  </th>
                  <th className="wash-fold-table-head-data">Item Image</th>
                  <th className="wash-fold-table-head-data">Tag ID</th>
                  <th className="wash-fold-table-head-data">CPU Status</th>
                  <th className="wash-fold-table-head-data">Add-ons</th>
                  <th className="wash-fold-table-head-data"> Qty</th>
                  <th className="wash-fold-table-head-data">Rate</th>
                  <th className="wash-fold-table-head-data">Action</th>
                </tr>
              </thead>

              {menorders.map((data) => (
                <tr className="wash-fold-table-content-row">
                  <td
                    className="wash-fold-table-content-data"
                    onClick={() => navigate("/OrderDetails")}
                  >
                    {data.itemid}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemname}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemimage}
                  </td>
                  <td className="wash-fold-table-content-data">{data.tagid}</td>
                  <td className="wash-fold-table-content-data">
                    {data.cpustatus}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.addons}
                  </td>
                  <td className="wash-fold-table-content-data">{data.qty}</td>
                  <td className="wash-fold-table-content-data">{data.rate}</td>
                  <td className="wash-fold-table-content-data1">
                    {data.action}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="wash-fold-table1">
            <table className="wash-fold-table-container">
              <thead>
                <tr className="wash-fold-table-head-row">
                  <th className="wash-fold-table-head-data1">Item ID</th>
                  <th className="wash-fold-table-head-data2">
                    Item Name{" "}
                    <span className="wash-fold-men-women">(women)</span>
                  </th>
                  <th className="wash-fold-table-head-data">Item Image</th>
                  <th className="wash-fold-table-head-data">Tag ID</th>
                  <th className="wash-fold-table-head-data">CPU Status</th>
                  <th className="wash-fold-table-head-data">Add-ons</th>
                  <th className="wash-fold-table-head-data"> Qty</th>
                  <th className="wash-fold-table-head-data">Rate</th>
                  <th className="wash-fold-table-head-data">Action</th>
                </tr>
              </thead>

              {womenorders.map((data) => (
                <tr className="wash-fold-table-content-row">
                  <td
                    className="wash-fold-table-content-data"
                    onClick={() => navigate("/OrderDetails")}
                  >
                    {data.itemid}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemname}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemimage}
                  </td>
                  <td className="wash-fold-table-content-data">{data.tagid}</td>
                  <td className="wash-fold-table-content-data">
                    {data.cpustatus}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.addons}
                  </td>
                  <td className="wash-fold-table-content-data">{data.qty}</td>
                  <td className="wash-fold-table-content-data">{data.rate}</td>
                  <td className="wash-fold-table-content-data1">
                    {data.action}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </>
      )}
      <div className="wash-fold-container">
        <div className="wash-fold-left-content">
          <p className="wash-fold-heading">Dry Clean</p>
          <p className="wash-fold-item-number">
            <span id="wash-fold-number">3</span>
            {"   "}items &nbsp;
          </p>
          <p className="no-of-bags">
            No. of Bags <span id="no-of-bags-number"> &nbsp; &nbsp;2</span>
          </p>
          <img
            className="i"
            src={require("../../images/i.png")}
            alt=""
            onClick={() => myFunction3()}
          />

          <div className="popup3">
            <p className="popuptext3" id="myPopup3">
              Bag0001 <p>Bag0002</p>
            </p>
          </div>
        </div>
        <div className="wash-fold-right-content">
          <p className="wash-fold-money">₹ 240.00</p>

          <img
            className={!dryshow ? "chevron" : "chevronup"}
            src={require("../../images/chevron.png")}
            alt=""
            onClick={() => {
              setDryshow(!dryshow);
            }}
          />
        </div>
      </div>
      {dryshow && (
        <>
          <div className="wash-fold-table1">
            <table className="wash-fold-table-container">
              <thead>
                <tr className="wash-fold-table-head-row">
                  <th className="wash-fold-table-head-data1">Item ID</th>
                  <th className="wash-fold-table-head-data">
                    Item Name <span className="wash-fold-men-women">(Men)</span>
                  </th>
                  <th className="wash-fold-table-head-data">Item Image</th>
                  <th className="wash-fold-table-head-data">Tag ID</th>
                  <th className="wash-fold-table-head-data">CPU Status</th>
                  <th className="wash-fold-table-head-data">Add-ons</th>
                  <th className="wash-fold-table-head-data"> Qty</th>
                  <th className="wash-fold-table-head-data">Rate</th>
                  <th className="wash-fold-table-head-data">Action</th>
                </tr>
              </thead>

              {menorders.map((data) => (
                <tr className="wash-fold-table-content-row">
                  <td
                    className="wash-fold-table-content-data"
                    onClick={() => navigate("/OrderDetails")}
                  >
                    {data.itemid}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemname}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemimage}
                  </td>
                  <td className="wash-fold-table-content-data">{data.tagid}</td>
                  <td className="wash-fold-table-content-data">
                    {data.cpustatus}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.addons}
                  </td>
                  <td className="wash-fold-table-content-data">{data.qty}</td>
                  <td className="wash-fold-table-content-data">{data.rate}</td>
                  <td className="wash-fold-table-content-data1">
                    {data.action}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="wash-fold-table1">
            <table className="wash-fold-table-container">
              <thead>
                <tr className="wash-fold-table-head-row">
                  <th className="wash-fold-table-head-data1">Item ID</th>
                  <th className="wash-fold-table-head-data2">
                    Item Name{" "}
                    <span className="wash-fold-men-women">(women)</span>
                  </th>
                  <th className="wash-fold-table-head-data">Item Image</th>
                  <th className="wash-fold-table-head-data">Tag ID</th>
                  <th className="wash-fold-table-head-data">CPU Status</th>
                  <th className="wash-fold-table-head-data">Add-ons</th>
                  <th className="wash-fold-table-head-data"> Qty</th>
                  <th className="wash-fold-table-head-data">Rate</th>
                  <th className="wash-fold-table-head-data">Action</th>
                </tr>
              </thead>

              {womenorders.map((data) => (
                <tr className="wash-fold-table-content-row">
                  <td
                    className="wash-fold-table-content-data"
                    onClick={() => navigate("/OrderDetails")}
                  >
                    {data.itemid}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemname}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.itemimage}
                  </td>
                  <td className="wash-fold-table-content-data">{data.tagid}</td>
                  <td className="wash-fold-table-content-data">
                    {data.cpustatus}
                  </td>
                  <td className="wash-fold-table-content-data">
                    {data.addons}
                  </td>
                  <td className="wash-fold-table-content-data">{data.qty}</td>
                  <td className="wash-fold-table-content-data">{data.rate}</td>
                  <td className="wash-fold-table-content-data1">
                    {data.action}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </>
      )}
      <CustomerTrackItem trackItem={trackItem} setTrackItem={setTrackItem}/>
    </>
  );
};

export default ManageOrderDressTable;
