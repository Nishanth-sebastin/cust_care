import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import App from "../webcomp/app";
import IndexAdmin from "../layouts/admin/indexAdmin";
import IndexCust from "../layouts/customers/indexCust";
import IndexAgents from "../layouts/agents/indexAgents";
import { OrgSignup } from "../Signup/register/Orgregister/components/OrgSignup";
import { CustSignup } from "../Signup/register/CustRegister/components/CustSignup";
import { OrgLogin } from "../Signup/login/OrgLogin/components/OrgLogin";
import { CustLogin } from "../Signup/login/CustLogin/components/CustLogin";
import PageErr from "../ErrorBoundary/PageErr";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Dashboard from "../Container/agents/Dashboard";
import LayoutAgent from "../MainLayout/LayoutAgent";
import LayoutCustomer from "../MainLayout/LayoutCustomer";
import Tickets from "../Container/agents/Tickets";
import TicketDetails from "../Container/agents/TicketDetails";
import CustomerDashboard from "../Container/Customer/Dashboard"
import CustomerSubmitQuery from "../Container/Customer/SubmitQuery/index.js"
import CustomerTickets from "../Container/Customer/Tickets/index.js"
import CustomerCall from "../Container/Customer/Call/index.js"
import CustomerProfile from "../Container/Customer/Profile/index.js"
<<<<<<< HEAD
// import CustomerSignout from "../Container/Customer/SignOut/index.js"
=======

>>>>>>> 5240f553772f0ee15bdf61ebc066dd8ff01fba17
import Customers from "../Container/agents/Customers";
import Notifications from "../Container/agents/Notifications";
import Profile from "../Container/agents/Profile";
import DashboardAdmin from "../Container/admin/DashboardAdmin";
import TicketsAdmin from "../Container/admin/TicketsAdmin";
import AgentsAdmin from "../Container/admin/AgentsAdmin";
import NotificationsAdmin from "../Container/admin/NotificationsAdmin";
import OrgProfileAdmin from "../Container/admin/OrgProfileAdmin";
import AddAgents from "../Container/admin/AddAgent/AddAgents";
import AgentLogin from "../Signup/login/AgentLogin/AgentLogin";



class Routerapp extends React.Component {


    render() {

        const admin = localStorage.getItem("orgname")
        const customer = localStorage.getItem("custname")
        // const submitquery = localStorage.getItem("submitquery")
        const path = `/organization/${admin}/admin/`

        console.log(admin)
        return (


            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/organization/register" element={<OrgSignup />} />
                    <Route path="/organization/login" element={<OrgLogin />} />
                    <Route path="/customer/login" element={<CustLogin />} />
                    <Route path="/customer/register" element={<CustSignup />} />
                    <Route path={`/customer/${customer}/main`} element={<CustomerDashboard />} />
                    <Route path={`/organization/${admin}/admin/`} element={<DashboardAdmin />} />
                    <Route path="/organization/agent/" element={<Dashboard />} />
                    <Route path='/organization/agent/dashboard/' element={<Dashboard />} />
                    <Route path='/organization/agent/tickets/' element={<Tickets />} />
                    <Route path='/customer' element={<LayoutCustomer />} />
                    <Route path="/organization/agent/login" element={<AgentLogin />} />
                    <Route path='/organization/agent/customers/' element={<Customers />} />
                    <Route path='/organization/agent/notifications/' element={<Notifications />} />
                    <Route path='/organization/agent/profile/' element={<Profile />} />
                    <Route path="*" element={<PageErr />} />
                    <Route path='/organization/agents/tickets/1' element={<TicketDetails />}></Route>
                    <Route path={`/customer/${customer}/tickets/`} element={<CustomerTickets />} />
                    <Route path={`/customer/${customer}/submitquery`} element={<CustomerSubmitQuery />} />
                    <Route path={`/customer/${customer}/dashboard`} element={<CustomerDashboard />} />
                    <Route path={`/customer/${customer}/call`} element={<CustomerCall />} />
                    <Route path={`/customer/${customer}/profile`} element={<CustomerProfile />} />
                    <Route path={`/customer/${customer}tickets/`} element={<CustomerTickets />} />
<<<<<<< HEAD
                    {/* <Route path='/customer/signout' element={<CustomerSignout />} /> */}
=======
>>>>>>> 5240f553772f0ee15bdf61ebc066dd8ff01fba17
                    <Route path={`/organization/${admin}/admin/dashboard`} element={<DashboardAdmin />} />
                    <Route path={`/organization/${admin}/admin/tickets`} element={<TicketsAdmin />} />
                    <Route path={`/organization/${admin}/admin/agents`} element={<AgentsAdmin />} />
                    <Route path={`/organization/${admin}/admin/notifications`} element={<NotificationsAdmin />} />
                    <Route path={`/organization/${admin}/admin/profile`} element={<OrgProfileAdmin />} />
                    <Route path={`/organization/${admin}/admin/addagents`} element={<AddAgents />} />

                </Routes>
            </Router>
        );
    }
}

export default Routerapp