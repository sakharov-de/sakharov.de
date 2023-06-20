import { useContext } from "react";
import { DomainContext } from "../..";

export const useDomain = () => useContext(DomainContext);
