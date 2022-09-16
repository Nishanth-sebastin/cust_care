import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from "../webcomp/app";
import ErrBoundary from "../ErrorBoundary/ErrBoundary";
class Routerapp extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/home" element={<App />} />
                    {/* <Route path="/custcare" element={ } />
                    <Route path="/custcare" element={ } />
                    <Route path="/custcare" element={ } />
                    <Route path="/custcare" element={ } /> */}
                    <Route path="*" element={<ErrBoundary />} />
                </Routes>
            </Router>
        );
    }
}

export default Routerapp