import React from "react";
import "../../screens/customer_management/WalletStatementModal.css";

import { useNavigate } from "react-router-dom";

export const WalletStatementModal = ({ toggle, setToggle }) => {
  const divStyle = {
    display: toggle ? "block" : "none",
  };
  function closeModal(e) {
    e.stopPropagation();
    setToggle(false);
  }

  const obj = [
    {
      orderid: "Paid to Order #BW34567",
      orderdate: "12-05-2022, 5:05pm",
      orderdetails: "Debited from wallet for the order. ",
      transaction: "debited",
    },
    {
      orderid: "Added to Wallet #Refund099872",
      orderdate: "10-05-2022, 2:04pm",
      orderdetails:
        "Refund amount credited to wallet for the cancelled order. ",
      transaction: "credited",
    },
    {
      orderid: "Paid to Order #BW32634",
      orderdate: "09-05-2022, 1:00pm",
      orderdetails: "Debited from wallet for the order.  ",
      transaction: "debited",
    },
    {
      orderid: "Paid to Order #BW63572",
      orderdate: "12-05-2022, 5:05pm",
      orderdetails: "Debited from wallet for the order. ",
      transaction: "debited",
    },
    {
      orderid: "Paid to Order #BW13568",
      orderdate: "02-05-2022, 10:05am",
      orderdetails: "Debited from wallet for the order.  ",
      transaction: "debited",
    },
    {
      orderid: "Paid to Order #BW32634",
      orderdate: "09-05-2022, 1:00pm",
      orderdetails: "Debited from wallet for the order.  ",
      transaction: "debited",
    },
    {
      orderid: "Paid to Order #BW63572",
      orderdate: "12-05-2022, 5:05pm",
      orderdetails: "Debited from wallet for the order. ",
      transaction: "debited",
    },
    {
      orderid: "Paid to Order #BW32634",
      orderdate: "09-05-2022, 1:00pm",
      orderdetails: "Debited from wallet for the order.  ",
      transaction: "debited",
    },
    {
      orderid: "Paid to Order #BW63572",
      orderdate: "12-05-2022, 5:05pm",
      orderdetails: "Debited from wallet for the order. ",
      transaction: "debited",
    },
  ];
  return (
    <div className="wallet-modal" onClick={closeModal} style={divStyle}>
      <div
        className="wallet-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="wallet-modal-header">
          <span className="wallet-modaltext">Wallet Statement</span>
          <span className="wallet-close" onClick={closeModal}>
            <img
              className="wallet-close-button"
              src={require("../../images/wallet_close.png")}
              alt=""
            />
          </span>
        </div>
        <div className="total-wallet-section">
          <span className="total-wallet-heading">Total Wallet Balance</span>
          <span className="total-wallet-heading">₹ 2,000.00</span>
        </div>
        <div className="wallet-modal-innercontent">
          <table className="wallet-table-containermodal">
            <thead>
              <tr className="wallet-table-head-rowmodal">
                <th className="wallet-table-head-data1modal">Transactions</th>
                <th className="wallet-table-head-datamodal">Amount</th>
              </tr>
            </thead>

            {obj.map((data) => (
              <>
                <div className="wallet-table-content-rowmodal">
                  <div className="wallet-table-content-data1modal">
                    <p className="wallet-table-heading1">{data.orderid}</p>
                    <p className="wallet-table-heading2">{data.orderdate}</p>
                    <p className="wallet-table-heading3">{data.orderdetails}</p>
                  </div>
                  <div className="wallet-table-content-datamodal">
                    { data.transaction==="debited" ?  <p className="wallet-table-rupees">- ₹ 1000.00</p> : <p className="wallet-table-rupees-credited">+ ₹ 1000.00</p>}
                  </div>

                  {/* <td className="table-image-data">
              <img src={require("../../../images/edit.png")} alt="edit" />
              <img src={require("../../../images/delete.png")} alt="edit" />
            </td> */}
                </div>
              </>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
