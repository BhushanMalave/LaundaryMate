import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import Login from "../screens/Login/Login";
import ResetPassword from "../screens/ResetPassword/ResetPassword";

function Authentication() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MainScreen />}>
          <Route index element={<DashBoard />} />
          <Route path="ManageOrders" element={<ManageOrders />} />
          <Route path="EmployeeManagement" element={<EmployeeManagement />} />
          <Route path="CustomerManagement" element={<CustomerManagement />} />
          <Route path="CapacitySlotManagement" element={<CapacitySlotMgmt />} />
          <Route path="RoutePlanManagemet" element={<RoutePlanManagemet />} />
          <Route
            path="ServiceBagManagement"
            element={<ServiceBagManagement />}
          />
          <Route path="ServicePlace" element={<ServicePlace />} />

          <Route path="CatalogueManagement" element={<CatalogueManagement />} />
        </Route> */}
        <Route path="/" element={<Login />} />
        <Route path="forgotpassowrd" element={<ForgotPassword />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<>No Page Found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Authentication;
