import { Router, Link } from "@reach/router";
import PrivateRoute from "./private-route";

import Login from "../account/login";
import Dashboard  from "../common/dashboard";
const  routes = (
    <Router basepath="/">
         <PrivateRoute as={Login} path="/login" />
         <PrivateRoute as={Dashboard} path="/dashboard" />
    </Router>
)
export default routes;