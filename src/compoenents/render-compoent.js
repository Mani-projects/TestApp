import React from "react";
import { STATUS } from "../server/constants";
import loadingComponent from "./loading-component";

export const RenderComponent = ({ data, apistatus }) => {
  let component = "";
  switch (apistatus) {
    case STATUS.PENDING:
      component = LoadingComponent();
      break;
    case STATUS.ERROR:
      component = ErrorCompoenent();
      break;
    case STATUS.COMPLETED:
      component = CompletedComponent(data);
      break;
    default:
      component = DefaultComponent();
  }
  return component;
};

const LoadingComponent = () => loadingComponent();
const ErrorCompoenent = () => <h2>ErrorCompoenent</h2>;
const DefaultComponent = () => <h2>DefaultComponent</h2>;
const CompletedComponent = (userData) => <h2>{JSON.stringify(userData)}</h2>;
