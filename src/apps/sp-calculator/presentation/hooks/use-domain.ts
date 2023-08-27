import { useContext } from "react";
import { DomainContext } from "../contexts/domain.context";

export const useDomain = () => useContext(DomainContext);
