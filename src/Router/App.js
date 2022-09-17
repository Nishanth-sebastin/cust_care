import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from "../webcomp/app";
import ErrBoundary from "../ErrorBoundary/ErrBoundary";
import IndexAdmin from "../layouts/admin/indexAdmin";
import IndexCust from "../layouts/customers/indexCust";
import IndexAgents from "../layouts/agents/indexAgents";
import { OrgSignup } from "../Signup/register/Orgregister/components/OrgSignup";
import { CustSignup } from "../Signup/register/CustRegister/components/CustSignup";
import { OrgLogin } from "../Signup/login/OrgLogin/components/OrgLogin";
import { CustLogin } from "../Signup/login/CustLogin/components/CustLogin";


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
                    <Route path="/organization/agent/" element={<IndexAgents />} />
                    <Route path="*" element={<ErrBoundary />} />
                </Routes>
            </Router>
        );
    }
}

export default Routerapp