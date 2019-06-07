import {BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" />
        </Switch>
    </BrowserRouter>
);

export default Router;
