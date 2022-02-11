import React from "react";
import SideBar from "./components/sidebar/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import appRoutes from "./routes";
import { IRoute } from "./typing/route";

const App: React.FC = () => {
  const getRoutes = (routes: IRoute[]) => {
    return routes.map((prop, key) => {
      if (prop.path) {
        return (
          <Route
            exact
            path={prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <Router>
      <Helmet>
        <title>
          Taro Nguyen || Full-Stack Developer || React TypeScript || NodeJS
        </title>
      </Helmet>
      <Switch>
        <div className="flex">
          {/* Sidebar */}
          <SideBar />
          {getRoutes(appRoutes)}
          {/* Main */}
        </div>
      </Switch>
    </Router>
  );
};

export default App;
