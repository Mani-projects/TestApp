import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { AppService } from "./server/service";
import { UrlPath } from "./server/url";
import { STATUS } from "./server/constants";
import { RenderComponent } from "./compoenents/render-compoent";

function App() {
  const [apistatus, setApistatus] = React.useState(STATUS.IDLE);
  const [userData, setUserData] = React.useState([]);

  React.useEffect(() => {
    initApiService();
  }, []);

  const initApiService = () => {
    setApistatus(STATUS.PENDING);
    let service = new AppService(UrlPath.USERS);
    service
      .getMethod()
      .then(apiResponse)
      .catch((e) => setApistatus(STATUS.ERROR));
  };

  const apiResponse = (a) => {
    console.log("from Component", a);
    setUserData([...a]);
    setTimeout(() => {
      setApistatus(STATUS.COMPLETED);
    }, 1000);
  };

  return (
    <React.Fragment>
      <RenderComponent data={userData} apistatus={apistatus} />
    </React.Fragment>
  );
}

export default App;
