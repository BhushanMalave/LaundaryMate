import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import MainScreen from "../screens/mainscreen/MainScreen";
import DashBoard from "../screens/dashboard/DashBoard";
import ManageOrders from "../screens/manager_orders/ManageOrders";
import LocationManagement from "../screens/loaction_management/LocationManagement";
import VehicleDriverMgmt from "../screens/vehicle_driver_management/VehicleDriverMgmt";
import EmployeeManagement from "../screens/employee_management/EmployeeManagement";
import CustomerManagement from "../screens/customer_management/CustomerManagement";
import CapacitySlotMgmt from "../screens/capacity_slot_management/CapacitySlotMgmt";
import RoutePlanManagemet from "../screens/route_plan_management/RoutePlanManagemet";
import ServiceBagManagement from "../screens/service_Bag_Management/ServiceBagManagement";
import CatalogueManagement from "../screens/catalogue_Management/CatalogueManagement";
import LocationCountry from "../screens/loaction_management/LocationCountry";
import LocationState from "../screens/loaction_management/LocationState";
import LocationCity from "../screens/loaction_management/LocationCity";
import LocationHubs from "../screens/loaction_management/LocationHubs";
import LocationWorkStation from "../screens/loaction_management/LocationWorkStation";
import LocationCPU from "../screens/loaction_management/LocationCPU";
import LocationProcessingLine from "../screens/loaction_management/LocationProcessingLine";
import CustomerDetails from "../screens/customer_management/CustomerDetails";
import ServicePlace from "../screens/service_Bag_Management/ServicePlace";
import EmployeeDetails from "../screens/employee_management/EmployeeDetails";
import VehicleDetails from "../screens/vehicle_driver_management/VehicleDetails";
import { CpuCapacityDeatilsInfo } from "../screens/capacity_slot_management/tabs/cpucapacitydetails/CpuCapacityDeatilsInfo";
import { CpuCapacityDetails } from "../screens/capacity_slot_management/tabs/cpucapacitydetails/CpuCapacityDetails";
import { HubCapacityDetails } from "../screens/capacity_slot_management/tabs/hubcapacitydetails/HubCapacityDetails";
import { HubCapacityDetailsInfo } from "../screens/capacity_slot_management/tabs/hubcapacitydetails/HubCapacityDetailsInfo";
import AddNewDeliveryVehicle from "../screens/vehicle_driver_management/AddNewDeliveryVehicle";
import RoutePlanDetails from "../screens/route_plan_management/RoutePlanDetails";
import DriverDetailsPage from "../screens/vehicle_driver_management/DriverDetailsPage";
import OrderDetails from "../screens/customer_management/OrderDetails";
import AddItem from "../screens/catalogue_Management/tabs/AddItem";
import { ItemDetails } from "../screens/catalogue_Management/tabs/ItemDetails";
import { ItemDetailsEdit } from "../screens/catalogue_Management/tabs/ItemDetailsEdit";
import { AddOnDetailsEdit } from "../screens/catalogue_Management/tabs/AddOnDetailsEdit";
import { AddAddones } from "../screens/catalogue_Management/tabs/AddAddones";
import AddOnDetails from "../screens/catalogue_Management/tabs/AddOnDetails";
import ManageOrderDetails from "../screens/manager_orders/ManageOrderDetails";

export const Nav = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />}>
          <Route index element={<DashBoard />} />
          <Route path="ManageOrders" element={<ManageOrders />} />
          <Route path="ManageOrderDetails" element={<ManageOrderDetails />} />

          <Route path="LocationManagement/*" element={<LocationManagement />}>
            <Route index element={<LocationCountry />} />
            <Route path="LocationState" element={<LocationState />} />
            <Route path="LocationCity" element={<LocationCity />} />
            <Route path="LocationCPU" element={<LocationCPU />} />
            <Route path="LocationHubs" element={<LocationHubs />} />
            <Route
              path="LocationProcessingline"
              element={<LocationProcessingLine />}
            />
            <Route
              path="LocationWorkStation"
              element={<LocationWorkStation />}
            />
          </Route>
          <Route
            path="VehicleandDriverManagement/*"
            element={<VehicleDriverMgmt />}
          />
          <Route path="/vehicledetails/*" element={<VehicleDetails />} />
          <Route path="/driverdetails/*" element={<DriverDetailsPage />} />
          <Route
            path="/addnewdeliveryvehicle"
            element={<AddNewDeliveryVehicle />}
          />

          <Route path="EmployeeManagement" element={<EmployeeManagement />} />
          <Route path="EmployeeDetails" element={<EmployeeDetails />} />
          <Route
            path="/addnewdeliveryvehicle"
            element={<AddNewDeliveryVehicle />}
          />

          <Route path="CustomerManagement" element={<CustomerManagement />} />
          <Route path="CustomerDetails" element={<CustomerDetails />} />
          <Route
            path="CapacitySlotManagement/*"
            element={<CapacitySlotMgmt />}
          />
          <Route path="CpuCapacityDetails" element={<CpuCapacityDetails />} />
          <Route
            path="CpuCapacityDetailsInfo"
            element={<CpuCapacityDeatilsInfo />}
          />
          <Route path="HubCapacityDetails" element={<HubCapacityDetails />} />
          <Route
            path="HubCapacityDetailsInfo"
            element={<HubCapacityDetailsInfo />}
          />
          <Route path="OrderDetails" element={<OrderDetails />} />

          <Route
            path="CapacitySlotManagement/*"
            element={<CapacitySlotMgmt />}
          />
          <Route path="RoutePlanManagemet" element={<RoutePlanManagemet />} />
          <Route
            path="RoutePlanManagemet/RoutePlanDetails"
            element={<RoutePlanDetails />}
          />
          <Route path="RoutePlanDetails" element={<RoutePlanDetails />} />

          <Route
            path="ServiceBagManagement"
            element={<ServiceBagManagement />}
          />
          <Route path="ServicePlace" element={<ServicePlace />} />

          <Route
            path="CatalogueManagement/*"
            element={<CatalogueManagement />}
          />
          <Route path="AddItem" element={<AddItem />} />
          <Route path="ItemDetails" element={<ItemDetails />} />
          <Route path="ItemDetailsEdit" element={<ItemDetailsEdit />} />
          <Route path="AddOnDetails" element={<AddOnDetails />} />
          <Route path="AddAddones" element={<AddAddones />} />
          <Route path="AddOnDetailsEdit" element={<AddOnDetailsEdit />} />
        </Route>

        <Route path="*" element={<>No Page Found</>} />
      </Routes>
    </BrowserRouter>
  );
};
