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
import Tickets from "../Container/agents/Tickets";
import TicketDetails from "../Container/agents/TicketDetails";


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
                    <Route path="/customer/main" element={<IndexCust />} />
                    <Route path="/organization/admin/" element={<IndexAdmin />} />
                    <Route path="/organization/agent/" element={<Dashboard />} />
                    <Route path='/organization/agent/dashboard/' element={<Dashboard />} />
                    <Route path='/organization/agent/tickets/' element={<Tickets />} />
                    <Route path='/organization/agent/customers/' element={<LayoutAgent child='Customers' />} />
                    <Route path='/organization/agent/notifications/' element={<LayoutAgent child='Notifications' />} />
                    <Route path='/organization/agent/profile/' element={<LayoutAgent child='Profile' />} />
                    <Route path="*" element={<PageErr />} />
                    <Route path='/organization/agents/tickets/1' element={<TicketDetails />}></Route>
                </Routes>
            </Router>
        );
    }
}

export default Routerapp