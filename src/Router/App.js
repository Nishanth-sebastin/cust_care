import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import CustomerSignout from "../Container/Customer/SignOut/index.js"
import Customers from "../Container/agents/Customers";
import Notifications from "../Container/agents/Notifications";
import Profile from "../Container/agents/Profile";
import DashboardAdmin from "../Container/admin/DashboardAdmin";
import TicketsAdmin from "../Container/admin/TicketsAdmin";
import AgentsAdmin from "../Container/admin/AgentsAdmin";
import NotificationsAdmin from "../Container/admin/NotificationsAdmin";
import OrgProfileAdmin from "../Container/admin/OrgProfileAdmin";
import AddAgents from "../Container/admin/AddAgent/AddAgents";


class Routerapp extends React.Component {
    render() {
        return (

            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/organization/register" element={<OrgSignup />} />
                    <Route path="/organization/login" element={<OrgLogin />} />
                    <Route path="/customer/login" element={<CustLogin />} />
                    <Route path="/customer/register" element={<CustSignup />} />
                    <Route path="/customer/main" element={<CustomerDashboard />} />
                    <Route path="/organization/admin/" element={<DashboardAdmin />} />
                    <Route path="/organization/agent/" element={<Dashboard />} />
                    <Route path='/organization/agent/dashboard/' element={<Dashboard />} />
                    <Route path='/organization/agent/tickets/' element={<Tickets />} />
                    <Route path='/customer' element={<LayoutCustomer />} />
                    <Route path='/organization/agent/customers/' element={<Customers />} />
                    <Route path='/organization/agent/notifications/' element={<Notifications />} />
                    <Route path='/organization/agent/profile/' element={<Profile />} />
                    <Route path="*" element={<PageErr />} />
                    <Route path='/organization/agents/tickets/1' element={<TicketDetails />}></Route>
                    <Route path='/customer/tickets/' element={<CustomerTickets />} />
                    <Route path="/customer/submitquery" element={<CustomerSubmitQuery />} />
                    <Route path="/customer/dashboard" element={<CustomerDashboard />} />
                    <Route path='/customer/call' element={<CustomerCall />} />
                    <Route path='/customer/profile' element={<CustomerProfile />} />
                    <Route path='/customer/tickets/' element={<CustomerTickets />} />
                    <Route path='/customer/signout' element={<CustomerSignout />} />
                    <Route path="/organization/admin/dashboard" element={<DashboardAdmin />} />
                    <Route path="/organization/admin/tickets" element={<TicketsAdmin />} />
                    <Route path="/organization/admin/agents" element={<AgentsAdmin />} />
                    <Route path="/organization/admin/notifications" element={<NotificationsAdmin />} />
                    <Route path="/organization/admin/profile" element={<OrgProfileAdmin />} />
                    <Route path="/organization/admin/addagents" element={<AddAgents />} />
                    <Route path="/organization/admin/" element={<DashboardAdmin />} />

                </Routes>
            </Router>
        );
    }
}

export default Routerapp