import React from "react";
import { Domain } from "../../domain";
import { fillFakeData } from "../../data";

fillFakeData(Domain.getInstance());

export const DomainContext = React.createContext(Domain.getInstance());
