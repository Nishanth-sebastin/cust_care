import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from "../webcomp/app";
import ErrBoundary from "../ErrorBoundary/ErrBoundary";
import Orglogin from "../signup/org_auth/orglogin";
import Custlogin from "../signup/cust_auth/custlogin";
import Orgreg from "../signup/org_auth/orgreg";
import CustReg from "../signup/cust_auth/custreg";
import IndexAdmin from "../layouts/admin/indexAdmin";
import IndexCust from "../layouts/customers/indexCust";
import IndexAgents from "../layouts/agents/indexAgents";
class Routerapp extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/organization/login" element={<Orglogin />} />
                    <Route path="/organization/register" element={<Orgreg />} />
                    <Route path="/customer/login" element={<Custlogin />} />
                    <Route path="/customer/register" element={<CustReg />} />
                    <Route path="/customer/main" element={<IndexCust />} />
                    <Route path="/organization/admin/" element={<IndexAdmin />} />
                    <Route path="/organization/agent/" element={<IndexAgents />} />
                    <Route path="*" element={<ErrBoundary />} />
                </Routes>
            </Router>
        );
    }
}

export default Routerapp